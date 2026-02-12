document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");

  main.innerHTML = `
    <section id="converter">
      <h2>Currency Converter</h2>
      <form id="converter-form">
        <input type="number" id="amount" placeholder="Amount" required />
        <select id="from-currency"></select>
        <select id="to-currency"></select>
        <button type="submit">Convert</button>
      </form>
      <div id="conversion-result"></div>
    </section>

    <section id="rates">
      <h2>Real-Time Exchange Rates</h2>
      <div id="rates-list">Loading rates...</div>
    </section>

    <section id="cryptos">
      <h2>Cryptocurrency Prices</h2>
      <div id="crypto-list">Loading crypto prices...</div>
    </section>

    <section id="charts">
      <h2>Historical Charts</h2>
      <canvas id="history-chart"></canvas>
    </section>

    <section id="favorites">
      <h2>Favorites</h2>
      <ul id="favorites-list"></ul>
    </section>

    <section id="comparison">
      <h2>Comparison Tool</h2>
      <div id="comparison-result"></div>
    </section>

    <section id="alerts">
      <h2>Price Alerts</h2>
      <div id="alerts-list"></div>
    </section>
  `;
});
