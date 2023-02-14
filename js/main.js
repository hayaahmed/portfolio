//can made a way when go down the hedaer more than (100 h of the header make the bg of it bg-main) give class sticky has properties
let menuicon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menuicon.addEventListener("click", () => {
    navlist.classList.toggle("open");
    menuicon.classList.toggle("bx-x");
});
window.onscroll = () => {
    navlist.classList.remove("open");
    menuicon.classList.remove("bx-x");
}

let theemail = document.querySelector(".copyemail");
let success = document.querySelector(".success");
let copy = document.querySelector("#copy-btn");
copy.addEventListener("click", (e) => {
    e.preventDefault();
    theemail.select();
    theemail.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(theemail.value);


    success.classList.add("active");
    setTimeout(function () {
        success.classList.remove("active");
    }, 2000)

})

// let btn = document.querySelector("button");

// window.onscroll = function () {
//   if (window.scrollY >= 600) {
//     btn.style.display = "block";
//   } else {
//     btn.style.display = "none";
//   }
// };

// btn.onclick = function () {
//   window.scrollTo({
//     left: 0,
//     top: 0,
//     behavior: "smooth",
//   });
// };