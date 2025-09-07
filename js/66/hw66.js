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

    document.querySelector('#divParent').addEventListener('click', e => {
        if (e.target.id === 'buttonInDiv') {
            createButton();
        };
    });
})();