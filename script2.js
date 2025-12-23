const area = document.getElementById('area');
const out = document.getElementById('out');

function setText(x, y, clickInfo = '') {
    out.textContent = `X = ${x}, Y = ${y}${clickInfo ? ' — ' + clickInfo : ''}`;
}

area.addEventListener('mousemove', (e) => {
    setText(e.clientX, e.clientY);
});

area.addEventListener('mousedown', (e) => {
    const which =
    e.button === 0 ? 'Ліва кнопка' :
    e.button === 2 ? 'Права кнопка' :
    'Інша кнопка';

    setText(e.clientX, e.clientY, which);
});

area.addEventListener('contextmenu', (e) => e.preventDefault());
