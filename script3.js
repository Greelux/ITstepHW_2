
const btn = document.getElementById('toggleBtn');
const box = document.getElementById('textBox');

btn.addEventListener('click', () => {
    const isHidden = box.classList.toggle('hidden');
    btn.textContent = isHidden ? 'Show text' : 'Hide text';
});
