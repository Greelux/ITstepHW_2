const root = document.getElementById('tabs');
const buttons = root.querySelectorAll('.tab-btn');
const panels = {
    html: document.getElementById('tab-html'),
    css: document.getElementById('tab-css'),
    js: document.getElementById('tab-js'),
};

function activate(name) {
    buttons.forEach(b => b.classList.toggle('active', b.dataset.tab === name));
    Object.entries(panels).forEach(([key, el]) => el.classList.toggle('active', key === name));
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => activate(btn.dataset.tab));
});