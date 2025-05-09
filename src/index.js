import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Get the button element
// Get reference to the scroll-to-top button
const scrollToTopButton = document.getElementById("scrollToTopButton");

// Function to handle scroll visibility toggle
function toggleScrollToTopButton() {
  const scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  // Show or hide the button based on scroll position
  scrollToTopButton.style.display = scrollPosition > 100 ? "block" : "none";
}

// Scroll event with performance optimization using requestAnimationFrame
window.addEventListener("scroll", () => {
  if (
    document.documentElement.scrollTop !== undefined ||
    document.body.scrollTop !== undefined
  ) {
    requestAnimationFrame(toggleScrollToTopButton);
  }
});

// Scroll to the top with smooth behavior when the button is clicked
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
