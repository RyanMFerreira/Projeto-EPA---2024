const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const finalContainer = document.getElementById('final-container');
const finalScoreElement = document.getElementById('final-points');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

let shuffledQuestions, currentQuestionIndex, score;

const questions = [
    {
        question: 'Qual é a capital do Brasil?',
        answers: [
            { text: 'Brasília', correct: true },
            { text: 'Rio de Janeiro', correct: false },
            { text: 'São Paulo', correct: false },
            { text: 'Salvador', correct: false }
        ]
    },
    {
        question: 'Qual é o maior planeta do sistema solar?',
        answers: [
            { text: 'Terra', correct: false },
            { text: 'Júpiter', correct: true },
            { text: 'Marte', correct: false },
            { text: 'Saturno', correct: false }
        ]
    },
    {
        question: 'Quem escreveu "Dom Quixote"?',
        answers: [
            { text: 'Miguel de Cervantes', correct: true },
            { text: 'William Shakespeare', correct: false },
            { text: 'Machado de Assis', correct: false },
            { text: 'José de Alencar', correct: false }
        ]
    },
    {
        question: 'Qual é a fórmula química da água?',
        answers: [
            { text: 'H2O', correct: true },
            { text: 'CO2', correct: false },
            { text: 'NaCl', correct: false },
            { text: 'O2', correct: false }
        ]
    },
    {
        question: 'Qual é o animal mais rápido do mundo?',
        answers: [
            { text: 'Leopardo', correct: false },
            { text: 'Falcão Peregrino', correct: true },
            { text: 'Guepardo', correct: false },
            { text: 'Águia', correct: false }
        ]
    },
    {
        question: 'Quem pintou a Mona Lisa?',
        answers: [
            { text: 'Vincent Van Gogh', correct: false },
            { text: 'Leonardo da Vinci', correct: true },
            { text: 'Pablo Picasso', correct: false },
            { text: 'Claude Monet', correct: false }
        ]
    },
    {
        question: 'Qual o metal cujo símbolo químico é Au?',
        answers: [
            { text: 'Prata', correct: false },
            { text: 'Ouro', correct: true },
            { text: 'Cobre', correct: false },
            { text: 'Platina', correct: false }
        ]
    },
    {
        question: 'Qual é o país mais populoso do mundo?',
        answers: [
            { text: 'Índia', correct: false },
            { text: 'Estados Unidos', correct: false },
            { text: 'China', correct: true },
            { text: 'Brasil', correct: false }
        ]
    },
    {
        question: 'Quem desenvolveu a teoria da relatividade?',
        answers: [
            { text: 'Isaac Newton', correct: false },
            { text: 'Albert Einstein', correct: true },
            { text: 'Galileu Galilei', correct: false },
            { text: 'Nikola Tesla', correct: false }
        ]
    },
    {
        question: 'Qual é o rio mais longo do mundo?',
        answers: [
            { text: 'Rio Amazonas', correct: false },
            { text: 'Rio Nilo', correct: true },
            { text: 'Rio Yangtzé', correct: false },
            { text: 'Rio Mississipi', correct: false }
        ]
    },
    {
        question: 'Qual é o maior oceano do mundo?',
        answers: [
            { text: 'Oceano Atlântico', correct: false },
            { text: 'Oceano Pacífico', correct: true },
            { text: 'Oceano Índico', correct: false },
            { text: 'Oceano Ártico', correct: false }
        ]
    },
    {
        question: 'Em que ano o homem pisou na Lua pela primeira vez?',
        answers: [
            { text: '1969', correct: true },
            { text: '1972', correct: false },
            { text: '1965', correct: false },
            { text: '1959', correct: false }
        ]
    },
    {
        question: 'Qual é o menor país do mundo?',
        answers: [
            { text: 'Mônaco', correct: false },
            { text: 'Malta', correct: false },
            { text: 'Vaticano', correct: true },
            { text: 'Liechtenstein', correct: false }
        ]
    },
    {
        question: 'Qual é o nome do hino nacional do Brasil?',
        answers: [
            { text: 'Ouviram do Ipiranga', correct: false },
            { text: 'Hino à Bandeira', correct: false },
            { text: 'Independência ou Morte', correct: false },
            { text: 'Hino Nacional Brasileiro', correct: true }
        ]
    },
    {
        question: 'Em que continente fica o deserto do Saara?',
        answers: [
            { text: 'Ásia', correct: false },
            { text: 'África', correct: true },
            { text: 'América do Sul', correct: false },
            { text: 'Europa', correct: false }
        ]
    },
    // Novas perguntas adicionadas
    {
        question: 'Qual é a capital da França?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Londres', correct: false },
            { text: 'Berlim', correct: false },
            { text: 'Madri', correct: false }
        ]
    },
    {
        question: 'Quem é conhecido como o "Pai da Psicanálise"?',
        answers: [
            { text: 'Carl Jung', correct: false },
            { text: 'Sigmund Freud', correct: true },
            { text: 'Jean Piaget', correct: false },
            { text: 'Erik Erikson', correct: false }
        ]
    },
    {
        question: 'Qual é o maior país do mundo em termos de área?',
        answers: [
            { text: 'Estados Unidos', correct: false },
            { text: 'China', correct: false },
            { text: 'Brasil', correct: false },
            { text: 'Rússia', correct: true }
        ]
    },
    {
        question: 'Qual é o maior órgão do corpo humano?',
        answers: [
            { text: 'Coração', correct: false },
            { text: 'Fígado', correct: false },
            { text: 'Pele', correct: true },
            { text: 'Pulmões', correct: false }
        ]
    },
    {
        question: 'Qual é o planeta mais próximo do Sol?',
        answers: [
            { text: 'Vênus', correct: false },
            { text: 'Terra', correct: false },
            { text: 'Mercúrio', correct: true },
            { text: 'Marte', correct: false }
        ]
    }
];

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartButton.addEventListener('click', restartGame);

function startGame() {
    score = 0;
    startButton.classList.add('hide');
    finalContainer.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    scoreContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === 'true');
        button.disabled = true;
    });
    if (correct) {
        correctSound.play();
        score++;
    } else {
        wrongSound.play();
    }
    scoreElement.innerText = `Pontuação: ${score}`;
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showFinalScore();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showFinalScore() {
    questionContainer.classList.add('hide');
    finalContainer.classList.remove('hide');
    finalScoreElement.innerText = score;
}

function restartGame() {
    startButton.innerText = 'Começar';
    startGame();
}
