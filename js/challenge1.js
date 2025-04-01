document.getElementById("toggle").addEventListener('click', function () {
    console.log("Checkbox clicked");

    let emailBox = document.querySelector("#emailBox");

    if (this.checked) {
        console.log("Checkbox is checked, showing email field");
        emailBox.style.display = 'block';
    } else {
        console.log("Checkbox is unchecked, hiding email field");
        emailBox.style.display = 'none';
    }
});
