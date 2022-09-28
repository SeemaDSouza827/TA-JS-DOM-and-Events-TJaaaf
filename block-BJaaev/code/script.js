//basics
/*addEventListner at input type="text" when keyup==13
add 2 values to a object
{ task:e.target.value
 isDone:false
}
*/
todo = document.querySelector("#todo");
ul = document.querySelector("ul");
allTodo =JSON.parse(localStorage.getItem("allTodoJ"))||[];
createUI();
//array of objects created
function addTask(e) {
    if (e.keyCode == 13 && todo.value != "") {
        todoTask = {}
        todoTask.task = todo.value;
        todoTask.isDone = false;
        allTodo.push(todoTask)
        localStorage.setItem("allTodoJ",JSON.stringify(allTodo))
        todo.value = "";
        createUI();
    }
}
/*
        <li>
          <input type="checkbox">
          <span>Learn DOM</span>
          <small>X</small>
        </li>
*/
/*
createUI based on what is in the array of objects using forEach
ul.innerHTML="" so it does not reoccur again and again
*/

function createUI() {

    ul.innerHTML = "";
    allTodo.forEach((element, index) => {

        li = document.createElement("li")
        li.style.backgroundColor = "white"
        li.style.border = "1px solid black"
        li.style.borderRadius = "2px"
        li.style.margin = "2px"

        input = document.createElement("input")
        input.setAttribute("type", "checkbox")
        input.setAttribute("class", "checkbox")
        input.setAttribute("id", index)
        input.checked = element.isDone;
        input.addEventListener("change", toggle)

        span = document.createElement("span")
        span.innerText = element.task;
        span.style.fontSize = "30px"

        small = document.createElement("small")
        small.setAttribute("id", index)
        small.innerText = "X";
        small.style.float = "right";
        small.addEventListener("click", deleteElement)

        li.prepend(input, span, small)
        ul.prepend(li)
        
    });
}
//functionality
/*
when you click X -> DELETE VALUE from object using splice(index,1)
and call createUI
*/

function deleteElement(e) {
    i = e.target.id
    allTodo.splice(i, 1)
    createUI()
    localStorage.setItem("allTodoJ",JSON.stringify(allTodo))
}
/*
when when input:checked is clicked get the index go to object and 
toggle value of isDone=!isDone
*/
function toggle(e) {
    i = e.target.id;
    allTodo[i].isDone = e.srcElement.checked;
    localStorage.setItem("allTodoJ",JSON.stringify(allTodo))
}
todo.addEventListener("keyup", addTask)

//locanStorage