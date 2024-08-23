document.querySelectorAll("[data-modal-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById("infoModal");
    const image = modal.querySelector("img");
    if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden", "animate__fadeOut");
      modal.classList.add("animate__fadeIn");
      image.classList.remove("animate__fadeOut");
      image.classList.add("animate__zoomIn");
    } else {
      modal.classList.remove("animate__fadeIn");
      modal.classList.add("animate__fadeOut");
      image.classList.remove("animate__zoomIn");
      image.classList.add("animate__fadeOut");
      setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("animate__fadeOut");
        image.classList.remove("animate__fadeOut");
      }, 500);
    }
  });
});
