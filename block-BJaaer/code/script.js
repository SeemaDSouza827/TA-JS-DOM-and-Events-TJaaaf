form=document.querySelector("form")
form.addEventListener("submit",infoToServer)

let userInfo={}
function chooseBookType(){
    if(document.getElementById("fiction").checked){
        userInfo.bookGenre="fiction";
    }
    else if(document.getElementById("non-fiction").checked){
        userInfo.bookGenre="non-fiction";
    }
    else if(document.getElementById("adventure").checked){
        userInfo.bookGenre="adventure";
    }
}
function checkTerms(){
     userInfo.terms==false?alert("please accept out terms and condition to continue"):userInfo.pass=true;
}
function newPage(){
    newDoc=document.body.firstElementChild.firstElementChild;
    newDoc.innerHTML="";
    br=document.createElement("br");

    button=document.createElement("button");
    button.setAttribute("data-type","close");
    button.innerText="Close";
    button.addEventListener("click",function(e){
    location.reload()});
    button.style.backgroundColor="transparent";
    button.style.textAlign="right"
    button.style.borderWidth="0px "
    newDoc.append(button);
    newDoc.append(br);

    h2=document.createElement("h2");
    h2.innerText="Hello "+userInfo.name;

    h2.style.fontWeight="900";
    h2.style.fontSize="30px";
    newDoc.append(br);
    newDoc.append(h2)

    email=document.createElement("h2");
    email.innerText="Email: "+userInfo.email;
    email.style.fontWeight="900";
    email.style.fontSize="20px";
    newDoc.append(email)

    watch=document.createElement("h2");
    watch.innerText="You love: "+userInfo.gender;
    watch.style.fontWeight="900";
    watch.style.fontSize="20px";
    newDoc.append(watch)

    colorFav=document.createElement("h2");
    colorFav.innerText="Color: "+userInfo.color;
    colorFav.style.fontWeight="900";
    colorFav.style.fontSize="20px";
    newDoc.append(colorFav);

    rating=document.createElement("h2");
    rating.innerText="Rating: "+userInfo.rating;
    rating.style.fontWeight="900";
    rating.style.fontSize="20px";
    newDoc.append(rating);

    book=document.createElement("h2");
    book.innerText="Book Genre: "+userInfo.bookGenre;
    book.style.fontWeight="900";
    book.style.fontSize="20px";
    newDoc.append(book);

    a=document.createElement("a");
    a.style.textDecoration="underline"
    a.innerText="You have agreed to our terms and conditions ";
    a.style.fontWeight="900";
    a.style.fontSize="20px";
    newDoc.append(a);

}
function pageReset(){
    userInfo.pass==true?newPage():"";
}
function infoToServer(e){
    e.preventDefault();
    userInfo.name=form.elements.text.value;
    userInfo.email=form.elements.email.value;
    userInfo.gender=form.elements.gender.value;
    userInfo.color=form.elements.color.value;
    userInfo.range=form.elements.range.value;
    userInfo.terms=form.elements.terms.checked;
    checkTerms();
    chooseBookType();
    pageReset()

    console.log(userInfo);
}