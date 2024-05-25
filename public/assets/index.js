document.querySelector('#btnHamburguer').addEventListener("click",(el)=>{
document.querySelector('.menuContainer').classList.add('show');
document.querySelector('#body').classList.add("noScrool");
});

document.querySelector('#btnClose').addEventListener("click",(el)=>{
document.querySelector('.menuContainer').classList.remove('show');
document.querySelector('#body').classList.remove("noScrool");
});
