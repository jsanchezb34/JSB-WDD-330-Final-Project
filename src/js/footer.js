document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.classList.add("site-footer");

  const year = new Date().getFullYear();

  footer.innerHTML = `
    <p>&copy; ${year} JSB WDD 330 Final Project</p>
    <p id="footer-dynamic">Fetching live data...</p>
  `;

  document.body.appendChild(footer);

  const dynamic = document.getElementById("footer-dynamic");

  // Simulated update (later replace with API fetch)
  setTimeout(() => {
    dynamic.textContent = "Live crypto & currency insights will appear here.";
  }, 1500);
});
