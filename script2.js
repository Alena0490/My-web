$(".scroll-to-form").click(function(event) {
    event.preventDefault(); // Zabrání výchozímu chování odkazu
    $("html, body").animate({
        scrollTop: $("#contact-form").offset().top - 90
    }, 1000);
});

/*Scroll to contact form*/
(function($) {
  $(function() {
    $(".jq--scroll-form").click(function() {
      $("html, body").animate({scrollTop: $(".jq--form").offset().top-90}, 1000);
    });
  });
})(jQuery);

/*Vrácení stránky nahoru*/
$(window).on("load", function() {
    // Vrátí stránku na vrchol pouze v případě, že URL neobsahuje "#contact-form"
    if (window.location.hash !== "#contact-form") {
        setTimeout(function() {
            $("html, body").scrollTop(0); // Vrátí stránku na vrchol po krátkém zpoždění
        }, 10);
    }
});

/* Change Hamburger to Cross vice versa */
$(document).ready(function () {
    $('.jq--nav-icon').click(function (event) {
        // Zabraň výchozímu chování odkazu
        event.preventDefault();

        // Zkontroluj aktuální hodnotu src atributu obrázku
        if ($('.jq--nav-icon').attr('src') === '/burger-barw.png') {
    $('.jq--nav-icon').attr('src', '/closew.png'); // Absolutní cesta
} else {
    $('.jq--nav-icon').attr('src', '/burger-barw.png'); // Absolutní cesta
}
        // Zobrazí/skryje mobilní pozadí a navigaci
        $('.mobile-nav-back').fadeToggle(500);
        $('.first').fadeToggle(500);
    });
});

/*Zobrazení galerie*/
  $(function() {
    $(".slider-wrapper").hide().fadeIn(3000);
});

  $(function() {
    $(".album").hide().fadeIn(4000);
});
  $(function() {
    $("iframe").hide().fadeIn(4000);
});


//Upozornění při otevření stránky
$(function(){
$(".warning").slideUp(7000);
  });

//FAQ
document.addEventListener("DOMContentLoaded", function() {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(button => {
        button.addEventListener("click", () => {
            // Přepne aktivní třídu pro vizuální efekt
            button.classList.toggle("active");

            // Najde sousední panel
            const panel = button.nextElementSibling;

            // Přepne zobrazení panelu
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});


//Cookies
document.addEventListener("DOMContentLoaded", function() {
    // Zkontrolujeme, zda uživatel už cookies přijal
    if (!localStorage.getItem("cookiesAccepted")) {
        // Zobrazíme banner, pokud ještě nejsou cookies přijaty
        document.getElementById("cookie-banner").style.display = "block";
    }

    // Přidáme posluchač události na tlačítko
    document.getElementById("accept-cookies").addEventListener("click", function() {
        // Uložíme souhlas do localStorage
        localStorage.setItem("cookiesAccepted", "true");
        // Skryjeme banner
        document.getElementById("cookie-banner").style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Zkontrolujeme, zda uživatel už cookies přijal
    if (!localStorage.getItem("cookiesAccepted")) {
        // Zobrazíme banner, pokud ještě nejsou cookies přijaty
        document.getElementById("cookie-banner").style.display = "block";
    }

    // Přidáme posluchač události na tlačítko
    document.getElementById("accept-cookies").addEventListener("click", function() {
        // Uložíme souhlas do localStorage
        localStorage.setItem("cookiesAccepted", "true");
        // Skryjeme banner
        document.getElementById("cookie-banner").style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const soundToggle = document.getElementById("sound-toggle");
    const backgroundSound = document.getElementById("background-sound");
    const hissSound = document.getElementById("hiss-sound");
    const hiss = document.getElementById("hiss");
    const eatingSound = document.getElementById("eating-sound");
    const cat = document.getElementById("cat");
    const gameContainer = document.getElementById("game-container");
    const items = document.querySelectorAll(".item");
    const scoreDisplay = document.getElementById("score");

    let newLeft = 0;
    let newTop = 0;
    let soundEnabled = true;
    let score = 0;
    let lastMouseScore = 0;

    const favoriteItems = ["🍗", "🍕", "🍤", "🥛", "🐟", "🍔"];

    // Přepínání zvuku
    soundToggle.addEventListener("click", () => {
        soundEnabled = !soundEnabled;

        if (soundEnabled) {
            backgroundSound.play();
            soundToggle.textContent = "🔉";
        } else {
            backgroundSound.pause();
            soundToggle.textContent = "🔇";
        }
    });

    // Zvuk a výrazy při najetí myší na kočku
    cat.addEventListener("mouseenter", () => {
        if (soundEnabled) {
            setCatEmoji("😾");
            hiss.currentTime = 0;
            hiss.volume = 0.9;
            hiss.play().catch((error) => console.error("Zvuk nelze přehrát:", error));
        }
    });

    cat.addEventListener("mouseleave", () => {
        setCatEmoji("😼");
    });

    // Funkce pro nastavení výrazu kočky
    function setCatEmoji(emoji) {
        cat.textContent = emoji;
    }

    // Náhodné rozmístění položek
    function randomizeItemPositions(elements) {
        elements.forEach((element) => {
            const containerWidth = gameContainer.clientWidth;
            const containerHeight = gameContainer.clientHeight;
            const elementWidth = element.offsetWidth;
            const elementHeight = element.offsetHeight;

            const randomTop = Math.floor(Math.random() * (containerHeight - elementHeight));
            const randomLeft = Math.floor(Math.random() * (containerWidth - elementWidth));

            element.style.position = "absolute";
            element.style.top = `${randomTop}px`;
            element.style.left = `${randomLeft}px`;
        });
    }

    // Přidání nové myši
    function addMouse() {
        const mouse = document.createElement("div");
        mouse.classList.add("mouse");
        mouse.textContent = "🐁";
        mouse.style.width = "60px";
        mouse.style.height = "60px";
        mouse.style.display = "flex";
        mouse.style.justifyContent = "center";
        mouse.style.alignItems = "center";
        mouse.style.fontSize = "30px";
        mouse.style.color = "#000";
        mouse.style.backgroundColor = "#fff";
        mouse.style.border = "2px solid #9e63bf";
        mouse.style.borderRadius = "50%";
        mouse.style.position = "absolute";
        gameContainer.appendChild(mouse);

        randomizeItemPositions([mouse]);
    }

    // Kontrola kolize
    function checkCollision(cat, item) {
        const catRect = cat.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();

        return !(
            catRect.top > itemRect.bottom ||
            catRect.bottom < itemRect.top ||
            catRect.left > itemRect.right ||
            catRect.right < itemRect.left
        );
    }

   // Pohyb kočky
document.addEventListener("keydown", (event) => {
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;
    const catWidth = cat.offsetWidth;
    const catHeight = cat.offsetHeight;

    if (event.key === "ArrowLeft" && newLeft > 0) {
        newLeft -= 10;
    } else if (event.key === "ArrowRight" && newLeft + catWidth + 10 < containerWidth) {
        newLeft += 10;
    } else if (event.key === "ArrowUp" && newTop > 0) {
        newTop -= 10;
    } else if (event.key === "ArrowDown" && newTop + catHeight + 11 < containerHeight) {
        newTop += 10;
    }

        cat.style.left = `${newLeft}px`;
        cat.style.top = `${newTop}px`;

        // Kontrola kolizí s jídlem
        items.forEach((item) => {
            if (checkCollision(cat, item)) {
                if (favoriteItems.includes(item.textContent)) {
                    score++;
                    scoreDisplay.textContent = `Skóre: ${score}`;
                    setCatEmoji("😻");
                    if (soundEnabled) {
                        eatingSound.currentTime = 0;
                        eatingSound.play().catch((error) => console.error("Zvuk nelze přehrát:", error));
                        // Zastavení přehrávání po 1 sekundě
                        setTimeout(() => {
                            eatingSound.pause();
                            eatingSound.currentTime = 0; // Reset zvuku na začátek
                        }, 1000); 
                    }
                       
                } else {
                    setCatEmoji("😾");
                    if (soundEnabled) {
                        hissSound.currentTime = 0;
                        hissSound.volume = 0.1;
                        hissSound.play().catch((error) => console.error("Zvuk nelze přehrát:", error));
                    }
                }

                // Reset výrazu kočky po 500 ms
                setTimeout(() => setCatEmoji("😼"), 500);

                item.style.display = "none";
                setTimeout(() => {
                    randomizeItemPositions([item]);
                    item.style.display = "flex";
                }, 1000);
            }
        });

        // Kontrola kolizí s myšmi
        document.querySelectorAll(".mouse").forEach((mouse) => {
            if (checkCollision(cat, mouse)) {
                score += 10;
                scoreDisplay.textContent = `Skóre: ${score}`;
                setCatEmoji("😻");
                if (soundEnabled) {
                    eatingSound.currentTime = 0;
                    eatingSound.play().catch((error) => console.error("Zvuk nelze přehrát:", error));
                    setTimeout(() => {
                        eatingSound.pause();
                        eatingSound.currentTime = 0;
                    }, 1000); // 1 sekunda
                }
                mouse.remove();
                setTimeout(() => setCatEmoji("😼"), 500); // Návrat na výchozí výraz
            }
        });

        // Přidání myši každých 10 bodů
        if (score % 10 === 0 && score !== lastMouseScore) {
            lastMouseScore = score;
            addMouse();
        }

        event.preventDefault();
    });

    randomizeItemPositions(items);
});

