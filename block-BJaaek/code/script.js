first=document.querySelector(".first")
second=document.querySelector(".second")

function rand(className){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    //as per documentation this. reffers to the current target=> in this case this reffers to "first"
    this.style.backgroundColor=color;
    
}
console.log(first.addEventListener("click",rand)); 
console.log(second.addEventListener("mousemove",rand)); 