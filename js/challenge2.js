document.addEventListener("DOMContentLoaded", function () {
    const billingInput = document.getElementById("billing");
    const homeInput = document.getElementById("home");
    const checkbox = document.querySelector("input[name='useBilling']");

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            homeInput.value = billingInput.value;
            homeInput.disabled = true;
        } else {
            homeInput.value = "";
            homeInput.disabled = false;
        }
    });
});
