
const menuButton=document.querySelector('.menu-button');
const mainNav=document.querySelector('.main-nav');
if(menuButton&&mainNav){
  menuButton.addEventListener('click',()=>{
    const open=mainNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded',String(open));
  });
}
const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.idea-card[data-category]');
const count=document.querySelector('.idea-count');
filters.forEach(button=>{
  button.addEventListener('click',()=>{
    filters.forEach(item=>item.classList.remove('is-active'));
    button.classList.add('is-active');
    const category=button.dataset.filter;
    let visible=0;
    cards.forEach(card=>{
      const show=category==='all'||card.dataset.category===category;
      card.hidden=!show;
      if(show) visible++;
    });
    if(count) count.textContent=`${visible} publicaciones`;
  });
});
/* ========================================
   APARICIÓN DE ELEMENTOS AL HACER SCROLL
======================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}