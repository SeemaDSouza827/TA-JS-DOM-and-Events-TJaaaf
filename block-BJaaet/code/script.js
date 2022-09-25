function main(){
    //control input enter text>click enter>call addfn()
search=document.querySelector("input")
value={}
console.dir(search);
search.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    value.post=search.value;
    search.value="";
     event.preventDefault();
     callfn()
    }
  });
/*callfn()
add the following template
      <div class="checklist-add">
        <input type="checkbox" name="moviename" id="moviename">
        <small>forest Gump</small>
        
        <button class="btn">X</button>
      </div>
*/
function callfn(){
        block=document.querySelector(".block")
      div=document.createElement("div");
      div.setAttribute("class","checklist-add");

      input=document.createElement("input");
      input.setAttribute("type","checkbox");
      div.append(input);

      small=document.createElement("small");
      small.innerText=value.post;
      small.style.fontSize="20px";
      div.append(small);
      

      btn=document.createElement("button");
      btn.innerText="X";
      btn.setAttribute("class","btn")
      btn.addEventListener("click",function(e){
           
        e.target.parentElement.remove();})
      div.append(btn);

      hr=document.createElement("hr");
      hr.style.marginBottom="20px"
      div.append(hr);

      block.append(div)

}
}


//if btn is clicked, delete parent node
//done

main()