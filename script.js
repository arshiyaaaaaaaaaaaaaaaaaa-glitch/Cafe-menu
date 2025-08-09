// دکمه تلفن و پنل کشویی
const phoneBtn = document.getElementById('phoneBtn');
const sidePanel = document.getElementById('sidePanel');

phoneBtn.addEventListener('click', () => {
  sidePanel.classList.toggle('open');
});

// بستن پنل وقتی بیرون کلیک می‌کنیم
window.addEventListener('click', (e) => {
  if (!sidePanel.contains(e.target) && !phoneBtn.contains(e.target)) {
    sidePanel.classList.remove('open');
  }
});

// نمایش لیست منو
function loadMenu(menuType) {
  const menuContainer = document.getElementById('menuContainer');
  menuContainer.innerHTML = '';

  const breakfastMenu = [
    { name: "املت گوجه", price: "60 T" },
    { name: "صبحانه انگلیسی", price: "120 T" },
    { name: "پنکیک عسل", price: "75 T" },
    { name: "کرواسان", price: "50 T" },
    { name: "نان و پنیر و سبزی", price: "45 T" },
    { name: "نیمرو", price: "55 T" }
  ];

  const cafeMenu = [
    { name: "اسپرسو", price: "50 T" },
    { name: "کاپوچینو", price: "65 T" },
    { name: "لاته", price: "70 T" },
    { name: "موکا", price: "75 T" },
    { name: "آمریکانو", price: "55 T" },
    { name: "آیس لاته", price: "80 T" },
    { name: "چای ماسالا", price: "60 T" },
    { name: "شیک شکلات", price: "85 T" }
  ];

  let selectedMenu = menuType === 'breakfast' ? breakfastMenu : cafeMenu;

  selectedMenu.forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.innerHTML = `<span>${item.name}</span><span>${item.price}</span>`;
    menuContainer.appendChild(div);
  });
}
