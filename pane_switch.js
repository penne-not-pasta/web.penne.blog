function showPane(p) {
  document.querySelectorAll('.pane').forEach(el => el.style.display = 'none');
  var el = document.getElementById('pane-' + p);
  if (!el) el = document.getElementById('pane-home');
  el.style.display = 'block';
  el.focus && el.focus();
}