(function(){
  try {
    var key = 'retro_apple_visitors';
    var v = parseInt(localStorage.getItem(key) || '0', 10);
    v = v + Math.floor(Math.random()*3) + 1; // bump by a small random amount to feel alive
    localStorage.setItem(key, v);
    document.getElementById('visitorBadge').textContent = 'Visitors: ' + v.toLocaleString();
  } catch(e) {
    // silent fallback
    document.getElementById('visitorBadge').textContent = 'Visitors: n/a';
  }
})();