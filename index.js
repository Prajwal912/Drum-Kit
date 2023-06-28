//if we use the handleClick() inside the eventlisterner then it will be the straight up function call so thats why we dont use ()
let noOfDrums = document.querySelectorAll(".drum").length;


for (let i = 0; i < noOfDrums; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let innerHTML = this.innerHTML;
    makeSound(innerHTML)
    buttonAnimate(innerHTML)

  })

}




document.addEventListener("keypress", function (event) {
  makeSound(event.key)
  buttonAnimate(event.key)
})

function makeSound(keypress) {
  switch (keypress) {
    case "w":
      var audio1 = new Audio('sounds/crash.mp3');
      audio1.play();
      break;

    case "a":
      var audio2 = new Audio('sounds/kick-bass.mp3');
      audio2.play();
      break;

    case "s":
      var audio3 = new Audio('sounds/snare.mp3');
      audio3.play();
      break;

    case "d":
      var audio4 = new Audio('sounds/tom-1.mp3');
      audio4.play();
      break;

    case "j":
      var audio5 = new Audio('sounds/tom-2.mp3');
      audio5.play();
      break;

    case "k":
      var audio6 = new Audio('sounds/tom-3.mp3');
      audio6.play();
      break;

    case "l":
      var audio7 = new Audio('sounds/tom-4.mp3');
      audio7.play();
      break;

    default:
      break;
  }
}

function buttonAnimate(currentClassofCase) {
  let activeBtn = document.querySelector("." + currentClassofCase)
  console.warn(activeBtn)
  activeBtn.classList.add("pressed")
  
  setTimeout(() => {
    activeBtn.classList.remove("pressed")
  }, 100);
}


// let newEl = document.createElement("div");

// newEl.innerHTML = "this is a newly created div";

// h1.prepend(newEl)


// let div = document.createElement("div");
// let p = document.createElement("p");
// let span = document.createElement("span");
// div.append(p);
// div.prepend(span);


//insert an ele by many ways

//first one is just using innerHTML

// document.getElementById("foot").innerHTML = "<p> hey this is a added footer</p>"

//insertion method
// let aa = document.getElementById("foot")


//  let sec = document.createElement("section");
//  sec.innerHTML = "<p> hey this is a added p inside section</p>" 

// aa.after(sec)
// aa.before(sec)
// aa.append(sec) //inside ele but after the first content
// aa.prepend(sec) //inside ele but before the first content 

let html = `
<p>first para</p>
<p>second para</p>
<p>third para</p>
<p>fourth para</p>
`

// aa.insertAdjacentHTML("beforeend", html)
// aa.insertAdjacentHTML("afterend", html)
// aa.insertAdjacentHTML("beforebegin", html)
// aa.insertAdjacentHTML("afterbegin", html)