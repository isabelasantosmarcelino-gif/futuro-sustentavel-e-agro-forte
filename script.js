// ===============================
// CONTADORES ANIMADOS
// ===============================

function animarContador(id, valorFinal, velocidade) {

    let numero = 0;

    const contador = document.getElementById(id);

    const intervalo = setInterval(() => {

        numero++;

        contador.textContent = numero;

        if (numero >= valorFinal) {
            clearInterval(intervalo);
        }

    }, velocidade);

}

animarContador("num1", 180, 20);
animarContador("num2", 75, 35);
animarContador("num3", 250, 15);


// ===============================
// GRÁFICO
// ===============================

const ctx = document.getElementById("graficoAgricultura");

new Chart(ctx, {

    type: "line",

    data: {

        labels: [
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025"
        ],

        datasets: [{

            label: "Projetos Sustentáveis",

            data: [
                20,
                35,
                45,
                60,
                75,
                90,
                110,
                130
            ],

            borderColor: "#2e7d32",

            backgroundColor: "rgba(46,125,50,0.2)",

            borderWidth: 4,

            fill: true,

            tension: 0.4

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                display: true
            }

        }

    }

});


// ===============================
// QUIZ
// ===============================

function verificar(resposta) {

    const resultado =
    document.getElementById("resultado");

    if (resposta === "certo") {

        resultado.innerHTML =
        "✅ Correto! Os drones são utilizados para monitoramento aéreo das lavouras.";

        resultado.style.color = "green";

    }

    else {

        resultado.innerHTML =
        "❌ Resposta incorreta. Tente novamente.";

        resultado.style.color = "red";

    }

}


// ===============================
// CURIOSIDADES AUTOMÁTICAS
// ===============================

const curiosidades = [

"🌱 O Brasil está entre os maiores produtores de alimentos do mundo.",

"🚜 A agricultura de precisão reduz desperdícios e aumenta a produtividade.",

"💧 Sistemas inteligentes de irrigação ajudam a economizar água.",

"🚁 Drones conseguem monitorar grandes áreas agrícolas em poucos minutos.",

"🌳 A recuperação de áreas degradadas melhora a qualidade do solo.",

"☀️ Muitas propriedades rurais já utilizam energia solar.",

"📡 Sensores agrícolas ajudam produtores a tomar decisões mais eficientes.",

"🌾 A rotação de culturas contribui para a preservação dos nutrientes do solo."

];

let indice = 0;

function trocarCuriosidade() {

    const texto =
    document.getElementById("textoCuriosidade");

    texto.innerHTML =
    curiosidades[indice];

    indice++;

    if (indice >= curiosidades.length) {

        indice = 0;

    }

}

trocarCuriosidade();

setInterval(trocarCuriosidade, 5000);


// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const elementos =
document.querySelectorAll(
".card, .evento, .faq-item"
);

function revelarElementos() {

    elementos.forEach(elemento => {

        const topo =
        elemento.getBoundingClientRect().top;

        const alturaTela =
        window.innerHeight;

        if (topo < alturaTela - 100) {

            elemento.style.opacity = "1";

            elemento.style.transform =
            "translateY(0px)";

        }

    });

}

elementos.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform =
    "translateY(40px)";

    elemento.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revelarElementos
);

revelarElementos();


// ===============================
// MENSAGEM DE BOAS-VINDAS
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        alert(
            "🌱 Bem-vindo ao projeto Agro Forte, Futuro Sustentável! Explore o site para conhecer como a tecnologia e a sustentabilidade estão transformando o campo."
        );

    }, 1000);

});
