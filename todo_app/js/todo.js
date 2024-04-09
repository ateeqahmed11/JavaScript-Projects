// Gets the tasks from localStorage
function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// Adds the inputted task to the list and updates localStorage
function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = ''; // Clear the input after adding
    show();
    return false;
}

// Displays the tasks as a list
function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    }
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    // Add event listeners to remove buttons here to ensure they exist before attaching listeners
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

// Removes a task from the list
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

// Initializes the app
document.getElementById('add').addEventListener('click', add);
show(); // To display already stored tasks on page load
