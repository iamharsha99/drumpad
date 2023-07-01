var numberOfButtons = document.querySelectorAll(".button").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);


  });

}
document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  var t=document.getElementById("bt"+event.key)
    t.classList.add("bt-click");
    setTimeout(() => {
        t.classList.remove("bt-click");
      }, 150);

});
function makeSound(key) {

  switch (key) {
    case "1":
      var tom1 = new Audio("sounds/sound_1.mp3");
      tom1.play();
      break;

    case "2":
      var tom2 = new Audio("sounds/sound_2.mp3");
      tom2.play();
      break;

    case "3":
      var tom3 = new Audio('sounds/sound_3.mp3');
      tom3.play();
      break;

    case "4":
      var tom4 = new Audio('sounds/sound_4.mp3');
      tom4.play();
      break;

    case "5":
      var snare = new Audio('sounds/sound_5.mp3');
      snare.play();
      break;

    case "6":
      var crash = new Audio('sounds/sound_6.mp3');
      crash.play();
      break;

    case "7":
      var kick = new Audio('sounds/sound_7.mp3');
      kick.play();
      break;
    case "8":
       var kick2 = new Audio('sounds/sound_8.mp3');
        kick2.play();
        break;
    case "9":
       var kick3 = new Audio('sounds/sound_9.mp3');
          kick3.play();
          break;

    default: console.log(key);

  }
}
