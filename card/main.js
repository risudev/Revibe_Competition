const card = document.querySelector(".card__inner");
const card2 = document.querySelector(".card__inner2");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');

});

card2.addEventListener("click", function (e) {
    card2.classList.toggle('is-flipped2');
  });