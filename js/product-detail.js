const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const reviewTab = document.getElementById("reviewTab");
const reviews = document.getElementById("reviews");
const numOfReviews = document.getElementById("rating__checkReview");
const addReview = document.getElementById("addReview__btn");
const modal = document.getElementById("rating__modal");
const reviewCloseBtn = document.getElementById("closeBtn");
const reviewSendBtn = document.getElementById("modal__sendBtn");
const sizeBtns = document.querySelector(".sizeBtns");
const lengthBtns = document.querySelector(".lengthBtns");
const addToCartBtn = document.getElementById("addToCartBtn");

let cart = {
  product: "Peeky Cropped",
  size: null,
  length: null,
  quan: null
};

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

  static selectSize(e) {
    this.clearSize();
    let userChoice = e.target;
    userChoice.style.color = "orange";
    cart.size = userChoice.textContent;
  }

  static clearSize() {
    for (let i = 0; i < sizeBtns.children.length; i++) {
      sizeBtns.children[i].style.color = "black";
    }
    cart.size = null;
  }

  static selectLength(e) {
    this.clearLength();
    let userChoice = e.target;
    userChoice.style.color = "orange";
    cart.length = userChoice.textContent;
  }

  static clearLength() {
    for (let i = 0; i < lengthBtns.children.length; i++) {
      lengthBtns.children[i].style.color = "black";
    }
    cart.length = null;
  }

  static cartValidation() {}

  static addeToCartAlert(msg, type) {
    addToCartBtn.innerHTML = msg;
    if (type === "success") {
      addToCartBtn.style.backgroundColor = "#3ab31e";
    } else if (type === "fail") {
      addToCartBtn.style.backgroundColor = "red";
    }
  }

  static showAlert(msg, type) {
    console.log(msg);
  }
}

class storage {
  // get the cart
  // add to the cart
  // remove from the cart
  // get the wishlist
  // add to the wishlist
  // remove from the wishlist
  // get the comparelist
  // add to the comparelist
  // remove from the comparelist
}

//Form

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
  if (e.target === modalContent) {
    UI.closeReview();
  }
});

sizeBtns.addEventListener("click", e => {
  // Get a user's choice for a size.
  UI.selectSize(e);
});

lengthBtns.addEventListener("click", e => {
  UI.selectLength(e);
});

quanInput.addEventListener("change", e => {
  e.preventDefault();
  console.log(e.target.value);
});

quanInput.addEventListener("keyup", e => {
  e.preventDefault();
  console.log(e.target.value);
});

addToCartBtn.addEventListener("click", e => {
  e.preventDefault();
  //show alert (success or failure)
  UI.addeToCartAlert();
  //store to local storage
});
