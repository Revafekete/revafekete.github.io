// Függvény az animáció elindításához
function startAnimation() {
    // Háttér elem kiválasztása és animálása
    var hatterElem = document.querySelector(".hatter");
    hatterElem.style.opacity = '0'; // Kezdetben átlátszó

    setTimeout(function() {
        hatterElem.style.transition = 'opacity 1s ease-in-out';
        hatterElem.style.opacity = '1'; // Átlátszatlanság kikapcsolása
    }, 500); // Kis várakozás az elem megjelenítéséhez

    // Box elemek kiválasztása és animálása
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box, index) {
        box.style.opacity = '0'; // Kezdetben átlátszó
        box.style.transition = 'opacity 0.5s ease-in-out  ' + (index * 0.2) + 's'; // Késleltetés
        setTimeout(function() {
            box.style.opacity = '1'; // Átlátszatlanság kikapcsolása
        }, 1000); // Kis várakozás az elem megjelenítéséhez
    });
}

// Betöltés esemény figyelése és az animáció indítása
document.addEventListener('DOMContentLoaded', function() {
    startAnimation();
});


// ----------------------------------------------------------------

