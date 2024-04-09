/* this function gets the task from input*/
function get_todos() {
    /*This creates an array of task that are inputed*/
    var todos = new Array;
    /*this pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null then JSON.parse will
    communitcate with the web browser to make the task a JavaScript object.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}


/*This function adds the inputed task to the get_todos function array*/
function add() {
    /*This takes the inputed task and creates a variable of it*/
    var task = document.getElementById('task').value;
    var todos = get_todos();
    /*This adds a new task the end of the array*/
    todos.push(task);
    /* this converts the task input to a JSON string*/
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value
    show();
    return false;
}

/*this function keeps the tasks permanetly displayed on the screen*/
function show() {
    /* this sets the task that was retrieved as a variable*/
    var todos = get_todos();
    /*This this sets up each task as an unordered list*/
    var html = '<ul>';
    /*This displays a task to the list in the order that it is inputed*/
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos [i] + '<button class="remove" id="' + i + '">x</button></li>';
    }
    ;
    html += '</ul>';
    /*This displays the task as a list*/
    document.getElementById('todos').innerHTML = html;
}

/*this also displays the task as a list and creates the button with the "x"*/
/*This displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this will keep the inputs displayed permantaly on the screen*/
show();

function remove(){
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}
var button = document.getElementsByClassName('remove');
for (var i =0; i < button;i++){
    button[i].addEventListener('click',remove);
}