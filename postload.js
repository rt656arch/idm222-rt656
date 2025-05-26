/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += "responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// const IDM212obj = document.getElementById("IDM212final");
// const VSST109obj = document.getElementById("VSST109final");

// IDM212obj.addEventListener("click", () => {
// //   alert("section clicked on");
//   window.open("case_study1.html");
//    });

// VSST109obj.addEventListener("click", () => {
// //   alert("section clicked on");
//   window.open("case_study2.html");
//    });

document.getElementById("IDM212final")?.addEventListener("click", () => {
  window.open("case_study1.html");
});

document.getElementById("VSST109final")?.addEventListener("click", () => {
  window.open("case_study2.html");
});

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))