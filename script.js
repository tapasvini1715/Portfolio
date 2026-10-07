document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    document.querySelectorAll('[data-category]').forEach(card=>{
      card.style.display=(filter==='all'||card.dataset.category===filter)?'':'none';
    });
  });
});
