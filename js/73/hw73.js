(function () {
    'use strict';
    const modal = document.querySelector('#modal');
    const video = document.querySelector('#video');
    const loadBtn = document.querySelector('#loadBtn');
    const ul = document.querySelector('ul');
    const close = document.querySelector('#close');
    const videoDiv = document.querySelector('#videoDiv');


    loadBtn.addEventListener('click', async () => {

        const r = await fetch('videos.json');
        console.log(r);
        const videoData = await r.json();
        console.log(videoData);


        videoData.forEach(obj => {
            const li = document.createElement('li');
            ul.append(li);

            const title = document.createElement('h3');
            title.textContent = obj.title;
            const img = document.createElement('img');
            img.src = obj.img;
            img.alt = `video of ${obj.title}`;
            img.addEventListener('click', () => {
                modal.style.display = 'inline-block';
                videoDiv.style.display = 'inline-block';
                video.src = obj.url;
                video.controls = true;
                video.play();
            });
            li.append(title, img);
        });
    });
    close.addEventListener('click', () => {
        videoDiv.style.display = 'none';
        modal.style.display = 'none';
        video.pause();
    });
}());




