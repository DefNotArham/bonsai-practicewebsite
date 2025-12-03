/** Variables code */
const button = document.getElementById("switch");
const month = document.getElementById("month");
const year = document.getElementById("year");

const yearlyPtag = document.querySelectorAll(".yearly-text");

const price24 = document.getElementById("price-24");
const price39 = document.getElementById("price-39");
const price79 = document.getElementById("price-79");

const question = document.querySelectorAll(".question");
const questionP = document.querySelectorAll(".faq-p");

/** DOM code */
window.addEventListener("DOMContentLoaded", checked);
window.addEventListener("DOMContentLoaded", textAppear);
window.addEventListener("DOMContentLoaded", priceChange);

/** event listener code */

button.addEventListener("click", active);
button.addEventListener("click", textAppear);
button.addEventListener("click", priceChange);

question.forEach((q, index) => {
  q.addEventListener("click", () => answerAppear(index));
});
/** Function code */

function checked() {
  if (button.checked) {
    month.classList.remove("active");
    year.classList.add("active");
  } else {
    month.classList.add("active");
    year.classList.remove("active");
  }
}

function active() {
  if (month.classList.contains("active")) {
    month.classList.remove("active");
    year.classList.add("active");
  } else {
    month.classList.add("active");
    year.classList.remove("active");
  }
}

function textAppear() {
  yearlyPtag.forEach((p) => {
    if (year.classList.contains("active")) {
      p.innerText = "Billed Yearly";
    } else {
      p.innerText = "";
    }
  });
}

function priceChange() {
  if (year.classList.contains("active")) {
    price24.innerText = "17";
    price39.innerText = "32";
    price79.innerText = "52";
  } else {
    price24.innerText = "24";
    price39.innerText = "39";
    price79.innerText = "79";
  }
}

function answerAppear(index) {
  const answer = questionP[index];
  if (answer.classList.contains("faq-hide")) {
    answer.classList.remove("faq-hide");
    answer.classList.add("faq-show");
  } else {
    answer.classList.add("faq-hide");
    answer.classList.remove("faq-show");
  }
}
