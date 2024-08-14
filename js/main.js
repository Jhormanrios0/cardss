document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card");
  const noResultsMessage = document.createElement("p");

  noResultsMessage.textContent = "No se encontraron resultados";
  noResultsMessage.classList.add("no-results");
  noResultsMessage.style.display = "none";
  searchInput.parentNode.appendChild(noResultsMessage);

  searchInput.addEventListener("input", function () {
    const searchQuery = removeDiacritics(this.value.toLowerCase());
    let found = false;

    cards.forEach(function (card) {
      const title = removeDiacritics(
        card.querySelector(".card-title").textContent.toLowerCase()
      );
      if (title.includes(searchQuery)) {
        card.style.display = "block";
        found = true;
      } else {
        card.style.display = "none";
      }
    });

    if (!found) {
      noResultsMessage.style.display = "block";
    } else {
      noResultsMessage.style.display = "none";
    }
  });

  function removeDiacritics(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
});
