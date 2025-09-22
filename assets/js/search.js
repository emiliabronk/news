(function(){
  const q = document.getElementById('q');
  if(!q) return;
  const items = Array.from(document.querySelectorAll('[data-post]'));
  const norm = s => (s||'').toLowerCase();
  q.addEventListener('input', function(){
    const term = norm(this.value);
    items.forEach(el => {
      const hay = norm(el.getAttribute('data-title') + ' ' + el.getAttribute('data-standfirst'));
      el.style.display = hay.includes(term) ? '' : 'none';
    });
  });
})();
