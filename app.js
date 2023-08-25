const hamburger = document.querySelector(".hamburger")
const navlist = document.querySelector(".nav-list")
const closebtn = document.querySelector(".close")




hamburger.addEventListener("click", ()=>{
  navlist.classList.add("open");
  closebtn.style.display = "block";
  console.log("clicked")
  hamburger.style.visibility= "hidden";
})

closebtn.addEventListener("click", ()=>{
    // navlist.style.display = "none"
    navlist.classList.remove("open");
    closebtn.style.display = "none";
    hamburger.style.visibility= "visible";
  })

