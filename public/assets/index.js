const elementLinks=document.querySelectorAll('.menuItem ul li');
const portalAvatarContainerImage = document.querySelector('.portalAvatarContainer img');
const seePontuationBtns=document.querySelectorAll('.seeMarks');
if(seePontuationBtns!==null){
   seePontuationBtns.forEach((btn)=>{
      btn.addEventListener("click",(el)=>{
         const grandParent=el.target.parentNode.parentNode;
         const pontuationContainer=grandParent.querySelector('.pontuationContainer');
         pontuationContainer.classList.toggle('seePontuationContainer');
         el.target.textContent=pontuationContainer.classList.contains('seePontuationContainer')?'ocultar':'ver';
      });
   })
}

if(portalAvatarContainerImage!==null){
   portalAvatarContainerImage.addEventListener("click",()=>{
      window.location.href="/portal/perfil";
   })

}
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
