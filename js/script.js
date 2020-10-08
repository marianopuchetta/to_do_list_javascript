const app = document.getElementById("app");
const buttons = document.getElementById("buttons");
var tasks = [];

const mostrar = () => {
    app.innerHTML = '';
    for (var task in tasks) {
        html = `<li>${tasks[task]} <button id="${task}" class="btn btn-outline-danger" value="${task}" onclick="deleteTask(this)">Delete</button></li>`
        app.innerHTML += html;
    }
}


var indexToDelete = "";

function deleteTask(button) {
    indexToDelete = button.value;
    delete tasks[indexToDelete];
    mostrar();
}

function clearInput() {
    document.getElementById('input').value = '';
}
buttons.addEventListener('click', () => { })
$(document).ready(function () {
    $('body #buttons').on('click', 'button', function () {
        var input = document.getElementById("input").value;
        if (input !== '') {
            switch ($(this).attr('id')) {
                case ('addTop'):
                    tasks.unshift(input);
                    break;
                case ('addBottom'):
                    tasks.push(input);
                    break;
            }
        }else{
            alert('Enter a tasks')
        }

        mostrar();
        clearInput();
    })
})

