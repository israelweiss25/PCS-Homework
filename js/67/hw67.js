(function () {
    'use strict';

    
    const color = document.querySelector('#color');
    const bgcolor = document.querySelector('#bgcolor');
    const tableBody = document.querySelector('tbody');
    

    color.addEventListener('change', () => {
        document.body.style.color = color.value;
        createRow(color);
    });

    bgcolor.addEventListener('change', () => {
        document.body.style.backgroundColor = bgcolor.value;
        createRow(bgcolor);
    });

    function createRow(object){
        const nowDate = new Date();
        const nowTime = nowDate.toTimeString();
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${nowTime}</td>
                         <td>${object.value}</td>
                         <td>${object.id}</td>`;

        row.addEventListener('click', function() {
        this.cells[2].textContent === 'color' ? document.body.style.color = this.cells[1].textContent:  document.body.style.color = this.cells[1].textContent;
        
        createRow(object);

        });
    };
   
}());
