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
const quanInput = document.getElementById("quan__input");
const addToCartBtn = document.getElementById("addToCartBtn");
const wishListBtn = document.getElementById("wishList__btn");
const compareBtn = document.getElementById("compare__btn");

let cartItem = {
  product: "Peeky Cropped",
  size: null,
  length: null,
  quan: null,
  price: 578.5
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
    let userChoiceSize = e.target;
    userChoiceSize.style.color = "orange";
    cartItem.size = userChoiceSize.textContent;
  }

  static clearSize() {
    for (let i = 0; i < sizeBtns.children.length; i++) {
      sizeBtns.children[i].style.color = "black";
    }
    cartItem.size = null;
  }

  static selectLength(e) {
    this.clearLength();
    let userChoiceLength = e.target;
    userChoiceLength.style.color = "orange";
    cartItem.length = userChoiceLength.textContent;
  }

  static clearLength() {
    for (let i = 0; i < lengthBtns.children.length; i++) {
      lengthBtns.children[i].style.color = "black";
    }
    cartItem.length = null;
  }

  static selectQuan(e) {
    this.clearQuan();
    this.clearPrice();
    let userChoiceQuan = e.target.value;
    cartItem.quan = userChoiceQuan;
    this.calPrice(userChoiceQuan);
  }

  static clearQuan() {
    cartItem.quan = null;
  }

  static calPrice(userQuan) {
    cartItem.price = 578.5 * userQuan;
  }

  static clearPrice() {
    cartItem.price = null;
  }

  static cartValidation() {
    if (
      cartItem.size === null ||
      cartItem.length === null ||
      cartItem.quan === null
    ) {
      this.addeToCartAlert("Missing Information", "fail");
    } else if (cartItem.size && cartItem.length && cartItem.quan) {
      this.addeToCartAlert("Added!", "success");
    }
  }

  static addeToCartAlert(msg, type) {
    addToCartBtn.textContent = msg;
    if (type === "success") {
      console.log("Added!");
      // addToCartBtn.style.backgroundColor = "#3ab31e";
    } else if (type === "fail") {
      console.log("Missing information");
      // addToCartBtn.style.backgroundColor = "red";
    }
  }

  static showNumOfWishList() {
    const wishList = Storage.getWishList();
    const numOfWishItems = document.getElementById("numOfWishItems");
    numOfWishItems.textContent = wishList.length;
  }

  static showNumOfCompareList() {
    const compareList = Storage.getCompareList();
    const numOfCompareItems = document.getElementById("numOfCompareItems");
    numOfCompareItems.textContent = compareList.length;
  }

  static showAlert(msg, type) {
    console.log(msg);
  }
}

class Storage {
  // get the cart
  static getCart() {
    let cart;
    if (localStorage.getItem("cart") === null) {
      cart = [];
    } else {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    return cart;
  }

  // add to the cart
  static addToCart(item) {
    const cart = Storage.getCart();
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // remove from the cart
  static removeFromCart(item) {
    const cart = Storage.getCart();

    cart.forEach((cartitem, index) => {
      if (
        cartitem.product === item.name &&
        cartitem.size === item.size &&
        cartitem.length === item.length &&
        cartitem.quan === item.quan
      ) {
        cart.splice(index, 1);
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // get the wishlist
  static getWishList() {
    let wishList;
    if (localStorage.getItem("wishList") === null) {
      wishList = [];
    } else {
      wishList = JSON.parse(localStorage.getItem("wishList"));
    }
    return wishList;
  }

  // add to the wishlist
  static addToWishList(item) {
    // TODO: if there is the same item,
    // do not put into the compare list.

    const wishList = Storage.getWishList();
    wishList.push(item);
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }

  // TODO: remove from the wishlist
  // get the comparelist
  static getCompareList() {
    let compareList;
    if (localStorage.getItem("compareList") === null) {
      compareList = [];
    } else {
      compareList = JSON.parse(localStorage.getItem("compareList"));
    }
    return compareList;
  }

  // add to the comparelist
  static addToCompareList(item) {
    // TODO: if there is the same item,
    // do not put into the compare list.
    const compareList = Storage.getCompareList();
    compareList.push(item);
    localStorage.setItem("compareList", JSON.stringify(compareList));
  }

  // TODO: remove from the comparelist
}

//Event
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
  UI.selectQuan(e);
  console.log(cartItem);
});

quanInput.addEventListener("keyup", e => {
  e.preventDefault();
  UI.selectQuan(e);
  console.log(cartItem);
});

addToCartBtn.addEventListener("click", e => {
  e.preventDefault();
  // show alert (success or failure)
  // need more work for the cartValidation method.
  UI.cartValidation();
  //store to the cart localStorage
  Storage.addToCart(cartItem);
});

// TODO: Show alert "The item is already in the wishList"
wishListBtn.addEventListener("click", e => {
  e.preventDefault();
  Storage.addToWishList(cartItem);
  UI.showNumOfWishList();
});

// TODO: Show alert "The item is already in the compareList"
compareBtn.addEventListener("click", e => {
  e.preventDefault();
  Storage.addToCompareList(cartItem);
  UI.showNumOfCompareList();
});

// TODO: Main image slider
