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

let form = document.querySelector("#calculator");
let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let operation = document.querySelector("#operation");
let resultDisplay = document.querySelector("#result");

// Událost na odeslání formuláře
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Zabrání přesměrování formuláře

    // Získání hodnot
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    let op = operation.value;

    // Výpočet výsledku
    let result;
    if (op === "+") {
        result = num1 + num2;
    } else if (op === "-") {
        result = num1 - num2;
    } else if (op === "*") {
        result = num1 * num2;
    } else if (op === "/") {
        result = num2 !== 0 ? num1 / num2 : "Nulou nelze dělit!";
    } else {
        result = "Neplatná operace";
    }

    // Zobrazení výsledku
    resultDisplay.textContent = result;
    console.log(result)
});


