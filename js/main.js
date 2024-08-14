document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("input", function () {
    const searchQuery = this.value.toLowerCase();

    cards.forEach(function (card) {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      if (title.includes(searchQuery)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
