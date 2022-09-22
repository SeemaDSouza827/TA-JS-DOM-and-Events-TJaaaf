function main(){
    form=document.querySelector("form");
    textError=""
    pass=0
    function usernameLength(){
        //username >4 characters
        if(username.value==""){
            textError="this field cant be empty";
        }
        else if(username.value.length<4){
            textError="this field cant be less than 4 characters"
        }
        else{
            textError=""
            pass+=1;
        }
        username.nextElementSibling.innerText=textError

    }
    function nameString(){
        //name is only string
        var re = /^[A-Za-z]+$/;
        if(nameValue.value=="")
        {
            
            textError="Please fill in your name";
        }
      else  if(!re.test(nameValue.value)&&nameValue.value!="")
        {
            
            textError="Name cannot contain numbers unless your Elon Musks son"
        }
       
     else
        {
            textError=""
            pass+=1;
         }
         nameValue.nextElementSibling.innerText=textError

    }

    function phoneLength(){
        if(phone.value.length<6){
            textError="phone Number incorrect"
        }
        else{
            textError="";
            pass+=1;
        }
        //lenght  >6
        phone.nextElementSibling.innerText=textError
    }

    function passwordCompare(){
     
        if(passwordFirst.value==""){textError="cant be empty"}
        if(passwordFirst.value!==passwordSecond.value){
            textError="passwords should match";
        }
        else if(passwordFirst.value===passwordSecond.value&&passwordFirst.value!=""){
            textError=""
            pass+=1;
            
        }
        passwordSecond.nextElementSibling.innerText=textError
    }

    function checkValidation(){
       usernameLength()
       nameString()
       phoneLength()
       passwordCompare()
        pass==4?alert("User added sucessfully"):""
        pass=0;
    }

    function formValidation(e){
        e.preventDefault();
        username=form.username;
        nameValue=form.name;
        email=form.email;
        phone=form.phone;
        passwordFirst=form.password1;
        passwordSecond=form.password2;
        checkValidation();
        
    }
    form.addEventListener("submit",formValidation)
    console.log(pass);
    
}
main()