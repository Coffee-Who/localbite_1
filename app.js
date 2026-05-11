const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});

function recommend() {
  const input = document.getElementById('userInput').value;
  const output = document.getElementById('output');

  output.innerHTML = `
    <p>根據「${input}」推薦：</p>
    <ul>
      <li>☕ Hidden Cafe — 安靜放鬆</li>
      <li>🍜 Midnight Ramen — 深夜療癒</li>
      <li>🍷 Secret Bistro — 約會氛圍</li>
    </ul>
  `;
}
