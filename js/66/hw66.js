(function () {

    let clicks = 1;

    document.querySelector('#theButton1').addEventListener('click', createButton);

    function createButton() {
        const myNewButton = document.createElement('button');
        myNewButton.textContent = ++clicks;
        myNewButton.id = `button${clicks}`;
        document.body.appendChild(myNewButton);
        myNewButton.addEventListener('click', createButton);
    };

    let clicks2 = 1;
    document.querySelector('#divParent').addEventListener('click', e => {
        if (e.target.className === 'buttonInDiv') {
            const myNewButton = document.createElement('button');
            myNewButton.textContent = ++clicks2;
            myNewButton.className = 'buttonInDiv';
            document.querySelector('#divParent').appendChild(myNewButton);
        };
    });
})();