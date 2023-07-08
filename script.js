let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const learnMoreButton = document.querySelector(".learn-more-button");
const learnMoreContent = document.querySelector(".learn-more-content");
learnMoreContent.style.display = "none";
learnMoreButton.addEventListener("click", () => {
  if (learnMoreContent.style.display === "none") {
    learnMoreContent.style.display = "block";
    learnMoreButton.textContent = "Close";
  } else {
    learnMoreContent.style.display = "none";
    learnMoreButton.textContent = "Learn More";
  }
});
const form = document.getElementById("myForm");

window.onload = function () {
  storeFormValues();
};
function storeFormValues() {
  const formElements = form.elements;
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.type !== "submit") {
      sessionStorage.setItem(element.name, element.value);
    }
  }
}
function resetFormValues() {
  const formElements = form.elements;
  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.type !== "submit") {
      element.value = sessionStorage.getItem(element.name) || "";
    }
  }
}
window.onbeforeunload = function () {
  resetFormValues();
};

const codeContent = document.getElementById("code-content");
codeContent.textContent = 'console.log("Hello, world!");';
