const mobilenav = () => {
const hammenu = document.querySelector('.ham');
const mobilenav = document.querySelector('.mob-nav')
const mobilelinks = document.querySelectorAll ('.mobile-menu')
let ismobilenavOpen = false;

hammenu.addEventListener('click', () => {
 
 ismobilenavOpen = !ismobilenavOpen;

 if (ismobilenavOpen === true) {
 mobilenav.style.display = 'flex'
 document.body.style.overflowY = 'hidden'
 } else {
   mobilenav.style.display = 'none'
 document.body.style.overflowY = 'hidden'

 }
})

mobilelinks.forEach((link) => {
 
 link.addEventListener('click', () => {
  ismobilenavOpen = false;
  mobilenav.style.display = 'none'
  document.body.style.overflowY = 'auto'
 })

})
}

export default mobilenav;