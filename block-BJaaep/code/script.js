//1>show random number between 1-12 when you click on a box in that box for 5 seconds and dissapear

//left box add EventListeners to each box 
//right box add EventListeners to each box
//without event is a class for all boxes on the right
box=document.querySelectorAll(".withoutEvent>.box")

//random number and dissapera after 5 seconds
function randomNumber(element){
    element.innerText= Math.floor(Math.random() * 12);
    setTimeout(function(){ element.innerText="";}, 5000);
}
//add event listiners for each element.
box.forEach(element => {
    element.addEventListener("click",function(){
        randomNumber(element);
        
    })
    
    });
//with event is a class for all boxes on the right
//e.target focuses on the perticular element you clicked..that is passed as a element in the function called randomNumber
boxWE=document.querySelector(".withEvent")
boxWE.addEventListener("click",function(e){
    randomNumber(e.target)
})