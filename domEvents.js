let btn = document.getElementsByTagName("button")[0];
console.log(btn);

let container = document.querySelector(".container");
console.log(container);

container.addEventListener("click", function ({ target: t }) {
  //   console.log("click");
  //   console.log(e.target); //click ->
  //   console.log(this); //div

  console.log(t);
  // if (this != e.target) {
  //   e.target.classList.toggle("bgRed");
  // }

  if (this != t) {
    t.classList.toggle("bgRed");
  }
});

function changeBgColor() {
  //   console.log("click");
  //   btn.style.backgroundColor = "red";
  btn.classList.toggle("bgRed");
}

// document.addEventListener("contextmenu", function (e) {
//   console.log("d");
//   e.preventDefault();
// });

// btn.onclick=function(){}

//addEventListener("event" , ()=>{})

// btn[0].addEventListener("click", function (e) {
//   console.log(this); // element
//   console.log(e);
//   btn.classList.toggle("bgRed");
// });
// btn[1].addEventListener("click", function (e) {
//   console.log(this); // element
//   console.log(e);
//   btn.classList.toggle("bgRed");
// });
// btn[2].addEventListener("click", function (e) {
//   console.log(this); // element
//   console.log(e);
//   btn.classList.toggle("bgRed");
// });
