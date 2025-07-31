// ⏳ Splash screen logic
window.addEventListener('load', function () {
  setTimeout(function () {
    const splash = document.getElementById('splash-screen');
    if (splash) splash.style.display = 'none';
  }, 5000); // 5 seconds
});

// 🌐 Language selector (basic logic for now)
document.getElementById('language-selector')?.addEventListener('change', function (e) {
  const selectedLang = e.target.value;
  alert(`Language switched to: ${selectedLang.toUpperCase()}`);
});
