//if we use the handleClick() inside the eventlisterner then it will be the straight up function call so thats why we dont use ()
let noOfDrums = document.querySelectorAll(".drum").length;


for(let i=0; i<noOfDrums; i++ ){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", () => {
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
    })

}




 
