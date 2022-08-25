box=document.querySelector(".box")
box.classList.add("flex")

//create 500 boxes
  for(let i=0;i<500;i++){
    smallbox=document.createElement("div");
    smallbox.style.width="4rem";
    smallbox.style.height="4rem";
    smallbox.innerText=getRandomInt();
    smallbox.style.backgroundColor=initialCOlor();
    smallbox.classList.add("changeAll");
    box.append(smallbox);
}

//initial numbers for the boxes
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(500));
}

//initial colors for the random boxes
function initialCOlor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

//random number and color generator when mouse moves
function moveRandomNumber() {
    for(let i=1;i<=500;i++)
    {smallbox[i].style.backgroundColor=initialCOlor();
    smallbox[i].innerText=getRandomInt();
    }  

}
smallbox=document.querySelectorAll("div");
box.addEventListener("mousemove",moveRandomNumber);