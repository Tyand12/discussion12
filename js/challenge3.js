document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("mouseover", function () {
            display.innerHTML = `<img src="${this.src}" alt="${this.alt}"><p>${this.alt}</p>`;
        });

        thumbnail.addEventListener("mouseout", function () {
            display.innerHTML = "Hover over an image below to display the image and the alt text.";
        });
    });
});
