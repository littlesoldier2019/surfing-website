const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const reviewTab = document.getElementById("reviewTab");
const reviews = document.getElementById("reviews");
const numOfReviews = document.getElementById("rating__checkReview");
const addReview = document.getElementById("addReview__btn");
const modal = document.getElementById("rating__modal");
const reviewCloseBtn = document.getElementById("closeBtn");
const reviewSendBtn = document.getElementById("modal__sendBtn");

class Cart {
  constructor(product, size, length, quan) {
    this.product = product;
    this.size = size;
    this.length = length;
    this.quan = quan;
  }
}

class UI {
  // More Info tab
  static moreInfoTab() {
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
          tabContent.classList.remove("active");
        });
        tabs.forEach(tab => {
          tab.classList.remove("active");
        });
        tab.classList.add("active");
        target.classList.add("active");
      });
    });
  }

  static ratingStar() {
    let stars = document.querySelectorAll(".star");
    stars.forEach(star => {
      star.addEventListener("click", e => {
        this.setStarRating(e);
      });
    });
  }

  static setStarRating(e) {
    let span = e.currentTarget;
    const stars = document.querySelectorAll(".star");
    let match = false;

    stars.forEach(function(star, index) {
      if (match) {
        star.classList.remove("rated");
      } else {
        star.classList.add("rated");
      }
      //are we currently looking at the span that was clicked
      if (star === span) {
        match = true;
      }
    });
  }

  static activateReview() {
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    tabContents.forEach(tabContent => {
      tabContent.classList.remove("active");
    });
    reviewTab.classList.add("active");
    reviews.classList.add("active");
  }

  static scrollToReview(x, y) {
    window.scrollTo({
      left: x,
      top: y,
      behavior: "smooth"
    });
  }

  static displayModal() {
    modal.style.display = "block";
    this.ratingStar();
  }

  static closeReview() {
    modal.style.display = "none";
  }

  static sendReview(e) {
    e.preventDefault();
    const reviewContent = document.getElementById("customerReviewContent")
      .value;
    const reviewTitle = document.getElementById("customerReviewTitle").value;
    const reviewSection = document.getElementById("reviews");
    const div = document.createElement("div");
    div.innerHTML = `
          <p class="review__stars"></p>
          <p class="review__title">${reviewTitle}</p>
          <p class="review__content">${reviewContent}</p>
          `;
    reviewSection.appendChild(div);

    const stars = document.querySelectorAll(".star");
    for (let i = 0; i < stars.length; i++) {
      const reviewStars = document.querySelector(".review__stars");
      reviewStars.appendChild(stars[i]);
    }

    modal.style.display = "none";
  }

  static showAlert(msg, type) {
    console.log(msg);
  }
}

class storage {}

// Rating
//1. When a user click Reviews, show the review section

//Form
// 1. Size
// - When a user click the size, set it as the size value
const sizeBtns = document.querySelector(".sizeBtns");
sizeBtns.addEventListener("click", e => {
  // Get a user's choice for a size.
  let size = Number(e.target.textContent);

  // TODO: UI
  // 1. switch the font color to red
  // * when the user select another size,
  // * then the previeous choice should be changed to normal color
  // * current selection => orange
});
// 2. Length
// - When a user clikc the length, set the choice as the length value
const lengthBtns = document.querySelector(".lengthBtns");
lengthBtns.addEventListener("click", e => {
  let length = Number(e.target.textContent);

  // TODO: UI
  // * when the user select another length,
  // * then the previeous choice should be changed to normal color
  // * current selection => orange
});

// 3. Quantity
//- User can change the quantity through 1) typing number(v) or 2) clicking the plus button

// 4. Add to cart
//- When click the button, all form information save to the local storage
// TODO: localStorage
// set the info to the local storage

// TODO: localStorage
// set the info the the local storage

// 5. Add to wishList
// 6. Add to compare
// 7. Email to a friend

//Event

const quanInput = document.getElementById("quan__input");
const quanBtn = document.getElementById("quan__btn");
const addToCartBtn = document.getElementById("addToCartBtn");
const wishListBtn = document.getElementById("wishList__btn");
const compareBtn = document.getElementById("compare__btn");

// When the webpage is loaded.
document.addEventListener("DOMContentLoaded", () => {
  UI.moreInfoTab();
});

// When the btn to check reviews is clicked.
numOfReviews.addEventListener("click", () => {
  // activate the review tab
  UI.activateReview();
  //scroll to review section
  UI.scrollToReview(524, 405);
});

addReview.addEventListener("click", () => {
  UI.displayModal();
});

reviewSendBtn.addEventListener("click", e => {
  UI.sendReview(e);
});

reviewCloseBtn.addEventListener("click", () => {
  UI.closeReview();
});

window.addEventListener("click", e => {
  const modalContent = document.querySelector(".modal");
  console.log(e.target);
  if (e.target === modalContent) {
    UI.closeReview();
  }
});
