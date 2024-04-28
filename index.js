const inputs = document.querySelector('#inputs');
const btns = document.querySelector('#btns');
const contenar = document.querySelector('#contenar');

function addnewtodo() {
    let inputtext = inputs.value.trim();
    if (inputtext.length <= 0) {
        alert("enter the value in input box");
        return false;
    }
    const pera = document.createElement('p');
    pera.classList.add('pera');
    pera.innerText = inputtext;
    contenar.appendChild(pera);
    inputs.value = "";
    pera.addEventListener('dblclick', function () {
        contenar.removeChild(pera);
    })
    savetodo(inputtext);
}



function savetodo(todo) {
    let todos;
    if (localStorage.getItem('todos') == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
}

function localstor() {
    let todos;
    if (localStorage.getItem('todos') == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
        todos.forEach(todo => {
            const pera = document.createElement('p');
            pera.classList.add('pera');
            pera.innerText = todo;
            contenar.appendChild(pera);
        });
    }
    
}

document.addEventListener('DOMContentLoaded', localstor
)
btns.addEventListener('click', addnewtodo)






