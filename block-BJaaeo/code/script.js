//do calculation
function main(){
    resultDisplay=document.querySelector(".result")
    let result="";
    Number(result)
    resultDisplay.innerText=result
    //click on number and save the innerText in result;
    document.querySelector(".calculator").addEventListener("click", function(e) {
//Number(e.target.innerText) update result
        if(Number(e.target.innerText)){
            result+=e.target.innerText;
            resultDisplay.innerText=result
            console.log(result);
        }
        else if(e.target.innerText=="*"||e.target.innerText=="+"||e.target.innerText=="-"||e.target.innerText=="/"){
            result+=e.target.innerText;
            resultDisplay.innerText=result
        }
        else if(e.target.innerText=="="){
            try{
                result=eval(result);
            }
            catch(e){
                alert(e)
            }
            resultDisplay.innerText=result

        }
        else if(e.target.innerText=="0"){
            result+="0";
            Number(result)
            resultDisplay.innerText=result

        }
        else if(e.target.innerText=="."){
            result+=".";
            Number(result)
            resultDisplay.innerText=result

        }
        else if(e.target.innerText=="C"){
            result=0;
            resultDisplay.innerText=result
        }
        else{
            alert("please click the keys ")
        }
      });

}
main()