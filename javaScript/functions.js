let prompt = require("prompt-sync")();

var x =5;

function myFunc(){
  
    z = x / 3;

   console.log(z)
}

   console.log(x)
   myFunc()

   function myFunc2(x,y){
          
    w=x-y;
    console.log(w)
   }

   myFunc2(30,4)

   
function checkAge(age){
   
    if(age >= 18){
        return true;
    }else{
        return console.log("Did you get permission?");
    }

}

  let age = prompt("Enter age over ");

      if(checkAge(age)){
           console.log("granted");
           showMovie();
      }else{
        console.log(" not granted");
      }

function showMovie(){
    d=20;
    for(i=0;i=d;i--){
        console.log(" not granted");

    }


}      