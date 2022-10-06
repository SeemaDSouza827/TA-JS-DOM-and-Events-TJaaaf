search=document.querySelector("#search")
root=document.querySelector(".outflow")
search.addEventListener("keyup",todoList)
h1=document.querySelector("h1")
var d = new Date();
h1.innerHTML=`Todo list of: ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
let count=0
let arr=JSON.parse(localStorage.getItem("lcTodo"))|| [];
createUI()
//save all todos as a array of objects
function todoList(e){
    if(e.keyCode==13){
       let val={}
       val.task=e.target.value;
       val.todo=false;
       val.id=count++
       arr.push(val);
       search.value="";
       createUI();
    }
}
//delete done task "X"
function closeTask(e){
arr.splice(e.target.parentElement.id,1)
createUI()
}
//create UI
function createUI(){
localStorage.setItem("lcTodo",JSON.stringify(arr));
    root.innerHTML="";
  arr.forEach((val,index)=>{ 
      //outter box    
    div=document.createElement("div");
    div.classList.add("display-box","incomplete","flex")
    div.setAttribute("id",index);
    input=document.createElement("input");
    input.setAttribute("type","checkbox");
    input.addEventListener("click",toggleTodo);
    input.checked=val.todo;
    div.append(input);     
    h2=document.createElement("h2");
    if(val.todo==true){        
        h2.classList.add("lineThrough")
        div.classList.add("complete")
    }
    else{
        h2.classList.remove("lineThrough");        
    }
    h2.innerText=val.task;
    div.append(h2);   
    span=document.createElement("span");
    span.innerText="X";
    span.addEventListener("click",closeTask)
    div.append(span);
    root.append(div);
  })
}
function toggleTodo(e){
    arr[e.target.parentElement.id].todo=!arr[e.target.parentElement.id].todo;
    createUI();
}