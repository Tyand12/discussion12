document.addEventListener("DOMContentLoaded", function () {
    const secondCaption = document.querySelectorAll("figcaption")[1].innerText;
    alert(secondCaption);
  
    const display = document.getElementById("display");
    const thumbnails = document.querySelectorAll(".thumbnail");
  
    thumbnails.forEach((img) => {
      function updateDisplay() {
        display.style.backgroundImage = `url(${img.src})`;
        display.textContent = img.alt;
        img.style.visibility = "hidden";
      }
  
      function resetDisplay() {
        display.style.backgroundImage = "";
        display.textContent = "Hover over an image below to display the image and the alt text.";
        img.style.visibility = "visible";
      }
  
      img.addEventListener("mouseover", updateDisplay);
      img.addEventListener("mouseout", resetDisplay);
  
      img.addEventListener("focus", updateDisplay);
      img.addEventListener("blur", resetDisplay);
  
      if (!img.hasAttribute("tabindex")) {
        img.setAttribute("tabindex", "0");
      }
    });
  });
  
