document.querySelector('#btnHamburguer').addEventListener("click",(el)=>{
document.querySelector('.menuContainer').classList.add('show');
});

document.querySelector('#btnClose').addEventListener("click",(el)=>{
document.querySelector('.menuContainer').classList.remove('show');
});
