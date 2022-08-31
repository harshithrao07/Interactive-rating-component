var length = document.getElementsByClassName("rate-me").length;
var rating;
var ratingContainer = document.getElementsByClassName("main-container")[0];
var thankYouContainer = document.getElementsByClassName("thankyou-container")[0];
const btns = document.querySelectorAll('.bt');

btns.forEach((bt) => {
  bt.addEventListener('click', () => {
    removeClasses(bt);
    rating = bt.textContent;
    document.getElementsByClassName("submit")[0].addEventListener("click", function() {
      ratingContainer.style.display = "none";
      thankYouContainer.classList.remove("hidden");
      document.getElementsByClassName("thankyou-rating")[0].textContent = "You selected " + rating + " out of 5";
    });
  });
});

function removeClasses(target) {
  btns.forEach((bt) => {
    if (bt == target) {
      bt.style.backgroundColor = "hsl(217, 12%, 63%)";
      bt.style.color = "#ffffff";
    } else {
      bt.style.backgroundColor = "hsl(213, 19%, 18%)";
      bt.style.color = "hsl(216, 12%, 54%)";
    }
  });
}
