document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.classList.add("site-header");

  header.innerHTML = `
    <div class="logo">
      <img src="src/public/images/logo1.png" alt="logo" />
      <a href="index.html">JSB Final Project</a>
    </div>
    <button class="hamburger" aria-label="Abrir menú">☰</button>
    <nav>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="converter/index.html">Converter</a></li>
        <li><a href="crypto/index.html">Cryptos</a></li>
        <li><a href="favorites/index.html">Favorites</a></li>
        <li><a href="charts/index.html">Charts</a></li>
      </ul>
    </nav>
  `; 

  document.body.prepend(header);

  // Lógica del menú hamburguesa
  const hamburger = header.querySelector('.hamburger');
  const navLinks = header.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
