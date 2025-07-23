const lineas = [
  "Querida Lucero…",

  "...",

  "Este no es solo un mensaje.",
  "Es un pedazo de mi corazón, que quise dejarte por... escrito?.",
"Esto es muy Nerd absjsjs.",
  "Porque lo que siento por ti… ya no me cabe en el pecho.",
  "...",
  "",
  
  

  "Tú dices que no eres bonita.",
  "Y cada vez que lo dices, algo dentro de mí grita:",
  "Estas tontita o que mi amor",
  "...",
  "",
  
  "Tus lunares… tus ojos… tu risa tímida cuando te chiveas…",
  "Todo en ti parece dibujado con amor, como si algun artista te hubiera esculpido.",
  "...",
  "",
  
  "Hay un lunar en particular que adoro.",
  "No diré dónde, pero tú sabes cuál es.",
  "Ese que me hace sonreír como niño, y me recuerda que incluso los detalles más pequeños en ti me vuelven loco.",
  "...",
  "",
  
  "Tu nariz parece salida de una pintura, que incluso dicen que es operada.",
  "Tus labios… Dios mío, tus labios…",
  "no hay poema que le haga justicia al beso que me dan.",
  "...",
  "",
  
  "Y tus ojos… tus ojos, Lucero.",
  "Cuando me miras, el mundo se detiene.",
  "Solo quedamos tú y yo en silencio, flotando en un instante eterno.",
  "...",
  "",
  
  "Dicen que cuando una persona es feliz, brilla distinto.",
  "Y cuando tú sonríes… Lucero, tú iluminas todo a tu alrededor.",
  "...",
  "",
  
  "No sé en qué momento dejaste de ser esa chica con la que peleaba por tonterías,",
  "y te convertiste en la razón por la que me despierto con ganas de ser mejor.",
  "...",
  "",
  
  "Pero me asusta quererte tanto.",
  "No porque me hagas daño… sino porque cuando me enamoró me desvivo dando.",
  "Y a veces temo asustarte con la forma en la que amo.",
  "...",
  "",
  
  "Cuando te amo, no dejo nada guardado.",
  "Me entrego, me doy, me rompo si hace falta.",
  "...",
  "",
  
  "Quizá creas que voy muy rápido.",
  "Pero es que mi alma ya decidió: tú eres el amor que no quiero perder.",
  "...",
  "",
  
  "No quiero presionarte, ni hacerte sentir que tienes que corresponder igual.",
  "Solo quiero que lo sepas.",
  "Que si un día dudas de ti, o del amor,",
  "aquí estaré, con el mío intacto.",
  "...",
  "",
  
  "Me derrito cada vez que tomas mi cara entre tus manos,",
  "cuando entre risas me dices 'Amor' cuando hay mas gente y te da pena ,",
  "y yo solo quiero quedarme ahí, viéndote, sin decir nada.",
  "...",
  "",
  
  "Sueño contigo, Lucero.",
  "Contigo despertando a mi lado,",
  "con tus ojos hinchados por dormir,",
  "y aún así, más hermosa que nunca.",
  "...",
  "",
  

  "Contigo aprendí lo que es amor del bueno.",
  "...",
  "",
  
  "No el que asfixia.",
  "El que abraza.",
  "El que no exige.",
  "El que cuida en silencio, pero ama a gritos.",
  "...",
  "",
  
  "Gracias por existir, Lucero.",
  "Gracias por ser tú, con tus tonterias, tus palabras, tus ganas de ayudar.",
  "...",
  "",
  
  "Gracias por dejarme conocerte, incluso cuando te sentías rota.",
  "Gracias por permitirme verte… y quedarme.",
  "...",
  "",
  "No sé si algún día dejarás de dudar de lo hermosa que eres.",
  "Pero si llega ese día… espero ser yo quien esté ahí para recordártelo.",
  "...",
  "",
  "Con amor del verdadero, del que no se rinde ni se agota…",
  "Osvaldo 💜"
];

document.body.addEventListener("click", () => {
  const audio = document.getElementById("musica");
  const pantalla = document.getElementById("pantalla-inicial");
  const corazon = document.getElementById("corazon");
  const mensaje = document.getElementById("mensaje");

  if (pantalla) pantalla.remove();
  corazon.classList.remove("oculto");
  mensaje.classList.remove("oculto");

  if (audio && audio.paused) {
    audio.play().catch(e => console.log("Autoplay bloqueado:", e));
  }

  lineas.forEach((linea, i) => {
    const p = document.createElement("p");
    p.className = "linea";
    p.style.animationDelay = `${2 + i * 2}s`;
    p.textContent = linea;
    mensaje.appendChild(p);
  });

  setTimeout(() => {
    mensaje.style.opacity = 1;
  }, 2000);
}, { once: true });
