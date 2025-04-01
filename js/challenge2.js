document.addEventListener("DOMContentLoaded", function () {

    const billingTextarea = document.getElementById("billing");
    console.log(billingTextarea.value.trim());
  

    const checkbox = document.querySelector("input[name='useBilling']");
    const homeTextarea = document.getElementById("home");
  
    checkbox.addEventListener("change", function () {
      if (this.checked) {

        homeTextarea.value = billingTextarea.value;
        homeTextarea.disabled = true;
      } else {

        homeTextarea.value = "";
        homeTextarea.disabled = false;
      }
    });
  });
  
