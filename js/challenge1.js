document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector("h1");
    heading.classList.add("styled-heading");

    document.body.addEventListener("dblclick", function () {
      alert("Current Time: " + new Date().toLocaleTimeString());
    });
  
    const toggle = document.getElementById("toggle");
    const emailBox = document.getElementById("emailBox");
  
    toggle.addEventListener("change", function () {
      if (this.checked) {
        emailBox.classList.remove("hidden");
      } else {
        emailBox.classList.add("hidden");
      }
    });
  });
  
