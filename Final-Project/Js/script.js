document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

const circles = document.querySelectorAll(".circle");
const saleBg = document.querySelector(".sale-bg");

circles.forEach((circle) => {
  circle.addEventListener("mouseenter", () => {
    saleBg.style.transform = "translate(-50%, calc(-50% - 20px))";
  });
  circle.addEventListener("mouseleave", () => {
    saleBg.style.transform = "translate(-50%, -50%)";
  });
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    backToTop.classList.remove("d-none");
  } else {
    backToTop.classList.add("d-none");
  }
});

document.getElementById("backToTop").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const header = document.getElementById("first");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});

if (document.querySelector(".main-carousel")) {
  $(document).ready(function () {
    $(".main-carousel").owlCarousel({
      items: 5,
      nav: true,
      loop: true,
      navText: [
        '<i class="fa-solid fa-angle-left fs-5 px-2 py-3 text-center"></i>',
        '<i class="fa-solid fa-angle-right fs-5 px-2 py-3 text-center"></i>',
      ],
    });
  });
}
if (document.querySelector(".special-carousel")) {
  $(document).ready(function () {
    $(".special-carousel").owlCarousel({
      items: 6,
      loop: true,
      margin: 40,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
        0: { items: 2 },
        576: { items: 3 },
        768: { items: 4 },
        1200: { items: 6 },
      },
    });
  });
}

if (document.getElementById("contactForm")) {
  var contactForm = document.getElementById("contactForm");
  var formAlert = document.getElementById("formAlert");
  var successMsg = document.getElementById("successMsg");

  contactForm.addEventListener("input", (e) => {
    if (e.target.id == "userFirstName") {
      nameValidation(e.target);
    } else if (e.target.id == "userEmail") {
      emailValidation(e.target);
    } else if (e.target.id == "userSubject") {
      subjectValidation(e.target);
    } else if (e.target.id == "userMessage") {
      messageValidation(e.target);
    }

    formAlert.classList.add("d-none");
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    let name = document.getElementById("userFirstName");
    let email = document.getElementById("userEmail");
    let subject = document.getElementById("userSubject");
    let message = document.getElementById("userMessage");

    if (!nameValidation(name)) valid = false;
    if (!emailValidation(email)) valid = false;
    if (!subjectValidation(subject)) valid = false;
    if (!messageValidation(message)) valid = false;

    if (valid) {
      formAlert.classList.add("d-none");
      successMsg.classList.remove("d-none");
      contactForm.reset();
    } else {
      successMsg.classList.add("d-none");
      formAlert.classList.remove("d-none");
    }
  });
}

var nameValidation = (element) => {
  var inputValue = element.value.trim();
  if (inputValue.length < 3) {
    handleError(element, "Please enter at least 3 characters");
    return false;
  } else {
    handleError(element);
    return true;
  }
};

var emailValidation = (input) => {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input.value.trim())) {
    handleError(input, "Please enter a valid email");
    return false;
  } else {
    handleError(input);
    return true;
  }
};

var subjectValidation = (inp) => {
  if (inp.value.trim() === "") {
    handleError(inp, "Subject is required");
    return false;
  } else {
    handleError(inp);
    return true;
  }
};

var messageValidation = (inp) => {
  handleError(inp);
  return true;
};

var handleError = (input, msg = "") => {
  input.nextElementSibling.innerText = msg;
};
