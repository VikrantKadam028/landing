function redirect_login(){
    window.location.href = "signup.html";
}

function redirect_signin(){
    window.location.href = "signin.html";

}

const menuToggle = document.querySelector(".menu-toggle");
      const navLinks = document.querySelector(".nav-links");
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });