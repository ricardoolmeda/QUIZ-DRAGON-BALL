const questions = [
  {
    id: 1,
    question: "¿Quién muere en el enfrentamiento contra Raditz?",
    answer: ["Goku", "Gohan", "Piccolo", "Chichi"],
    correctAnswer: "Goku"
  },
  {
    id: 2,
    question: "¿Cómo se llama el mejor amigo de la infancia de Goku?",
    answer: ["Krilin", "Vegeta", "Piccolo", "Roshi"],
    correctAnswer: "Krilin"
  },
  {
    id: 3,
    question: "¿Con cuántos años participó en el 21º Torneo de las Artes Marciales?",
    answer: ["19", "21", "12", "15"],
    correctAnswer: "12"
  },
  {
    id: 4,
    question: "¿Cómo se llamaban originalmente los Androides A17 y A18?",
    answer: ["Lapis y Lazuli", "Castor y Pollus", "Rubí y Zafiro", "Esmeralda y Diamante"],
    correctAnswer: "Lapis y Lazuli"
  },
  {
    id: 5,
    question: "¿Cómo se llama la madre de Goku?",
    answer: ["Apple", "Nunts", "Gine", "Faro"],
    correctAnswer: "Gine"
  }
];

let currentQuestion = 0;

const title = document.getElementById("question");
const answerBox = document.getElementById("answerBox");
const questionCounter = document.getElementById("questionCounter");

function printQuestion(){
  // Pintamos el título
  title.innerText = questions[currentQuestion].question;

  // De la pregunta actual, se generan los botones de respuesta
  let questionAnswers = questions[currentQuestion].answer;
  
  // Desordena las respuestas
  questionAnswers.sort(() => Math.random() - 0.5);
  
  // Antes de pintar las nuevas respuestas, limpiamos el contenedor
  answerBox.innerHTML = "";

  // Generamos los botones de respuesta
  questionAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.onclick = () => checkAnswer(answer);
    answerBox.appendChild(button);
  });

  // Actualizamos el contador de preguntas
  questionCounter.innerText = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
}

function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestion].correctAnswer;
  if (selectedAnswer === correctAnswer) {
    alert("¡Correcto!");
  } else {
    alert("Incorrecto, la respuesta correcta es: " + correctAnswer);
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    printQuestion();
  } else {
    alert("Has terminado el cuestionario.");
  }
}

// Inicializamos la primera pregunta
printQuestion();
