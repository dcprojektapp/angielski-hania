const db = {
    tobe: [
        // === Tłumaczenia (to be) ===
        { polish: "Ja jestem uczniem.", english: "I am a student.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój tata jest wysoki.", english: "My dad is tall.", type: "twierdzenie", mode: "translate" },
        { polish: "Moja mama jest mądra.", english: "My mum is clever.", type: "twierdzenie", mode: "translate" },
        { polish: "Ona jest moją ciocią.", english: "She is my aunt.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój piórnik jest mały.", english: "My pencil case is small.", type: "twierdzenie", mode: "translate" },
        { polish: "My jesteśmy w klasie.", english: "We are in the classroom.", type: "twierdzenie", mode: "translate" },
        { polish: "Oni są szczęśliwi.", english: "They are happy.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój brat jest zabawny.", english: "My brother is funny.", type: "twierdzenie", mode: "translate" },
        
        { polish: "Ja nie jestem zmęczony.", english: "I am not tired.", type: "przeczenie", mode: "translate" },
        { polish: "Mój dziadek nie jest niski.", english: "My grandad is not short.", type: "przeczenie", mode: "translate" },
        { polish: "Ona nie jest spóźniona.", english: "She is not late.", type: "przeczenie", mode: "translate" },
        { polish: "Mój plecak nie jest duży.", english: "My bag is not big.", type: "przeczenie", mode: "translate" },
        { polish: "Oni nie są w szkole.", english: "They are not at school.", type: "przeczenie", mode: "translate" },
        { polish: "My nie jesteśmy smutni.", english: "We are not sad.", type: "przeczenie", mode: "translate" },
        
        { polish: "Czy ty jesteś szczęśliwy?", english: "Are you happy?", type: "pytanie", mode: "translate" },
        { polish: "Czy ona jest twoją babcią?", english: "Is she your granny?", type: "pytanie", mode: "translate" },
        { polish: "Czy twój piórnik jest niebieski?", english: "Is your pencil case blue?", type: "pytanie", mode: "translate" },
        { polish: "Czy oni są w domu?", english: "Are they at home?", type: "pytanie", mode: "translate" },
        { polish: "Czy jesteś gotowy?", english: "Are you ready?", type: "pytanie", mode: "translate" },
        { polish: "Czy twój pies jest stary?", english: "Is your dog old?", type: "pytanie", mode: "translate" },
        
        // === Luki (to be) ===
        { prefix: "I ", expected: "am", suffix: " a student. (jestem)", mode: "gap", type: "twierdzenie" },
        { prefix: "She ", expected: "is", suffix: " my aunt. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "My dad ", expected: "is", suffix: " tall and funny. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "They ", expected: "are", suffix: " in the classroom. (są)", mode: "gap", type: "twierdzenie" },
        { prefix: "We ", expected: "are", suffix: " happy today. (jesteśmy)", mode: "gap", type: "twierdzenie" },
        { prefix: "The pencil case ", expected: "is", suffix: " small. (jest)", mode: "gap", type: "twierdzenie" },
        
        { prefix: "I ", expected: "am not", suffix: " tired. (nie jestem)", mode: "gap", type: "przeczenie" },
        { prefix: "She ", expected: "is not", suffix: " late for school. (nie jest)", mode: "gap", type: "przeczenie" },
        { prefix: "My grandad ", expected: "is not", suffix: " short. (nie jest)", mode: "gap", type: "przeczenie" },
        { prefix: "We ", expected: "are not", suffix: " sad. (nie jesteśmy)", mode: "gap", type: "przeczenie" },
        { prefix: "They ", expected: "are not", suffix: " at home. (nie są)", mode: "gap", type: "przeczenie" },
        { prefix: "The schoolbag ", expected: "is not", suffix: " big. (nie jest)", mode: "gap", type: "przeczenie" },
        
        { prefix: "", expected: "Are", suffix: " you happy? (Czy jesteś)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Is", suffix: " he your uncle? (Czy on jest)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Is", suffix: " she your granny? (Czy ona jest)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Are", suffix: " your parents here? (Czy są)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Is", suffix: " your dog friendly? (Czy twój pies jest)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Are", suffix: " they ready? (Czy oni są)", mode: "gap", type: "pytanie" }
    ],
    tohave: [
        // === Tłumaczenia (have got) ===
        { polish: "Ja mam papugę.", english: "I have got a parrot.", type: "twierdzenie", mode: "translate" },
        { polish: "Ty masz chomika.", english: "You have got a hamster.", type: "twierdzenie", mode: "translate" },
        { polish: "On ma węża.", english: "He has got a snake.", type: "twierdzenie", mode: "translate" },
        { polish: "Ona ma królika.", english: "She has got a rabbit.", type: "twierdzenie", mode: "translate" },
        { polish: "Pająk ma osiem nóg.", english: "A spider has got eight legs.", type: "twierdzenie", mode: "translate" },
        { polish: "My mamy nowego psa.", english: "We have got a new dog.", type: "twierdzenie", mode: "translate" },
        { polish: "Oni mają duży piórnik.", english: "They have got a big pencil case.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój brat ma żółwia.", english: "My brother has got a tortoise.", type: "twierdzenie", mode: "translate" },
        
        { polish: "Ja nie mam brata.", english: "I have not got a brother.", type: "przeczenie", mode: "translate" },
        { polish: "Ona nie ma węża.", english: "She has not got a snake.", type: "przeczenie", mode: "translate" },
        { polish: "On nie ma kota.", english: "He has not got a cat.", type: "przeczenie", mode: "translate" },
        { polish: "Ten potwór nie ma trzech oczu.", english: "This monster has not got three eyes.", type: "przeczenie", mode: "translate" },
        { polish: "My nie mamy pracy domowej.", english: "We have not got homework.", type: "przeczenie", mode: "translate" },
        { polish: "Oni nie mają rybki.", english: "They have not got a fish.", type: "przeczenie", mode: "translate" },
        
        { polish: "Czy ty masz chomika?", english: "Have you got a hamster?", type: "pytanie", mode: "translate" },
        { polish: "Czy on ma małe uszy?", english: "Has he got small ears?", type: "pytanie", mode: "translate" },
        { polish: "Czy ona ma królika?", english: "Has she got a rabbit?", type: "pytanie", mode: "translate" },
        { polish: "Czy oni mają papugę?", english: "Have they got a parrot?", type: "pytanie", mode: "translate" },
        { polish: "Czy masz nowy plecak?", english: "Have you got a new bag?", type: "pytanie", mode: "translate" },
        { polish: "Czy twój pies ma długi ogon?", english: "Has your dog got a long tail?", type: "pytanie", mode: "translate" },
        
        // === Luki (have got) ===
        { prefix: "I ", expected: "have got", suffix: " a parrot. (mam)", mode: "gap", type: "twierdzenie" },
        { prefix: "My sister ", expected: "has got", suffix: " a rabbit. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "You ", expected: "have got", suffix: " a hamster. (masz)", mode: "gap", type: "twierdzenie" },
        { prefix: "He ", expected: "has got", suffix: " a snake. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "A spider ", expected: "has got", suffix: " eight legs. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "We ", expected: "have got", suffix: " new books. (mamy)", mode: "gap", type: "twierdzenie" },
        { prefix: "They ", expected: "have got", suffix: " a big dog. (mają)", mode: "gap", type: "twierdzenie" },
        
        { prefix: "I ", expected: "have not got", suffix: " a brother. (nie mam)", mode: "gap", type: "przeczenie" },
        { prefix: "He ", expected: "has not got", suffix: " a spider. (nie ma)", mode: "gap", type: "przeczenie" },
        { prefix: "She ", expected: "has not got", suffix: " a cat. (nie ma)", mode: "gap", type: "przeczenie" },
        { prefix: "We ", expected: "have not got", suffix: " homework today. (nie mamy)", mode: "gap", type: "przeczenie" },
        { prefix: "They ", expected: "have not got", suffix: " a tortoise. (nie mają)", mode: "gap", type: "przeczenie" },
        { prefix: "The monster ", expected: "has not got", suffix: " wings. (nie ma)", mode: "gap", type: "przeczenie" },
        
        { prefix: "", expected: "Have", suffix: " you got a pet? (Czy masz)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Has", suffix: " he got small ears? (Czy on ma)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Has", suffix: " she got a rabbit? (Czy ona ma)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Have", suffix: " they got new pens? (Czy mają)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Has", suffix: " your dog got a long tail? (Czy twój pies ma)", mode: "gap", type: "pytanie" }
    ],
    can: [
        // === Tłumaczenia (can) ===
        { polish: "Ja potrafię grać na gitarze.", english: "I can play the guitar.", type: "twierdzenie", mode: "translate" },
        { polish: "Ty umiesz jeździć na rowerze.", english: "You can ride a bike.", type: "twierdzenie", mode: "translate" },
        { polish: "Papuga potrafi latać.", english: "A parrot can fly.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój brat potrafi pływać.", english: "My brother can swim.", type: "twierdzenie", mode: "translate" },
        { polish: "Oni umieją grać na pianinie.", english: "They can play the piano.", type: "twierdzenie", mode: "translate" },
        { polish: "Ona potrafi tańczyć.", english: "She can dance.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój pies umie szybko biegać.", english: "My dog can run fast.", type: "twierdzenie", mode: "translate" },
        
        { polish: "Ja nie potrafię latać.", english: "I cannot fly.", type: "przeczenie", mode: "translate" },
        { polish: "Ona nie umie jeździć na deskorolce.", english: "She cannot skateboard.", type: "przeczenie", mode: "translate" },
        { polish: "My nie potrafimy grać w tenisa.", english: "We cannot play tennis.", type: "przeczenie", mode: "translate" },
        { polish: "Kot nie potrafi nurkować.", english: "A cat cannot dive.", type: "przeczenie", mode: "translate" },
        { polish: "On nie umie śpiewać.", english: "He cannot sing.", type: "przeczenie", mode: "translate" },
        { polish: "Oni nie potrafią jeździć na rolkach.", english: "They cannot rollerblade.", type: "przeczenie", mode: "translate" },
        { polish: "Pies nie potrafi wspinać się na drzewa.", english: "A dog cannot climb trees.", type: "przeczenie", mode: "translate" },
        
        { polish: "Czy ty umiesz jeździć na rolkach?", english: "Can you rollerblade?", type: "pytanie", mode: "translate" },
        { polish: "Czy on potrafi skakać?", english: "Can he jump?", type: "pytanie", mode: "translate" },
        { polish: "Czy potrafisz pływać?", english: "Can you swim?", type: "pytanie", mode: "translate" },
        { polish: "Czy ona umie grać w piłkę nożną?", english: "Can she play football?", type: "pytanie", mode: "translate" },
        { polish: "Czy papuga potrafi mówić?", english: "Can a parrot talk?", type: "pytanie", mode: "translate" },
        { polish: "Czy oni potrafią nurkować?", english: "Can they dive?", type: "pytanie", mode: "translate" },
        
        // === Luki (can) ===
        { prefix: "I ", expected: "can", suffix: " ride a bike. (potrafię)", mode: "gap", type: "twierdzenie" },
        { prefix: "My brother ", expected: "can", suffix: " play football. (potrafi)", mode: "gap", type: "twierdzenie" },
        { prefix: "A parrot ", expected: "can", suffix: " fly. (potrafi)", mode: "gap", type: "twierdzenie" },
        { prefix: "She ", expected: "can", suffix: " dance. (umie)", mode: "gap", type: "twierdzenie" },
        { prefix: "They ", expected: "can", suffix: " play the piano. (umieją)", mode: "gap", type: "twierdzenie" },
        { prefix: "My dog ", expected: "can", suffix: " run fast. (potrafi)", mode: "gap", type: "twierdzenie" },
        
        { prefix: "I ", expected: "cannot", suffix: " fly. (nie potrafię)", mode: "gap", type: "przeczenie" },
        { prefix: "A dog ", expected: "cannot", suffix: " climb trees. (nie potrafi)", mode: "gap", type: "przeczenie" },
        { prefix: "He ", expected: "cannot", suffix: " sing. (nie umie)", mode: "gap", type: "przeczenie" },
        { prefix: "She ", expected: "cannot", suffix: " skateboard. (nie umie)", mode: "gap", type: "przeczenie" },
        { prefix: "We ", expected: "cannot", suffix: " play tennis today. (nie umiemy)", mode: "gap", type: "przeczenie" },
        { prefix: "A cat ", expected: "cannot", suffix: " dive. (nie potrafi)", mode: "gap", type: "przeczenie" },
        { prefix: "They ", expected: "cannot", suffix: " rollerblade. (nie potrafią)", mode: "gap", type: "przeczenie" },
        
        { prefix: "", expected: "Can", suffix: " you swim? (Czy potrafisz)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " he jump? (Czy on potrafi)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " she play the guitar? (Czy ona umie)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " you dive? (Czy umiesz)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " a spider swim? (Czy potrafi)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " they rollerblade? (Czy potrafią)", mode: "gap", type: "pytanie" }
    ]
};

// Stan aplikacji
let selectedModule = 'translate'; // 'translate' lub 'gap'
let currentTopic = '';            // 'tobe', 'tohave', 'can', 'mix'
let currentQuestions = [];
let bestScore = parseInt(localStorage.getItem('english_best_score') || '0', 10);

// Elementy DOM
const topicSelection = document.getElementById('topic-selection');
const exerciseSection = document.getElementById('exercise-section');
const currentTopicTitle = document.getElementById('current-topic-title');
const currentModuleBadge = document.getElementById('current-module-badge');
const questionsList = document.getElementById('questions-list');
const checkAllBtn = document.getElementById('check-all-btn');
const backBtn = document.getElementById('back-btn');
const bestScoreDisplay = document.getElementById('best-score');

// Modal podsumowania
const celebrationModal = document.getElementById('celebration-modal');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const correctCountElem = document.getElementById('correct-count');
const incorrectCountElem = document.getElementById('incorrect-count');
const scorePercentageElem = document.getElementById('score-percentage');
const finalScoreText = document.getElementById('final-score-text');
const continueBtn = document.getElementById('continue-btn');
const retryBtn = document.getElementById('retry-btn');

// Przełączniki modułów i przyciski tematów
const modTranslate = document.getElementById('mod-translate');
const modGap = document.getElementById('mod-gap');
const topicButtons = document.querySelectorAll('.topic-btn');

// Inicjalizacja najlepszego wyniku
bestScoreDisplay.textContent = bestScore;

// Obsługa wyboru modułu
modTranslate.addEventListener('click', () => setModule('translate'));
modGap.addEventListener('click', () => setModule('gap'));

function setModule(mode) {
    selectedModule = mode;
    if (mode === 'translate') {
        modTranslate.classList.add('active');
        modGap.classList.remove('active');
    } else {
        modGap.classList.add('active');
        modTranslate.classList.remove('active');
    }
}

// Obsługa wyboru tematu
topicButtons.forEach(btn => {
    btn.addEventListener('click', () => startQuiz(btn.dataset.topic));
});

backBtn.addEventListener('click', showTopicSelection);
checkAllBtn.addEventListener('click', checkAnswers);

continueBtn.addEventListener('click', () => {
    celebrationModal.classList.add('hidden');
    showTopicSelection();
});

retryBtn.addEventListener('click', () => {
    celebrationModal.classList.add('hidden');
    loadQuiz();
});

function startQuiz(topic) {
    currentTopic = topic;
    topicSelection.classList.add('hidden');
    exerciseSection.classList.remove('hidden');
    
    // Ustawienie etykiety modułu
    if (selectedModule === 'translate') {
        currentModuleBadge.textContent = '📝 Tłumaczenia zdań';
    } else {
        currentModuleBadge.textContent = '🧩 Zadania z luką';
    }

    // Ustawienie tytułu tematu
    let title = '';
    if (topic === 'tobe') title = 'Czasownik "to be"';
    if (topic === 'tohave') title = 'Czasownik "have got"';
    if (topic === 'can') title = 'Czasownik "can"';
    if (topic === 'mix') title = 'Super Mix (Wszystko naraz)';
    currentTopicTitle.textContent = title;
    
    loadQuiz();
}

function showTopicSelection() {
    exerciseSection.classList.add('hidden');
    topicSelection.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shuffle(array) {
    let copy = array.slice();
    let currentIndex = copy.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [copy[currentIndex], copy[randomIndex]] = [copy[randomIndex], copy[currentIndex]];
    }
    return copy;
}

function loadQuiz() {
    checkAllBtn.disabled = false;
    checkAllBtn.textContent = "Sprawdź odpowiedzi! 🚀";
    
    let pool = [];
    if (currentTopic === 'mix') {
        pool = [...db.tobe, ...db.tohave, ...db.can];
    } else {
        pool = db[currentTopic];
    }
    
    // Filtrujemy dokładnie po wybranym module (translate albo gap)
    const filteredPool = pool.filter(item => item.mode === selectedModule);
    
    // Losujemy i bierzemy dokładnie 10 zadań
    const shuffled = shuffle(filteredPool);
    currentQuestions = shuffled.slice(0, Math.min(10, shuffled.length));
    
    renderQuestions();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestions() {
    questionsList.innerHTML = '';
    
    currentQuestions.forEach((q, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'question-item card';
        
        const headerDiv = document.createElement('div');
        headerDiv.className = 'exercise-type';
        const typeLabel = q.type ? q.type.toUpperCase() : '';
        headerDiv.textContent = `Zadanie ${index + 1} / ${currentQuestions.length} • ${typeLabel}`;
        itemDiv.appendChild(headerDiv);
        
        if (q.mode === 'translate') {
            const qText = document.createElement('div');
            qText.className = 'question';
            qText.textContent = q.polish;
            itemDiv.appendChild(qText);
            
            const inputArea = document.createElement('div');
            inputArea.className = 'input-area';
            
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `input-${index}`;
            input.placeholder = "Napisz po angielsku...";
            input.autocomplete = "off";
            input.spellcheck = false;
            
            // Obsługa Enter
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const nextInput = document.getElementById(`input-${index + 1}`);
                    if (nextInput) {
                        nextInput.focus();
                    } else {
                        checkAllBtn.focus();
                    }
                }
            });
            
            inputArea.appendChild(input);
            itemDiv.appendChild(inputArea);
            
        } else if (q.mode === 'gap') {
            const inputArea = document.createElement('div');
            inputArea.className = 'input-area gap-fill-area';
            
            if (q.prefix) {
                const prefix = document.createElement('span');
                prefix.className = 'gap-text';
                prefix.textContent = q.prefix;
                inputArea.appendChild(prefix);
            }
            
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `input-${index}`;
            input.autocomplete = "off";
            input.spellcheck = false;
            input.placeholder = "...";
            
            // Obsługa Enter
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const nextInput = document.getElementById(`input-${index + 1}`);
                    if (nextInput) {
                        nextInput.focus();
                    } else {
                        checkAllBtn.focus();
                    }
                }
            });
            
            inputArea.appendChild(input);
            
            if (q.suffix) {
                const suffix = document.createElement('span');
                suffix.className = 'gap-text';
                suffix.textContent = q.suffix;
                inputArea.appendChild(suffix);
            }
            
            itemDiv.appendChild(inputArea);
        }
        
        const feedback = document.createElement('div');
        feedback.className = 'feedback';
        feedback.id = `feedback-${index}`;
        itemDiv.appendChild(feedback);
        
        questionsList.appendChild(itemDiv);
    });
}

function cleanString(str) {
    return (str || '').toLowerCase()
                      .replace(/[.,!?]/g, '')
                      .replace(/\s+/g, ' ')
                      .trim();
}

function isAnswerCorrect(userAns, correctAns) {
    let user = cleanString(userAns);
    let correct = cleanString(correctAns);
    
    if (user === correct) return true;
    
    // Słownik zamienników form skróconych i pełnych
    const variations = {
        "i am not": ["im not", "i'm not"],
        "you are not": ["you arent", "you aren't", "you're not", "youre not"],
        "he is not": ["he isnt", "he isn't", "he's not", "hes not"],
        "she is not": ["she isnt", "she isn't", "she's not", "shes not"],
        "it is not": ["it isnt", "it isn't", "it's not", "its not"],
        "we are not": ["we arent", "we aren't", "we're not", "were not"],
        "they are not": ["they arent", "they aren't", "they're not", "theyre not"],
        
        "i have not got": ["i havent got", "i haven't got", "ive not got", "i've not got"],
        "you have not got": ["you havent got", "you haven't got"],
        "he has not got": ["he hasnt got", "he hasn't got"],
        "she has not got": ["she hasnt got", "she hasn't got"],
        "it has not got": ["it hasnt got", "it hasn't got"],
        "we have not got": ["we havent got", "we haven't got"],
        "they have not got": ["they havent got", "they haven't got"],
        
        "cannot": ["can not", "cant", "can't"]
    };
    
    for (let key in variations) {
        if (correct.includes(key)) {
            for (let v of variations[key]) {
                let altCorrect = correct.replace(key, v);
                if (user === altCorrect) return true;
            }
        }
    }
    
    const shortForms = [
        { full: "i am", short: "i'm" }, { full: "i am", short: "im" },
        { full: "you are", short: "you're" }, { full: "you are", short: "youre" },
        { full: "he is", short: "he's" }, { full: "he is", short: "hes" },
        { full: "she is", short: "she's" }, { full: "she is", short: "shes" },
        { full: "it is", short: "it's" }, { full: "it is", short: "its" },
        { full: "we are", short: "we're" }, { full: "we are", short: "were" },
        { full: "they are", short: "they're" }, { full: "they are", short: "theyre" },
        { full: "i have got", short: "i've got" }, { full: "i have got", short: "ive got" }
    ];
    
    for (let f of shortForms) {
        if (correct.includes(f.full)) {
            let alt = correct.replace(f.full, f.short);
            if (user === alt) return true;
        }
    }

    return false;
}

function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;
    
    currentQuestions.forEach((q, index) => {
        const input = document.getElementById(`input-${index}`);
        const feedback = document.getElementById(`feedback-${index}`);
        const userAns = input.value;
        
        let isCorrect = false;
        
        if (q.mode === 'translate') {
            isCorrect = isAnswerCorrect(userAns, q.english);
        } else {
            // Logika luk
            let cleanUser = cleanString(userAns);
            let cleanExpected = cleanString(q.expected);
            
            if (cleanUser === cleanExpected) {
                isCorrect = true;
            } else if (cleanExpected === "cannot" && (cleanUser === "cant" || cleanUser === "can't" || cleanUser === "can not")) {
                isCorrect = true;
            } else if (cleanExpected === "have not got" && (cleanUser === "havent got" || cleanUser === "haven't got" || cleanUser === "ve not got" || cleanUser === "'ve not got")) {
                isCorrect = true;
            } else if (cleanExpected === "has not got" && (cleanUser === "hasnt got" || cleanUser === "hasn't got" || cleanUser === "s not got" || cleanUser === "'s not got")) {
                isCorrect = true;
            } else if (cleanExpected === "are not" && (cleanUser === "arent" || cleanUser === "aren't" || cleanUser === "re not" || cleanUser === "'re not")) {
                isCorrect = true;
            } else if (cleanExpected === "is not" && (cleanUser === "isnt" || cleanUser === "isn't" || cleanUser === "s not" || cleanUser === "'s not")) {
                isCorrect = true;
            } else if (cleanExpected === "am not" && (cleanUser === "m not" || cleanUser === "'m not" || cleanUser === "im not" || cleanUser === "i'm not")) {
                isCorrect = true;
            } else if (cleanExpected === "have got" && (cleanUser === "ve got" || cleanUser === "'ve got")) {
                isCorrect = true;
            } else if (cleanExpected === "has got" && (cleanUser === "s got" || cleanUser === "'s got")) {
                isCorrect = true;
            } else if (cleanExpected === "am" && (cleanUser === "m" || cleanUser === "'m")) {
                isCorrect = true;
            } else if (cleanExpected === "are" && (cleanUser === "re" || cleanUser === "'re")) {
                isCorrect = true;
            } else if (cleanExpected === "is" && (cleanUser === "s" || cleanUser === "'s")) {
                isCorrect = true;
            }
        }
        
        input.disabled = true;
        
        if (isCorrect) {
            input.classList.add('correct');
            input.classList.remove('incorrect');
            feedback.textContent = "Super! Dobrze! 🌟";
            feedback.className = 'feedback success';
            correctCount++;
        } else {
            input.classList.add('incorrect');
            input.classList.remove('correct');
            let expectedText = q.mode === 'translate' ? q.english : q.expected;
            feedback.textContent = `Poprawna odpowiedź: "${expectedText}"`;
            feedback.className = 'feedback error';
            incorrectCount++;
        }
    });
    
    checkAllBtn.disabled = true;
    checkAllBtn.textContent = "Sprawdzone! 👏";
    
    const total = currentQuestions.length;
    const scorePct = Math.round((correctCount / total) * 100);
    
    // Aktualizacja najlepszego wyniku
    if (scorePct > bestScore) {
        bestScore = scorePct;
        localStorage.setItem('english_best_score', bestScore);
        bestScoreDisplay.textContent = bestScore;
    }
    
    // Wypełnienie okna podsumowania
    correctCountElem.textContent = correctCount;
    incorrectCountElem.textContent = incorrectCount;
    scorePercentageElem.textContent = `${scorePct}%`;
    
    if (correctCount === total) {
        modalTitle.textContent = "Mistrz Angielskiego! 🏆";
        modalSubtitle.textContent = "Genialnie! Rozwiązałeś bezbłędnie wszystkie zadania!";
        finalScoreText.textContent = `Gratulacje! 100% poprawnych odpowiedzi (${correctCount}/${total})!`;
    } else if (correctCount >= 7) {
        modalTitle.textContent = "Bardzo dobra robota! 🌟";
        modalSubtitle.textContent = "Świetny wynik! Prawie wszystkie odpowiedzi były poprawne.";
        finalScoreText.textContent = `Zdobyłeś ${correctCount} poprawnych odpowiedzi i tylko ${incorrectCount} ${incorrectCount === 1 ? 'błąd' : 'błędy'}.`;
    } else if (correctCount >= 5) {
        modalTitle.textContent = "Dobra robota! 👍";
        modalSubtitle.textContent = "Idzie Ci coraz lepiej! Zwróć uwagę na poprawione odpowiedzi.";
        finalScoreText.textContent = `Masz ${correctCount} dobrze i ${incorrectCount} do poprawy. Trening czyni mistrza!`;
    } else {
        modalTitle.textContent = "Głowa do góry! 💪";
        modalSubtitle.textContent = "Każdy błąd to krok do nauki. Spróbuj jeszcze raz!";
        finalScoreText.textContent = `Masz ${correctCount} dobrze i ${incorrectCount} źle. Przejrzyj błędy i poćwicz ponownie!`;
    }
    
    celebrationModal.classList.remove('hidden');
}
