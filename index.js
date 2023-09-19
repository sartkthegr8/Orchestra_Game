var blength=document.querySelectorAll(".drum").length;

for(i=0;i<blength;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        var button = this.innerHTML;      
        
        sound(button);
        buttonAnimation(button);


    });
}    
   
document.addEventListener("keydown",function(event){
                                                        sound(event.key);
                                                        buttonAnimation(event.key);
                                                    });


    
function sound(key){

    switch(key){
        case "w":
           var audi =new Audio("sounds/crash.mp3");
           audi.play();
           break;
           
       case "a":
           var audi =new Audio("sounds/kick-bass.mp3");
           audi.play();
           break;
       
       case "s":
           var audi =new Audio("sounds/snare.mp3");
               audi.play();
               break;
       
       case "d":
                   var audi =new Audio("sounds/tom-1.mp3");
                   audi.play();
                   break;
       
       case "j":
                       var audi =new Audio("sounds/tom-2.mp3");
                       audi.play();
                       break;
       
       case "k":
                           var audi =new Audio("sounds/tom-3.mp3");
                           audi.play();
                           break;
       
       case "l":
                            var audi =new Audio("sounds/tom-4.mp3");
                            audi.play();
                            break;
        
        default: console.log(key);
        
    }                       

}


function buttonAnimation(kee) {

    var activeButton = document.querySelector("." + kee);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
   


