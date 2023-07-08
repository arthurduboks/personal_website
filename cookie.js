function acceptCookies() {
  setCookie("cookiesAccepted", "true", 365, "/");
  const cookieBox = document.querySelector(".cookie-box");
  cookieBox.style.display = "none";
  loadClarity();
  window.clarity("consent");
}
function declineCookies() {
  setCookie("cookiesAccepted", "false", 365, "/");
  const cookieBox = document.querySelector(".cookie-box");
  cookieBox.style.display = "none";
  window.clarity = function () {};
}
function loadClarity() {
  const cookiesAccepted = getCookie("cookiesAccepted");
  if (cookiesAccepted) {
    ((c, l, a, r, i, t, y) => {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "hnjjz5bfd8");
    window.clarity("consent");
  }
}
function setCookie(name, value, days, path) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value}${expires}; path=${path}`;
}
function getCookie(name) {
  const nameEQ = name + "=";
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}
function deleteCookie(name, path) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
}
document.addEventListener("DOMContentLoaded", () => {
  const cookiesAccepted = getCookie("cookiesAccepted");
  const cookieBox = document.querySelector(".cookie-box");

  if (cookiesAccepted) {
    cookieBox.style.display = "none";
  } else {
    cookieBox.style.display = "block";
  }
});
