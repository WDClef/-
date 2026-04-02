// 点击按钮切换界面
const enterBtn = document.getElementById('enterBtn');
const home = document.getElementById('home');
const viewer = document.getElementById('viewer');

enterBtn.addEventListener('click', () => {
  home.style.display = 'none';
  viewer.style.display = 'flex';
});