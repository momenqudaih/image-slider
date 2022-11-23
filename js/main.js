// Array of my images in the slider.
let myImages = Array.from(document.querySelectorAll(".slider-container img"));
// Sliders Number
let slidesCo = myImages.length;
// Shown slide Number
let currentSlideNum = 1;
// Slide Number Element
let slideNumberEle = document.getElementById("slide-number");
// Next & Previous image Buttons Element.
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
// trigger the nextSlide & prevSlide functions when i click on it button
nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;
// Create Pagination List
let myPagination_Ul = document.createElement("ul");
// set id Attribute to Pagination List
myPagination_Ul.setAttribute(`id`, `myPagination-ul`);

// Create li's & append it in ul
for (let i = 1; i <= slidesCo; i++) {
  // create the li element
  let myPagination_Li = document.createElement("li");
  // append the number (text) in the li
  myPagination_Li.appendChild(document.createTextNode(i));
  // put click event at li
  myPagination_Li.onclick = function () {
    currentSlideNum = i;
    updater();
  };
  // append the li in the ul
  myPagination_Ul.appendChild(myPagination_Li);
}
// append ul in indicators span
document.getElementById(`indicators`).appendChild(myPagination_Ul);

// get the new Pagination ul
let theNewPaginationUl = document.getElementById("myPagination-ul");

// Array of my Pagination li's.
let myPagLis = Array.from(theNewPaginationUl.children);

// updater function triggeration
updater();

// Next Slide Function
function nextSlide() {
  if (nextBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlideNum++;
    updater();
  }
}

// Previous Slide Function
function prevSlide() {
  if (prevBtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlideNum--;
    updater();
  }
}

// create updater function
function updater() {
  // Show the number of the slide.
  slideNumberEle.textContent = `Slide# ` + currentSlideNum + ` of ` + slidesCo;
  // Remove active class.
  removeActiveFromAll();
  // show the current image (add active class)
  myImages[currentSlideNum - 1].classList.add("active");
  // add active class on the btn the current Pagination btn
  myPagLis[currentSlideNum - 1].classList.add("active");
  // add disabled class on next & prev btns depending on condition.
  if (currentSlideNum == slidesCo) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  if (currentSlideNum == 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}

// Remove active class from any image or btn that contain it.
function removeActiveFromAll() {
  myImages.forEach(function (img) {
    img.classList.remove("active");
  });

  myPagLis.forEach(function (li) {
    li.classList.remove("active");
  });
}
