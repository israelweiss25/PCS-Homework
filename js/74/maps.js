/* global google */
(async function () {
    'use strict';
    const input = document.querySelector('#userInput');
    const searchBtn = document.querySelector('#search');
    const ul = document.querySelector('#list');

    const { Map } = await google.maps.importLibrary('maps');
    const map = new Map(document.getElementById('map'), {
        center: { lat: 41.1132, lng: -74.0438 },
        zoom: 8,
        mapId: 'DEMO_MAP_ID'
    });
    console.log(map);
    const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
    const { LatLngBounds } = await google.maps.importLibrary('core');
    const bounds = new LatLngBounds();

    const markers = [];
    searchBtn.addEventListener('click', async () => {
        try {
            const r = await fetch(`http://api.geonames.org/wikipediaSearch?q=${input.value}&maxRows=10&username=israelweiss18&type=json`);
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            const wikiData = await r.json();
            ul.replaceChildren();
            if (markers.length > 0) {
                markers.forEach((m) => {
                    m.remove();
                });
            }

            wikiData.geonames.forEach(e => {

                const imgElemnt = document.createElement('img');
                imgElemnt.src = `${e.thumbnailImg}`;
                imgElemnt.id = 'pinImg';
                const marker = new AdvancedMarkerElement({
                    map,
                    position: { lat: e.lat, lng: e.lng },
                    title: e.title,
                    content: imgElemnt,
                    anchorLeft: '0px',
                });
                const infoWindow = new google.maps.InfoWindow({
                    content: `${e.summary}<a href='https://${e.wikipediaUrl}'>more info</a>`,
                    maxWidth: 300
                });
                marker.addListener('click', () => {
                    infoWindow.open({
                        anchor: marker,
                        map,
                    });

                });
                markers.push(marker);
                const item = document.createElement('li');
                item.innerHTML = `<h3>${e.title}</h3>
                                <hr>
                            <img src="${e.thumbnailImg}">
                            <p>${e.summary} <a href='https://${e.wikipediaUrl}'>more info</a></p>`;
                ul.append(item);
                item.addEventListener('click', () => {
                    console.log('clicked');
                    map.panTo({ lat: e.lat, lng: e.lng });
                    map.setZoom(10);
                });
                bounds.extend({ lat: e.lat, lng: e.lng });
                map.fitBounds(bounds);
            });
        } catch (error) {
            console.error(error);
        }



    });
}());