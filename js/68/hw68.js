const pcsMessageBox = (function () {
    'use strict';

    let height = 136;
    let topOffset = -height / 2;
    let width = 240;
    let leftOffset = -width / 2;

    let topZindex = 0;

    const modalDiv = document.createElement('div');
    modalDiv.style.position = 'absolute';
    modalDiv.style.width = '100%';
    modalDiv.style.height = '100%';
    modalDiv.style.left = '0';
    modalDiv.style.top = '0';
    modalDiv.style.backgroundColor = 'lightblue';
    modalDiv.style.opacity = '.5';
    modalDiv.style.display = 'none';

    document.body.appendChild(modalDiv);

    return function (msg, modal, array, callback, callback2) {
        const div = document.createElement('div');
        div.style.boxSizing = 'border-box';
        div.style.backgroundColor = 'lightcyan';
        div.style.border = '1px solid black';
        div.style.padding = '1em';
        div.style.height = `${height}px`;
        div.style.width = '15em';
        div.style.position = 'absolute';
        div.style.top = '50%';
        div.style.left = '50%';
        div.style.marginTop = `${topOffset}px`;
        div.style.marginLeft = `${leftOffset}px`;


        const msgDiv = document.createElement('div');
        msgDiv.innerText = msg;
        msgDiv.style.overflow = 'auto';
        msgDiv.style.height = '5em';


        const buttonDiv = document.createElement('div');
        buttonDiv.style.position = 'absolute';
        buttonDiv.style.bottom = '.5em';
        buttonDiv.style.textAlign = 'center';
        buttonDiv.style.width = '100%';
        buttonDiv.style.left = 0;

        if (!array) {
            const okButton = document.createElement('button');
            okButton.innerText = 'ok';
            buttonDiv.appendChild(okButton);

            okButton.addEventListener('click', () => {
                div.remove();
            });
        } else {
            if (typeof array === 'string'){
                array = array.split(',');

            }
            for (let i = 0; i < array.length; i++) {
                const button = document.createElement('button');
                button.innerText = array[i];
                buttonDiv.appendChild(button);
                if (callback) {
                    button.addEventListener('click', callback);
                    button.addEventListener('dblclick', callback2);
                };
            }
        };




        if (modal) {
            modalDiv.style.display = 'none';
        }

        document.body.appendChild(div);
        div.appendChild(buttonDiv);
        div.appendChild(msgDiv);

        topOffset += 20;
        leftOffset += 20;

        if (topOffset + height + (window.innerHeight / 2) > window.innerHeight) {
            topOffset -= window.innerHeight - height;
        }

        if (leftOffset + width + (window.innerWidth / 2) > window.innerWidth) {
            leftOffset -= window.innerWidth - width;
        }

        if (modal) {
            modalDiv.style.display = 'inline-block';
            modalDiv.style.zIndex = ++topZindex;

            div.style.zIndex = ++topZindex;
            div.style.marginTop = `${-height / 2}px`;
            div.style.marginLeft = `${-width / 2}px`;
        }

        div.addEventListener('click', () => {
            div.style.zIndex = ++topZindex;
        });

    };
}());