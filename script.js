const num = document.getElementById('num');

document.getElementById('btn').addEventListener('click', () => {

const value = Math.floor(Math.random() * 101);
num.textContent = value;

});