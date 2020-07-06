(function () {
  const buttons = document.querySelectorAll(".btn");
  const photos = ["customer-1", "customer-2", "customer-3", "customer-4"];
  let count = 0;
  const imgd = document.querySelector(".img-container");
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (button.classList.contains("btn-left")) {
        count--;
        if (count < 0) {
          count = photos.length - 1;
        }

        imgd.style.backgroundImage = `url('${photos[count]}.jpg')`;
      }
      if (button.classList.contains("btn-right")) {
        count++;
        if (count > photos.length - 1) {
          count = 0;
        }
        imgd.style.backgroundImage = `url('${photos[count]}.jpg')`;
      }
    });
  });
})();
