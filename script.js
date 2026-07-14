// Theme toggle — respects OS preference, remembers choice.
(function () {
  var saved = localStorage.getItem('sq-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  function cur() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  window.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    function sync() { btn.textContent = cur() === 'dark' ? '☀' : '☾'; }
    sync();
    btn.addEventListener('click', function () {
      var next = cur() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('sq-theme', next);
      sync();
    });
  });
})();
