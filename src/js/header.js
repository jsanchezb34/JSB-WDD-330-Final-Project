document.addEventListener("DOMContentLoaded", () => {
  const header = document.createElement("header");
  header.classList.add("site-header");

  header.innerHTML = `
    <div class="logo">
      <img src="../src/public/images/logo1.png" alt="logo" />
      <a href="../index.html">JSB Final Project</a>
    </div>
    <nav>
      <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="../converter/index.html">Converter</a></li>
        <li><a href="../crypto/index.html">Cryptos</a></li>
        <li><a href="../favorites/index.html">Favorites</a></li>
        <li><a href="../charts/index.html">Charts</a></li>
      </ul>
    </nav>
  `;

  document.body.prepend(header);
});
