(function () {
    'use strict';

    let offset;
    let dragging = false;
    let zIndex = 0;
    const storage = JSON.parse(localStorage.getItem('storage')) || [];
    console.log(storage);

    document.addEventListener('mousedown', e => {
        e.preventDefault();
        console.log(e);
        if (e.target.className === 'originImg') {

            const img = document.createElement('img');
            img.src = e.target.src;
            img.style.position = 'absolute';
            img.className = 'copyImg';
            img.style.left = `${e.pageX - e.offsetX}px`;
            img.style.top = `${e.pageY - e.offsetY}px`;
            img.style.width = getComputedStyle(e.target).width;
            img.style.zIndex = ++zIndex;
            if (e.target.id === 'mrPotato') {
                img.style.width = '150px';
            }
            document.body.append(img);

            dragging = e.target;
            offset = { x: e.offsetX, y: e.offsetY };

        }

        if (e.target.className === 'copyImg') {
            dragging = e.target;
            offset = { x: e.offsetX, y: e.offsetY };
        }
    });
    document.addEventListener('mousemove', e => {
        e.preventDefault();
        if (dragging) {
            e.target.style.left = `${e.pageX - offset.x}px`;
            e.target.style.top = `${e.pageY - offset.y}px`;
        }
    });

    document.addEventListener('mouseup', e => {
        console.log(e.target.width);
        console.log(e.pageX - e.offsetX);
        if (e.target.className === 'copyImg') {
            let location = { x: `${e.pageX - e.offsetX}`, y: `${e.pageY - e.offsetY}` };
            storage.push({ img: `${e.target.src}`, location, width: e.target.width });
            localStorage.setItem('storage', JSON.stringify(storage));
        }

        dragging = null;

    });



    
    let addedImges = [];
    document.querySelector('#loadBtn').addEventListener('click', () => {
        storage.forEach(element => {
            const img = document.createElement('img');
            img.src = element.img;
            img.style.position = 'absolute';
            img.className = 'copyImg';
            img.style.left = `${element.location.x}px`;
            img.style.top = `${element.location.y}px`;
            img.style.width = `${element.width}px`;
            document.body.append(img);
            addedImges.push(img);
        });
        console.log(storage);
        console.log(addedImges);
    });
    document.querySelector('#clearBtn').addEventListener('click', () => {
        addedImges.forEach(element => {
            document.body.removeChild(element);
        });
        addedImges = [];
        console.log(addedImges);
    });
    document.querySelector('#clearStorageBtn').addEventListener('click', () => {
        localStorage.clear();
    });
    document.querySelector('#musicBtn').addEventListener('click', () => {
    const audio = document.querySelector('#audio');
    audio.play();
    });
   
}());