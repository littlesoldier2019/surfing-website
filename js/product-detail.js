const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

// More info tab
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

// Rating 
//1. When a user click Reviews, show the review section

//2. Add review modal (let user add a review)
const modal = document.getElementById("rating__modal");
const modalBtn = document.getElementById("addReview__btn");
const closeBtn = document.getElementById("closeBtn");
const openModal = () => {
  modal.style.display = "block";
}
const closeModal = () => {
  modal.style.display = "none";
}
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener("click", closeModal);

//Form
// 1. Size
// - When a user click the size, set it as the size value
// 2. Length
// - When a user clikc the length, set the choice as the length value
// 3. Quantity
//- User can change the quantity through 1) typing number or 2) clicking the plus button 
// 4. Add to cart
//- When click the button, all form information save to the local storage
// 5. Add to wishList
// 6. Add to compare
// 7. Email to a friend

//Event 

console.log("working on a modal style. customize input fields")