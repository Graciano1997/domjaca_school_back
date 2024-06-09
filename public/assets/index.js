const elementLinks=document.querySelectorAll('.menuItem ul li');

elementLinks.forEach((element)=>{
     element.addEventListener("click",(el)=>{
        location.href=element.firstChild.href;
     })
 })

document.querySelector('#btnHamburguer').addEventListener("click",(el)=>{
document.querySelector('.menuContainer').classList.add('show');
document.querySelector('#body').classList.add("noScrool");
});

document.querySelector('#btnClose').addEventListener("click",(el)=>{
document.querySelector('.menuContainer').classList.remove('show');
document.querySelector('#body').classList.remove("noScrool");
});
