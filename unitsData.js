/**
 * unitsData.js - Kompletna baza programu nauczania English Class 4 (Units 0 - 8)
 * Zawiera: Słownictwo, Gramatykę, Ćwiczenia z lekcji oraz Sprawdziany (Grupa A i Grupa B)
 */

const unitsData = [
    {
        id: "unit0",
        number: 0,
        title: "Get started!",
        subtitle: "Powitanie, alfabet, liczby 1-100, kolory, klasa szkolna",
        icon: "🚀",
        color: "#6366f1",
        summary: {
            vocab: "Liczby 1-100 (one, two, ten, twenty, fifty, a hundred), Kolory (red, blue, green, yellow, orange, purple, pink, brown, black, white), Przybory szkolne (pen, pencil, rubber, ruler, book, notebook, pencil case, schoolbag), Język klasy (Sit down, Open your book, Listen, Look).",
            grammar: "Przedimki nieokreślone: 'a' przed spółgłoską (a pen, a book), 'an' przed samogłoską (an apple, an orange). Liczba mnoga regularna: dodajemy końcówkę -s lub -es (book -> books, box -> boxes). Zaimki dzierżawcze: my (mój), your (twój)."
        },
        exercises: [
            { type: "translate", polish: "To jest niebieski długopis.", english: "It is a blue pen." },
            { type: "translate", polish: "To jest czerwone jabłko.", english: "It is a red apple." },
            { type: "translate", polish: "Otwórz swoją książkę.", english: "Open your book." },
            { type: "translate", polish: "Mam dziesięć ołówków.", english: "I have got ten pencils." },
            { type: "translate", polish: "Jak masz na imię?", english: "What is your name?" },
            { type: "gap", prefix: "This is ", expected: "an", suffix: " orange pencil case. (pomarańczowy - przed samogłoską)" },
            { type: "gap", prefix: "I have got two ", expected: "rubbers", suffix: " in my bag. (gumki do ścierania)" },
            { type: "gap", prefix: "This is ", expected: "a", suffix: " green ruler. (zielona linijka)" },
            { type: "gap", prefix: "Please sit ", expected: "down", suffix: " and listen. (usiądź)" },
            { type: "gap", prefix: "What is ", expected: "your", suffix: " favourite colour? (twój)" }
        ],
        tests: {
            groupA: {
                title: "Sprawdzian Unit 0 - Grupa A",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Wpisz brakujące słówko z przyborów szkolnych lub kolorów:",
                        points: 4,
                        questions: [
                            { prefix: "1. You write with a p", expected: "en", suffix: " or a pencil." },
                            { prefix: "2. The sky is b", expected: "lue", suffix: " on a sunny day." },
                            { prefix: "3. You use a r", expected: "ubber", suffix: " to erase a mistake." },
                            { prefix: "4. A banana is y", expected: "ellow", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'a' lub 'an':",
                        points: 4,
                        questions: [
                            { prefix: "1. This is ", expected: "a", suffix: " notebook." },
                            { prefix: "2. It is ", expected: "an", suffix: " apple." },
                            { prefix: "3. She has got ", expected: "a", suffix: " red schoolbag." },
                            { prefix: "4. That is ", expected: "an", suffix: " orange pencil." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Utwórz liczbę mnogą podanych wyrazów:",
                        points: 4,
                        questions: [
                            { prefix: "1. one book -> three ", expected: "books", suffix: "" },
                            { prefix: "2. one box -> two ", expected: "boxes", suffix: "" },
                            { prefix: "3. one pen -> five ", expected: "pens", suffix: "" },
                            { prefix: "4. one ruler -> four ", expected: "rulers", suffix: "" }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij polecenia nauczyciela:",
                        points: 4,
                        questions: [
                            { prefix: "1. Please sit ", expected: "down", suffix: "." },
                            { prefix: "2. Open your ", expected: "books", suffix: " to page 4." },
                            { prefix: "3. Stand ", expected: "up", suffix: ", please." },
                            { prefix: "4. L", expected: "isten", suffix: " to the teacher." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "To jest mój piórnik.", expected: "It is my pencil case." },
                            { polish: "Mój ulubiony kolor to zielony.", expected: "My favourite colour is green." }
                        ]
                    }
                ]
            },
            groupB: {
                title: "Sprawdzian Unit 0 - Grupa B",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Wpisz brakujące słówko z przyborów szkolnych lub kolorów:",
                        points: 4,
                        questions: [
                            { prefix: "1. You carry books in a s", expected: "choolbag", suffix: "." },
                            { prefix: "2. Grass is g", expected: "reen", suffix: "." },
                            { prefix: "3. You measure lines with a r", expected: "uler", suffix: "." },
                            { prefix: "4. An apple is often r", expected: "ed", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'a' lub 'an':",
                        points: 4,
                        questions: [
                            { prefix: "1. It is ", expected: "an", suffix: " eraser." },
                            { prefix: "2. This is ", expected: "a", suffix: " pencil." },
                            { prefix: "3. That is ", expected: "an", suffix: " orange." },
                            { prefix: "4. She has got ", expected: "a", suffix: " blue sharpener." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Utwórz liczbę mnogą podanych wyrazów:",
                        points: 4,
                        questions: [
                            { prefix: "1. one pencil -> ten ", expected: "pencils", suffix: "" },
                            { prefix: "2. one watch -> three ", expected: "watches", suffix: "" },
                            { prefix: "3. one rubber -> two ", expected: "rubbers", suffix: "" },
                            { prefix: "4. one desk -> six ", expected: "desks", suffix: "" }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij polecenia nauczyciela:",
                        points: 4,
                        questions: [
                            { prefix: "1. Close your ", expected: "books", suffix: "." },
                            { prefix: "2. Sit ", expected: "down", suffix: ", please." },
                            { prefix: "3. L", expected: "ook", suffix: " at the board." },
                            { prefix: "4. Stand ", expected: "up", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "To jest twoja książka.", expected: "It is your book." },
                            { polish: "Mam dwadzieścia kredek.", expected: "I have got twenty crayons." }
                        ]
                    }
                ]
            }
        }
    },

    {
        id: "unit1",
        number: 1,
        title: "Family and friends",
        subtitle: "Rodzina, kraje, narodowości, to be, dopełniacz 's, his/her",
        icon: "👨‍👩‍👧‍👦",
        color: "#ec4899",
        summary: {
            vocab: "Rodzina: mum, dad, mother, father, brother, sister, granny, grandad, aunt, uncle, cousin, parents. Kraje i narodowości: Poland/Polish, the UK/British, the USA/American, Spain/Spanish, France/French, Italy/Italian. Miejsca: at home, at school, in the garden, on holiday, at a party.",
            grammar: "Czasownik 'to be': twierdzenia (I am, you are, he/she/it is, we/they are) i przeczenia (I am not, isn't, aren't). Dopełniacz saksoński 's: Luke's cake (ciasto Luke'a), my dad's car. Zaimki dzierżawcze: his (jego), her (jej)."
        },
        exercises: [
            { type: "translate", polish: "Moja mama jest mądra.", english: "My mum is clever." },
            { type: "translate", polish: "Mój tata nie jest niski.", english: "My dad is not short." },
            { type: "translate", polish: "Ona jest z Polski.", english: "She is from Poland." },
            { type: "translate", polish: "To jest pies mojego brata.", english: "It is my brother's dog." },
            { type: "translate", polish: "Oni są w ogrodzie.", english: "They are in the garden." },
            { type: "gap", prefix: "She ", expected: "is not", suffix: " my sister. She is my cousin. (nie jest)" },
            { type: "gap", prefix: "This is Tom", expected: "'s", suffix: " schoolbag. (dopełniacz - torba Toma)" },
            { type: "gap", prefix: "My parents ", expected: "are", suffix: " on holiday. (są)" },
            { type: "gap", prefix: "He is from the UK. He is ", expected: "British", suffix: ". (narodowość)" },
            { type: "gap", prefix: "What is ", expected: "his", suffix: " name? (jego imię)" }
        ],
        tests: {
            groupA: {
                title: "Sprawdzian Unit 1 - Grupa A",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ słowa oznaczające członków rodziny:",
                        points: 4,
                        questions: [
                            { prefix: "1. Your mother's sister is your a", expected: "unt", suffix: "." },
                            { prefix: "2. Your father's father is your g", expected: "randad", suffix: "." },
                            { prefix: "3. Your aunt's son is your c", expected: "ousin", suffix: "." },
                            { prefix: "4. Mother and father are p", expected: "arents", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz odpowiednią formę czasownika 'to be' (am, is, are, isn't, aren't):",
                        points: 4,
                        questions: [
                            { prefix: "1. I ", expected: "am", suffix: " ten years old." },
                            { prefix: "2. My best friend ", expected: "is", suffix: " clever and funny." },
                            { prefix: "3. We ", expected: "are not", suffix: " at home today. (nie jesteśmy)" },
                            { prefix: "4. They ", expected: "are", suffix: " in the classroom." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz dopełniacz saksoński 's:",
                        points: 4,
                        questions: [
                            { prefix: "1. This is my sister", expected: "'s", suffix: " cat." },
                            { prefix: "2. It is Dad", expected: "'s", suffix: " birthday today." },
                            { prefix: "3. Peter", expected: "'s", suffix: " bike is blue." },
                            { prefix: "4. My grandad", expected: "'s", suffix: " dog is old." }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Dopasuj kraj do narodowości (wpisz narodowość):",
                        points: 4,
                        questions: [
                            { prefix: "1. Poland -> ", expected: "Polish", suffix: "" },
                            { prefix: "2. the UK -> ", expected: "British", suffix: "" },
                            { prefix: "3. the USA -> ", expected: "American", suffix: "" },
                            { prefix: "4. Spain -> ", expected: "Spanish", suffix: "" }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Mój dziadek jest bardzo miły.", expected: "My grandad is very kind." },
                            { polish: "Ona nie jest w szkole.", expected: "She is not at school." }
                        ]
                    }
                ]
            },
            groupB: {
                title: "Sprawdzian Unit 1 - Grupa B",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ słowa oznaczające członków rodziny:",
                        points: 4,
                        questions: [
                            { prefix: "1. Your father's brother is your u", expected: "ncle", suffix: "." },
                            { prefix: "2. Your mother's mother is your g", expected: "ranny", suffix: "." },
                            { prefix: "3. A male sibling is a b", expected: "rother", suffix: "." },
                            { prefix: "4. A female sibling is a s", expected: "ister", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz odpowiednią formę czasownika 'to be' (am, is, are, isn't, aren't):",
                        points: 4,
                        questions: [
                            { prefix: "1. My mum ", expected: "is", suffix: " tall." },
                            { prefix: "2. I ", expected: "am not", suffix: " tired. (nie jestem)" },
                            { prefix: "3. They ", expected: "are", suffix: " happy in the park." },
                            { prefix: "4. He ", expected: "is not", suffix: " short. (nie jest)" }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz dopełniacz saksoński 's:",
                        points: 4,
                        questions: [
                            { prefix: "1. It is Mark", expected: "'s", suffix: " pencil case." },
                            { prefix: "2. This is Mum", expected: "'s", suffix: " book." },
                            { prefix: "3. Anna", expected: "'s", suffix: " brother is tall." },
                            { prefix: "4. My cousin", expected: "'s", suffix: " house is big." }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Dopasuj kraj do narodowości (wpisz narodowość):",
                        points: 4,
                        questions: [
                            { prefix: "1. France -> ", expected: "French", suffix: "" },
                            { prefix: "2. Italy -> ", expected: "Italian", suffix: "" },
                            { prefix: "3. Poland -> ", expected: "Polish", suffix: "" },
                            { prefix: "4. the UK -> ", expected: "British", suffix: "" }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "To jest ciasto mojej babci.", expected: "It is my granny's cake." },
                            { polish: "My nie jesteśmy spóźnieni.", expected: "We are not late." }
                        ]
                    }
                ]
            }
        }
    },

    {
        id: "unit2",
        number: 2,
        title: "My things",
        subtitle: "Ubrania, this/that/these/those, to be pytania i krótkie odpowiedzi",
        icon: "🎒",
        color: "#f59e0b",
        summary: {
            vocab: "Ubrania: T-shirt, jeans, trousers, jacket, jumper, hoodie, skirt, dress, shoes, trainers, cap, hat, watch, skateboard. Przymiotniki: cool, new, old, big, small, heavy, long, short, too big (za duży), too small (za mały).",
            grammar: "Zaimki wskazujące: this (ten - blisko), that (tamten - daleko), these (te - blisko), those (tamte - daleko). Pytania z 'to be': Is this your cap? Are these your shoes? Krótkie odpowiedzi: Yes, it is. / No, it isn't. Yes, they are. / No, they aren't."
        },
        exercises: [
            { type: "translate", polish: "Czy to jest twoja czapka?", english: "Is this your cap?" },
            { type: "translate", polish: "Te buty są za małe.", english: "These shoes are too small." },
            { type: "translate", polish: "Tamte spodnie są nowe.", english: "Those trousers are new." },
            { type: "translate", polish: "Czy oni są gotowi?", english: "Are they ready?" },
            { type: "translate", polish: "Tak, są.", english: "Yes, they are." },
            { type: "gap", prefix: "", expected: "Is", suffix: " that your jacket over there? (Czy to jest)" },
            { type: "gap", prefix: "These trainers are ", expected: "too", suffix: " big for me. (za duże)" },
            { type: "gap", prefix: "Look at ", expected: "those", suffix: " birds in the tree. (tamte)" },
            { type: "gap", prefix: "Are you cold? - No, I ", expected: "am not", suffix: ". (krótka odpowiedź)" },
            { type: "gap", prefix: "Is he your teacher? - Yes, he ", expected: "is", suffix: ". (krótka odpowiedź)" }
        ],
        tests: {
            groupA: {
                title: "Sprawdzian Unit 2 - Grupa A",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ nazwy ubrań:",
                        points: 4,
                        questions: [
                            { prefix: "1. You wear t", expected: "rainers", suffix: " on your feet for sport." },
                            { prefix: "2. When it is cold, you put on a j", expected: "acket", suffix: "." },
                            { prefix: "3. Denim trousers are called j", expected: "eans", suffix: "." },
                            { prefix: "4. You wear a c", expected: "ap", suffix: " on your head." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'this' (blisko) lub 'that' (daleko):",
                        points: 4,
                        questions: [
                            { prefix: "1. (blisko w ręku) ", expected: "This", suffix: " is my new watch." },
                            { prefix: "2. (daleko przy oknie) ", expected: "That", suffix: " is Peter's hoodie." },
                            { prefix: "3. (blisko) Look at ", expected: "this", suffix: " cool T-shirt!" },
                            { prefix: "4. (daleko) Who is ", expected: "that", suffix: " boy over there?" }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz 'these' (blisko l. mnoga) lub 'those' (daleko l. mnoga):",
                        points: 4,
                        questions: [
                            { prefix: "1. (blisko) ", expected: "These", suffix: " shoes are very comfortable." },
                            { prefix: "2. (daleko) Look at ", expected: "those", suffix: " caps on the shelf." },
                            { prefix: "3. (blisko) Are ", expected: "these", suffix: " your sunglasses?" },
                            { prefix: "4. (daleko) ", expected: "Those", suffix: " jackets are too expensive." }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij pytania i krótkie odpowiedzi:",
                        points: 4,
                        questions: [
                            { prefix: "1. ", expected: "Are", suffix: " you ready? - Yes, I am." },
                            { prefix: "2. Is she your sister? - No, she ", expected: "isn't", suffix: "." },
                            { prefix: "3. ", expected: "Is", suffix: " this pencil case yours? - Yes, it is." },
                            { prefix: "4. Are they students? - Yes, they ", expected: "are", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Ta bluza z kapturem jest za duża.", expected: "This hoodie is too big." },
                            { polish: "Czy to jest twój zegarek?", expected: "Is this your watch?" }
                        ]
                    }
                ]
            },
            groupB: {
                title: "Sprawdzian Unit 2 - Grupa B",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ nazwy ubrań:",
                        points: 4,
                        questions: [
                            { prefix: "1. A warm knitted top is a j", expected: "umper", suffix: "." },
                            { prefix: "2. A top with a hood is a h", expected: "oodie", suffix: "." },
                            { prefix: "3. Girls often wear a d", expected: "ress", suffix: " or a skirt." },
                            { prefix: "4. You check the time on a w", expected: "atch", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'this' (blisko) lub 'that' (daleko):",
                        points: 4,
                        questions: [
                            { prefix: "1. (daleko) Is ", expected: "that", suffix: " your skateboard over there?" },
                            { prefix: "2. (blisko) ", expected: "This", suffix: " is my favourite cap." },
                            { prefix: "3. (daleko) Look at ", expected: "that", suffix: " yellow jacket." },
                            { prefix: "4. (blisko) I like ", expected: "this", suffix: " T-shirt." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz 'these' (blisko l. mnoga) lub 'those' (daleko l. mnoga):",
                        points: 4,
                        questions: [
                            { prefix: "1. (daleko) ", expected: "Those", suffix: " jeans are too small." },
                            { prefix: "2. (blisko) Are ", expected: "these", suffix: " your new trainers?" },
                            { prefix: "3. (daleko) Look at ", expected: "those", suffix: " shoes." },
                            { prefix: "4. (blisko) ", expected: "These", suffix: " books are heavy." }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij pytania i krótkie odpowiedzi:",
                        points: 4,
                        questions: [
                            { prefix: "1. Is he tall? - Yes, he ", expected: "is", suffix: "." },
                            { prefix: "2. ", expected: "Are", suffix: " these your keys? - No, they aren't." },
                            { prefix: "3. Is it cold? - No, it ", expected: "isn't", suffix: "." },
                            { prefix: "4. Are you tired? - Yes, I ", expected: "am", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Tamte trampki są super.", expected: "Those trainers are cool." },
                            { polish: "Czy te spodnie są za krótkie?", expected: "Are these trousers too short?" }
                        ]
                    }
                ]
            }
        }
    },

    {
        id: "unit3",
        number: 3,
        title: "In the house",
        subtitle: "Pokoje, meble, there is / there are, przyimki miejsca",
        icon: "🏡",
        color: "#10b981",
        summary: {
            vocab: "Pokoje: bedroom (sypialnia), living room (salon), kitchen (kuchnia), bathroom (łazienka), hall (przedpokój), garden (ogród). Meble: bed, desk, chair, wardrobe, sofa, table, armchair, bookcase, fridge, TV, carpet, lamp.",
            grammar: "There is (jest - l. poj.) / There are (są - l. mnoga). Przeczenia: There isn't a bed / There aren't any chairs. Pytania: Is there a sofa? Are there any books? Przyimki miejsca: in (w), on (na), under (pod), behind (za), in front of (przed), next to (obok)."
        },
        exercises: [
            { type: "translate", polish: "W pokoju jest duże łóżko.", english: "There is a big bed in the room." },
            { type: "translate", polish: "W salonie są dwa fotele.", english: "There are two armchairs in the living room." },
            { type: "translate", polish: "Kot jest pod stołem.", english: "The cat is under the table." },
            { type: "translate", polish: "W kuchni nie ma lodówki.", english: "There is not a fridge in the kitchen." },
            { type: "translate", polish: "Czy na biurku jest lampka?", english: "Is there a lamp on the desk?" },
            { type: "gap", prefix: "", expected: "There is", suffix: " a wardrobe in my bedroom. (Jest)" },
            { type: "gap", prefix: "", expected: "There are", suffix: " three chairs in the kitchen. (Są)" },
            { type: "gap", prefix: "The book is ", expected: "under", suffix: " the bed. (pod)" },
            { type: "gap", prefix: "The dog is sleeping ", expected: "next to", suffix: " the sofa. (obok)" },
            { type: "gap", prefix: "", expected: "Is there", suffix: " a TV in the living room? (Czy jest)" }
        ],
        tests: {
            groupA: {
                title: "Sprawdzian Unit 3 - Grupa A",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ nazwy pokoi i mebli:",
                        points: 4,
                        questions: [
                            { prefix: "1. You sleep in the b", expected: "edroom", suffix: "." },
                            { prefix: "2. You cook food in the k", expected: "itchen", suffix: "." },
                            { prefix: "3. You put clothes in a w", expected: "ardrobe", suffix: "." },
                            { prefix: "4. You keep milk cold in a f", expected: "ridge", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'There is' lub 'There are':",
                        points: 4,
                        questions: [
                            { prefix: "1. ", expected: "There is", suffix: " a comfortable sofa in the living room." },
                            { prefix: "2. ", expected: "There are", suffix: " four cushions on the bed." },
                            { prefix: "3. ", expected: "There are", suffix: " many books in the bookcase." },
                            { prefix: "4. ", expected: "There is", suffix: " a green carpet on the floor." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Uzupełnij przyimki miejsca (in, on, under, behind, next to):",
                        points: 4,
                        questions: [
                            { prefix: "1. (na) The lamp is ", expected: "on", suffix: " the desk." },
                            { prefix: "2. (pod) The slippers are ", expected: "under", suffix: " the bed." },
                            { prefix: "3. (obok) The armchair is ", expected: "next to", suffix: " the window." },
                            { prefix: "4. (za) The ball is ", expected: "behind", suffix: " the door." }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij pytania i przeczenia (Is there, Are there, There isn't, There aren't):",
                        points: 4,
                        questions: [
                            { prefix: "1. ", expected: "Is there", suffix: " a TV in your room? - Yes, there is." },
                            { prefix: "2. ", expected: "There aren't", suffix: " any posters on the wall. (nie ma l. mn.)" },
                            { prefix: "3. ", expected: "Are there", suffix: " any chairs in the hall? - No, there aren't." },
                            { prefix: "4. ", expected: "There isn't", suffix: " a desk in the kitchen. (nie ma l. poj.)" }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "W moim pokoju jest duże biurko.", expected: "There is a big desk in my room." },
                            { polish: "Kot jest przed drzwiami.", expected: "The cat is in front of the door." }
                        ]
                    }
                ]
            },
            groupB: {
                title: "Sprawdzian Unit 3 - Grupa B",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ nazwy pokoi i mebli:",
                        points: 4,
                        questions: [
                            { prefix: "1. You watch TV in the l", expected: "iving room", suffix: "." },
                            { prefix: "2. You wash your hands in the b", expected: "athroom", suffix: "." },
                            { prefix: "3. You sit on an a", expected: "rmchair", suffix: "." },
                            { prefix: "4. Books are in the b", expected: "ookcase", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'There is' lub 'There are':",
                        points: 4,
                        questions: [
                            { prefix: "1. ", expected: "There are", suffix: " two lamps on the tables." },
                            { prefix: "2. ", expected: "There is", suffix: " a big mirror in the hall." },
                            { prefix: "3. ", expected: "There is", suffix: " a computer on the desk." },
                            { prefix: "4. ", expected: "There are", suffix: " three chairs in the kitchen." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Uzupełnij przyimki miejsca (in, on, under, in front of, next to):",
                        points: 4,
                        questions: [
                            { prefix: "1. (w) The clothes are ", expected: "in", suffix: " the wardrobe." },
                            { prefix: "2. (przed) The table is ", expected: "in front of", suffix: " the sofa." },
                            { prefix: "3. (na) The cat is ", expected: "on", suffix: " the chair." },
                            { prefix: "4. (obok) The desk is ", expected: "next to", suffix: " the bed." }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij pytania i przeczenia (Is there, Are there, There isn't, There aren't):",
                        points: 4,
                        questions: [
                            { prefix: "1. ", expected: "Are there", suffix: " two beds in the bedroom?" },
                            { prefix: "2. ", expected: "There isn't", suffix: " a garden behind the house. (nie ma)" },
                            { prefix: "3. ", expected: "Is there", suffix: " a mirror in the bathroom? - Yes, there is." },
                            { prefix: "4. ", expected: "There aren't", suffix: " any carpets in the kitchen. (nie ma)" }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "W ogrodzie są piękne kwiaty.", expected: "There are beautiful flowers in the garden." },
                            { polish: "Książka jest pod krzesłem.", expected: "The book is under the chair." }
                        ]
                    }
                ]
            }
        }
    },

    {
        id: "unit4",
        number: 4,
        title: "About me",
        subtitle: "Twarz, ciało, have got, l. mnoga nieregularna (feet, teeth, children)",
        icon: "🧑‍🦱",
        color: "#3b82f6",
        summary: {
            vocab: "Twarz i włosy: eyes (oczy), ears (uszy), nose (nos), mouth (usta), teeth (zęby), hair (włosy): long (długie), short (krótkie), dark (ciemne), fair (jasne), curly (kręcone), straight (proste). Ciało: head, arm, hand, finger, leg, foot/feet.",
            grammar: "Czasownik have got: I/you/we/they have got (haven't got), he/she/it has got (hasn't got). Pytania: Have you got...? Has he got...? Liczba mnoga nieregularna: child -> children, tooth -> teeth, foot -> feet, man -> men, woman -> women. Zaimki: our (nasz), their (ich)."
        },
        exercises: [
            { type: "translate", polish: "On ma kręcone włosy.", english: "He has got curly hair." },
            { type: "translate", polish: "Ja nie mam niebieskich oczu.", english: "I have not got blue eyes." },
            { type: "translate", polish: "Czy ona ma królika?", english: "Has she got a rabbit?" },
            { type: "translate", polish: "Potwór ma cztery stopy.", english: "The monster has got four feet." },
            { type: "translate", polish: "Dzieci są w ogrodzie.", english: "The children are in the garden." },
            { type: "gap", prefix: "My sister ", expected: "has got", suffix: " long fair hair. (ma)" },
            { type: "gap", prefix: "We ", expected: "have not got", suffix: " a pet dog. (nie mamy)" },
            { type: "gap", prefix: "One tooth, but two ", expected: "teeth", suffix: ". (zęby - nieregularna)" },
            { type: "gap", prefix: "", expected: "Has", suffix: " he got green eyes? (Czy on ma)" },
            { type: "gap", prefix: "A monster has got two big ", expected: "feet", suffix: ". (stopy - l. mnoga)" }
        ],
        tests: {
            groupA: {
                title: "Sprawdzian Unit 4 - Grupa A (wzór Liveworksheets)",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Wpisz brakujące części ciała i twarzy:",
                        points: 4,
                        questions: [
                            { prefix: "1. You see with your e", expected: "yes", suffix: "." },
                            { prefix: "2. You hear with your e", expected: "ars", suffix: "." },
                            { prefix: "3. You chew food with your t", expected: "eeth", suffix: "." },
                            { prefix: "4. You smell with your n", expected: "ose", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'have got', 'has got', 'haven't got' lub 'hasn't got':",
                        points: 4,
                        questions: [
                            { prefix: "1. (+) She ", expected: "has got", suffix: " long curly hair." },
                            { prefix: "2. (-) I ", expected: "have not got", suffix: " a brother." },
                            { prefix: "3. (+) They ", expected: "have got", suffix: " big green eyes." },
                            { prefix: "4. (-) The monster ", expected: "has not got", suffix: " wings." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Utwórz nieregularną liczbę mnogą:",
                        points: 4,
                        questions: [
                            { prefix: "1. one child -> three ", expected: "children", suffix: "" },
                            { prefix: "2. one tooth -> thirty-two ", expected: "teeth", suffix: "" },
                            { prefix: "3. one foot -> two ", expected: "feet", suffix: "" },
                            { prefix: "4. one man -> four ", expected: "men", suffix: "" }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij pytania i krótkie odpowiedzi:",
                        points: 4,
                        questions: [
                            { prefix: "1. ", expected: "Have", suffix: " you got a pet? - Yes, I have." },
                            { prefix: "2. Has he got fair hair? - No, he ", expected: "hasn't", suffix: "." },
                            { prefix: "3. ", expected: "Has", suffix: " she got blue eyes? - Yes, she has." },
                            { prefix: "4. Have they got new books? - No, they ", expected: "haven't", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Moja siostra ma jasne proste włosy.", expected: "My sister has got fair straight hair." },
                            { polish: "Ten potwór ma troje oczu i ostre zęby.", expected: "This monster has got three eyes and sharp teeth." }
                        ]
                    }
                ]
            },
            groupB: {
                title: "Sprawdzian Unit 4 - Grupa B",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Wpisz brakujące części ciała i twarzy:",
                        points: 4,
                        questions: [
                            { prefix: "1. You smile with your m", expected: "outh", suffix: "." },
                            { prefix: "2. On your head you have h", expected: "air", suffix: "." },
                            { prefix: "3. You have five fingers on each h", expected: "and", suffix: "." },
                            { prefix: "4. You walk on your l", expected: "egs", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'have got', 'has got', 'haven't got' lub 'hasn't got':",
                        points: 4,
                        questions: [
                            { prefix: "1. (+) He ", expected: "has got", suffix: " dark short hair." },
                            { prefix: "2. (-) We ", expected: "have not got", suffix: " homework today." },
                            { prefix: "3. (+) A dog ", expected: "has got", suffix: " a fluffy tail." },
                            { prefix: "4. (-) She ", expected: "has not got", suffix: " a sister." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Utwórz nieregularną liczbę mnogą:",
                        points: 4,
                        questions: [
                            { prefix: "1. one woman -> two ", expected: "women", suffix: "" },
                            { prefix: "2. one foot -> two ", expected: "feet", suffix: "" },
                            { prefix: "3. one tooth -> twenty ", expected: "teeth", suffix: "" },
                            { prefix: "4. one child -> five ", expected: "children", suffix: "" }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij pytania i krótkie odpowiedzi:",
                        points: 4,
                        questions: [
                            { prefix: "1. Has she got a rabbit? - Yes, she ", expected: "has", suffix: "." },
                            { prefix: "2. ", expected: "Have", suffix: " they got green eyes? - No, they haven't." },
                            { prefix: "3. Has he got a dog? - No, he ", expected: "hasn't", suffix: "." },
                            { prefix: "4. ", expected: "Have", suffix: " you got long hair? - Yes, I have." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Mój brat ma krótkie ciemne włosy.", expected: "My brother has got short dark hair." },
                            { polish: "Czy wy macie nowego psa?", expected: "Have you got a new dog?" }
                        ]
                    }
                ]
            }
        }
    },

    {
        id: "unit5",
        number: 5,
        title: "Things I can do",
        subtitle: "Czynności, sporty, can/cannot, kolokacje z make, play, ride",
        icon: "⚡",
        color: "#8b5cf6",
        summary: {
            vocab: "Czynności: swim (pływać), dive (nurkować), run fast (szybko biegać), jump (skakać), fly (latać), sing (śpiewać), dance (tańczyć), draw (rysować), cook (gotować), ride a bike (jeździć na rowerze), ride a horse (jeździć konno), skateboard (jeździć na deskorolce), rollerblade (jeździć na rolkach), climb trees (wspinać się na drzewa).",
            grammar: "Czasownik can (móc/potrafić): I/you/he/she/we/they can play football. Przeczenie: cannot / can't. Pytania: Can you swim? Krótkie odpowiedzi: Yes, I can. / No, I can't. Kolokacje: make a cake, play the piano, ride a bike."
        },
        exercises: [
            { type: "translate", polish: "Ja potrafię grać na gitarze.", english: "I can play the guitar." },
            { type: "translate", polish: "Ona nie umie jeździć na deskorolce.", english: "She cannot skateboard." },
            { type: "translate", polish: "Czy potrafisz nurkować?", english: "Can you dive?" },
            { type: "translate", polish: "Mój pies potrafi szybko biegać.", english: "My dog can run fast." },
            { type: "translate", polish: "Tak, potrafię.", english: "Yes, I can." },
            { type: "gap", prefix: "A parrot ", expected: "can", suffix: " fly in the air. (potrafi)" },
            { type: "gap", prefix: "A dog ", expected: "cannot", suffix: " climb trees. (nie potrafi)" },
            { type: "gap", prefix: "My brother can ", expected: "play", suffix: " football very well. (grać w)" },
            { type: "gap", prefix: "", expected: "Can", suffix: " you ride a horse? (Czy potrafisz)" },
            { type: "gap", prefix: "Can they rollerblade? - No, they ", expected: "can't", suffix: ". (krótka odpowiedź)" }
        ],
        tests: {
            groupA: {
                title: "Sprawdzian Unit 5 - Grupa A",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ nazwy czynności i umiejętności:",
                        points: 4,
                        questions: [
                            { prefix: "1. Fish live in water and can s", expected: "wim", suffix: "." },
                            { prefix: "2. Birds have wings and can f", expected: "ly", suffix: "." },
                            { prefix: "3. In music class we s", expected: "ing", suffix: " songs." },
                            { prefix: "4. You use a helmet to r", expected: "ide", suffix: " a bike." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'can' (potrafi) lub 'cannot / can't' (nie potrafi):",
                        points: 4,
                        questions: [
                            { prefix: "1. (+) She is musical. She ", expected: "can", suffix: " play the piano." },
                            { prefix: "2. (-) I am scared of water. I ", expected: "cannot", suffix: " dive." },
                            { prefix: "3. (+) Frogs ", expected: "can", suffix: " jump high." },
                            { prefix: "4. (-) A snake has no legs. It ", expected: "cannot", suffix: " run." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz odpowiedni czasownik: play, ride lub make:",
                        points: 4,
                        questions: [
                            { prefix: "1. Can you ", expected: "play", suffix: " basketball?" },
                            { prefix: "2. I want to ", expected: "ride", suffix: " a horse." },
                            { prefix: "3. Let's ", expected: "make", suffix: " a delicious cake." },
                            { prefix: "4. My sister can ", expected: "play", suffix: " the guitar." }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij pytania i krótkie odpowiedzi:",
                        points: 4,
                        questions: [
                            { prefix: "1. ", expected: "Can", suffix: " you rollerblade? - Yes, I can." },
                            { prefix: "2. Can he jump high? - No, he ", expected: "can't", suffix: "." },
                            { prefix: "3. ", expected: "Can", suffix: " she speak English? - Yes, she can." },
                            { prefix: "4. Can they cook? - No, they ", expected: "can't", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Mój tata potrafi upiec ciasto.", expected: "My dad can make a cake." },
                            { polish: "Czy potrafisz jeździć na rolkach?", expected: "Can you rollerblade?" }
                        ]
                    }
                ]
            },
            groupB: {
                title: "Sprawdzian Unit 5 - Grupa B",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ nazwy czynności i umiejętności:",
                        points: 4,
                        questions: [
                            { prefix: "1. Going underwater is called to d", expected: "ive", suffix: "." },
                            { prefix: "2. Moving to music is to d", expected: "ance", suffix: "." },
                            { prefix: "3. Making food in the kitchen is to c", expected: "ook", suffix: "." },
                            { prefix: "4. Moving on a board with four wheels is to s", expected: "kateboard", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'can' (potrafi) lub 'cannot / can't' (nie potrafi):",
                        points: 4,
                        questions: [
                            { prefix: "1. (+) Cats are agile. They ", expected: "can", suffix: " climb trees." },
                            { prefix: "2. (-) Dogs ", expected: "cannot", suffix: " fly in the sky." },
                            { prefix: "3. (+) My brother is fast. He ", expected: "can", suffix: " run fast." },
                            { prefix: "4. (-) I have no bike. I ", expected: "cannot", suffix: " ride to school." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz odpowiedni czasownik: play, ride lub make:",
                        points: 4,
                        questions: [
                            { prefix: "1. Do you want to ", expected: "ride", suffix: " a bike?" },
                            { prefix: "2. He can ", expected: "play", suffix: " tennis." },
                            { prefix: "3. Can we ", expected: "make", suffix: " a pizza?" },
                            { prefix: "4. She likes to ", expected: "play", suffix: " the recorder." }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij pytania i krótkie odpowiedzi:",
                        points: 4,
                        questions: [
                            { prefix: "1. Can she sing? - Yes, she ", expected: "can", suffix: "." },
                            { prefix: "2. ", expected: "Can", suffix: " you swim? - No, I can't." },
                            { prefix: "3. Can a spider fly? - No, it ", expected: "can't", suffix: "." },
                            { prefix: "4. ", expected: "Can", suffix: " they dance? - Yes, they can." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Ja umiem pływać, ale nie potrafię nurkować.", expected: "I can swim but I cannot dive." },
                            { polish: "Czy ona potrafi grać na pianinie?", expected: "Can she play the piano?" }
                        ]
                    }
                ]
            }
        }
    },

    {
        id: "unit6",
        number: 6,
        title: "My day",
        subtitle: "Plan dnia, godziny, Present Simple (twierdzenia -s/-es), przysłówki",
        icon: "⏰",
        color: "#06b6d4",
        summary: {
            vocab: "Plan dnia: wake up (budzić się), get up (wstawać), have a shower (brać prysznic), brush my teeth (myć zęby), get dressed (ubierać się), have breakfast (jeść śniadanie), go to school (iść do szkoły), have lunch (jeść obiad), do homework (odrabiać lekcje), go to bed (iść spać). Dni tygodnia: Monday to Sunday. Podawanie godziny: at seven o'clock.",
            grammar: "Czas Present Simple (twierdzenia): dla I/you/we/they dajemy bezokolicznik (I get up, We go to school). Dla he/she/it dodajemy końcówkę -s lub -es (He gets up, She brushes her teeth, He watches TV). Przysłówki częstotliwości: always (zawsze), usually (zwykle), often (często), sometimes (czasami), never (nigdy)."
        },
        exercises: [
            { type: "translate", polish: "Ja wstaję o godzinie siódmej.", english: "I get up at seven o'clock." },
            { type: "translate", polish: "Mój brat myje zęby rano.", english: "My brother brushes his teeth in the morning." },
            { type: "translate", polish: "Ona zawsze odrabia lekcje.", english: "She always does homework." },
            { type: "translate", polish: "My jemy śniadanie w kuchni.", english: "We have breakfast in the kitchen." },
            { type: "translate", polish: "On nigdy nie chodzi spać późno.", english: "He never goes to bed late." },
            { type: "gap", prefix: "He ", expected: "wakes", suffix: " up at six o'clock. (budzi się - he/she/it)" },
            { type: "gap", prefix: "She ", expected: "goes", suffix: " to school by bus. (idzie - go -> goes)" },
            { type: "gap", prefix: "I ", expected: "always", suffix: " brush my teeth after breakfast. (zawsze)" },
            { type: "gap", prefix: "My dad ", expected: "watches", suffix: " TV in the evening. (ogląda - watch -> watches)" },
            { type: "gap", prefix: "We have lunch ", expected: "at", suffix: " one o'clock. (o godzinie)" }
        ],
        tests: {
            groupA: {
                title: "Sprawdzian Unit 6 - Grupa A",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ wyrażenia związane z planem dnia:",
                        points: 4,
                        questions: [
                            { prefix: "1. In the morning I w", expected: "ake", suffix: " up and get out of bed." },
                            { prefix: "2. Before school I eat b", expected: "reakfast", suffix: "." },
                            { prefix: "3. After school I do my h", expected: "omework", suffix: "." },
                            { prefix: "4. At night I go to b", expected: "ed", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz poprawną formę czasownika w czasie Present Simple:",
                        points: 4,
                        questions: [
                            { prefix: "1. I (play) ", expected: "play", suffix: " football on Saturdays." },
                            { prefix: "2. My sister (brush) ", expected: "brushes", suffix: " her hair every day." },
                            { prefix: "3. He (watch) ", expected: "watches", suffix: " cartoons after school." },
                            { prefix: "4. We (have) ", expected: "have", suffix: " lunch at two o'clock." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz podany przysłówek częstotliwości w odpowiednie miejsce:",
                        points: 4,
                        questions: [
                            { prefix: "1. (always) I ", expected: "always", suffix: " get up early on Mondays." },
                            { prefix: "2. (never) He ", expected: "never", suffix: " eats broccoli." },
                            { prefix: "3. (usually) They ", expected: "usually", suffix: " walk to school." },
                            { prefix: "4. (sometimes) We ", expected: "sometimes", suffix: " go to the cinema." }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij brakujące dni tygodnia:",
                        points: 4,
                        questions: [
                            { prefix: "1. Monday, Tuesday, W", expected: "ednesday", suffix: "" },
                            { prefix: "2. Thursday, F", expected: "riday", suffix: ", Saturday" },
                            { prefix: "3. The weekend is Saturday and S", expected: "unday", suffix: "." },
                            { prefix: "4. The day after Monday is T", expected: "uesday", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Ona wstaje o godzinie ósmej.", expected: "She gets up at eight o'clock." },
                            { polish: "Mój tata pije herbatę rano.", expected: "My dad drinks tea in the morning." }
                        ]
                    }
                ]
            },
            groupB: {
                title: "Sprawdzian Unit 6 - Grupa B",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ wyrażenia związane z planem dnia:",
                        points: 4,
                        questions: [
                            { prefix: "1. I have a sh", expected: "ower", suffix: " in the bathroom." },
                            { prefix: "2. I put on my clothes to get d", expected: "ressed", suffix: "." },
                            { prefix: "3. I brush my t", expected: "eeth", suffix: " twice a day." },
                            { prefix: "4. In the afternoon we have l", expected: "unch", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz poprawną formę czasownika w czasie Present Simple:",
                        points: 4,
                        questions: [
                            { prefix: "1. She (go) ", expected: "goes", suffix: " to bed at nine o'clock." },
                            { prefix: "2. They (live) ", expected: "live", suffix: " in a big house." },
                            { prefix: "3. Tom (do) ", expected: "does", suffix: " his homework in his room." },
                            { prefix: "4. We (read) ", expected: "read", suffix: " books in the evening." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz podany przysłówek częstotliwości w odpowiednie miejsce:",
                        points: 4,
                        questions: [
                            { prefix: "1. (often) She ", expected: "often", suffix: " rides her bike." },
                            { prefix: "2. (sometimes) I ", expected: "sometimes", suffix: " play computer games." },
                            { prefix: "3. (never) They ", expected: "never", suffix: " drink coffee." },
                            { prefix: "4. (always) He ", expected: "always", suffix: " does his homework." }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij brakujące dni tygodnia:",
                        points: 4,
                        questions: [
                            { prefix: "1. Friday, S", expected: "aturday", suffix: ", Sunday" },
                            { prefix: "2. Wednesday, T", expected: "hursday", suffix: ", Friday" },
                            { prefix: "3. The first day of the school week is M", expected: "onday", suffix: "." },
                            { prefix: "4. The middle of the week is W", expected: "ednesday", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Ja zwykle odrabiam lekcje po szkole.", expected: "I usually do homework after school." },
                            { polish: "On idzie do szkoły o siódmej.", expected: "He goes to school at seven." }
                        ]
                    }
                ]
            }
        }
    },

    {
        id: "unit7",
        number: 7,
        title: "Animals",
        subtitle: "Zwierzęta dzikie i domowe, Present Simple przeczenia i pytania (do/does)",
        icon: "🦁",
        color: "#ea580c",
        summary: {
            vocab: "Zwierzęta: lion (lew), tiger (tygrys), elephant (słoń), giraffe (żyrafa), monkey (małpa), zebra, crocodile (krokodyl), snake (wąż), penguin (pingwin), whale (wieloryb), bear (niedźwiedź). Cechy: fur (futro), tail (ogon), wings (skrzydła), claws (pazury), beak (dziób).",
            grammar: "Present Simple przeczenia: I/you/we/they don't live in Africa. Dla he/she/it: doesn't live (A bear doesn't eat meat in winter). Pytania i krótkie odpowiedzi: Do you like lions? - Yes, I do. / No, I don't. Does a giraffe eat leaves? - Yes, it does. / No, it doesn't."
        },
        exercises: [
            { type: "translate", polish: "Lwy nie jedzą owoców.", english: "Lions do not eat fruit." },
            { type: "translate", polish: "Czy żyrafa ma długą szyję?", english: "Has a giraffe got a long neck?" },
            { type: "translate", polish: "Czy słonie żyją w Afryce?", english: "Do elephants live in Africa?" },
            { type: "translate", polish: "Tak, żyją.", english: "Yes, they do." },
            { type: "translate", polish: "Niedźwiedź nie potrafi latać.", english: "A bear cannot fly." },
            { type: "gap", prefix: "Monkeys ", expected: "don't", suffix: " eat meat. (nie jedzą)" },
            { type: "gap", prefix: "A crocodile ", expected: "doesn't", suffix: " live in cold water. (nie żyje)" },
            { type: "gap", prefix: "", expected: "Do", suffix: " penguins swim fast? - Yes, they do. (Czy pingwiny)" },
            { type: "gap", prefix: "", expected: "Does", suffix: " a tiger hunt at night? - Yes, it does. (Czy tygrys)" },
            { type: "gap", prefix: "An elephant has got a long ", expected: "trunk", suffix: " and big ears. (trąbę)" }
        ],
        tests: {
            groupA: {
                title: "Sprawdzian Unit 7 - Grupa A",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ nazwy dzikich zwierząt:",
                        points: 4,
                        questions: [
                            { prefix: "1. The tallest animal with a long neck is a g", expected: "iraffe", suffix: "." },
                            { prefix: "2. The king of the jungle is a l", expected: "ion", suffix: "." },
                            { prefix: "3. A black and white striped animal is a z", expected: "ebra", suffix: "." },
                            { prefix: "4. A big mammal with a trunk is an e", expected: "lephant", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'don't' lub 'doesn't':",
                        points: 4,
                        questions: [
                            { prefix: "1. Elephants ", expected: "don't", suffix: " climb trees." },
                            { prefix: "2. A snake ", expected: "doesn't", suffix: " have legs." },
                            { prefix: "3. Penguins ", expected: "don't", suffix: " fly in the air." },
                            { prefix: "4. A bear ", expected: "doesn't", suffix: " live in the desert." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz 'Do' lub 'Does':",
                        points: 4,
                        questions: [
                            { prefix: "1. ", expected: "Do", suffix: " lions eat meat?" },
                            { prefix: "2. ", expected: "Does", suffix: " a monkey like bananas?" },
                            { prefix: "3. ", expected: "Do", suffix: " you like animals?" },
                            { prefix: "4. ", expected: "Does", suffix: " a crocodile live in rivers?" }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij krótkie odpowiedzi (do, don't, does, doesn't):",
                        points: 4,
                        questions: [
                            { prefix: "1. Do whales live in the ocean? - Yes, they ", expected: "do", suffix: "." },
                            { prefix: "2. Does a tiger eat leaves? - No, it ", expected: "doesn't", suffix: "." },
                            { prefix: "3. Do you have a pet snake? - No, I ", expected: "don't", suffix: "." },
                            { prefix: "4. Does a penguin swim? - Yes, it ", expected: "does", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Tygrysy potrafią bardzo szybko biegać.", expected: "Tigers can run very fast." },
                            { polish: "Czy małpy mieszkają na drzewach?", expected: "Do monkeys live in trees?" }
                        ]
                    }
                ]
            },
            groupB: {
                title: "Sprawdzian Unit 7 - Grupa B",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ nazwy dzikich zwierząt:",
                        points: 4,
                        questions: [
                            { prefix: "1. An intelligent sea mammal is a d", expected: "olphin", suffix: "." },
                            { prefix: "2. An animal with big sharp teeth living in water is a c", expected: "rocodile", suffix: "." },
                            { prefix: "3. A bird that swims in icy water is a p", expected: "enguin", suffix: "." },
                            { prefix: "4. An orange cat with black stripes is a t", expected: "iger", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Wpisz 'don't' lub 'doesn't':",
                        points: 4,
                        questions: [
                            { prefix: "1. A giraffe ", expected: "doesn't", suffix: " eat meat." },
                            { prefix: "2. Crocodiles ", expected: "don't", suffix: " live in the snow." },
                            { prefix: "3. A penguin ", expected: "doesn't", suffix: " fly." },
                            { prefix: "4. We ", expected: "don't", suffix: " keep a tiger at home." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz 'Do' lub 'Does':",
                        points: 4,
                        questions: [
                            { prefix: "1. ", expected: "Does", suffix: " a bear sleep in winter?" },
                            { prefix: "2. ", expected: "Do", suffix: " birds have feathers?" },
                            { prefix: "3. ", expected: "Does", suffix: " an elephant have big ears?" },
                            { prefix: "4. ", expected: "Do", suffix: " giraffes run fast?" }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Uzupełnij krótkie odpowiedzi (do, don't, does, doesn't):",
                        points: 4,
                        questions: [
                            { prefix: "1. Does a snake have legs? - No, it ", expected: "doesn't", suffix: "." },
                            { prefix: "2. Do monkeys eat fruit? - Yes, they ", expected: "do", suffix: "." },
                            { prefix: "3. Does your dog bark? - Yes, it ", expected: "does", suffix: "." },
                            { prefix: "4. Do bears climb trees? - Yes, they ", expected: "do", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Słonie jedzą liście i trawę.", expected: "Elephants eat leaves and grass." },
                            { polish: "Żyrafa nie potrafi latać.", expected: "A giraffe cannot fly." }
                        ]
                    }
                ]
            }
        }
    },

    {
        id: "unit8",
        number: 8,
        title: "I like that!",
        subtitle: "Sporty, pogoda, like/love/hate + -ing, zaimki dopełnieniowe",
        icon: "🏆",
        color: "#e11d48",
        summary: {
            vocab: "Sporty: football, basketball, volleyball, tennis, swimming, skiing, cycling, running, skateboarding. Pogoda i pory roku: spring (wiosna), summer (lato), autumn (jesień), winter (zima), sunny (słonecznie), rainy (deszczowo), windy (wietrznie), snowy (śnieżnie), hot (gorąco), cold (zimno).",
            grammar: "Czasowniki like, love, don't like, hate + czasownik z końcówką -ing (I love playing tennis, She hates running, We like swimming). Zaimki dopełnieniowe: me, you, him, her, it, us, them (e.g. Listen to me! I like him). Pytajniki: Who (kto), What (co), Where (gdzie), When (kiedy), Why (dlaczego), How (jak)."
        },
        exercises: [
            { type: "translate", polish: "Ja uwielbiam pływać w lecie.", english: "I love swimming in summer." },
            { type: "translate", polish: "Ona nienawidzi biegać w deszczu.", english: "She hates running in the rain." },
            { type: "translate", polish: "Czy lubisz grać w tenisa?", english: "Do you like playing tennis?" },
            { type: "translate", polish: "Dziś jest słonecznie i ciepło.", english: "Today is sunny and warm." },
            { type: "translate", polish: "Pomóż mi, proszę.", english: "Help me, please." },
            { type: "gap", prefix: "I like ", expected: "reading", suffix: " books in the evening. (czytać - read + ing)" },
            { type: "gap", prefix: "He hates ", expected: "getting", suffix: " up early. (wstawać - get + ing)" },
            { type: "gap", prefix: "Where is Tom? I want to talk to ", expected: "him", suffix: ". (z nim)" },
            { type: "gap", prefix: "", expected: "Where", suffix: " do you live? - In Warsaw. (Gdzie)" },
            { type: "gap", prefix: "In winter it is usually cold and ", expected: "snowy", suffix: ". (śnieżnie)" }
        ],
        tests: {
            groupA: {
                title: "Sprawdzian Unit 8 - Grupa A",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ nazwy sportów i pór roku:",
                        points: 4,
                        questions: [
                            { prefix: "1. Moving in water is s", expected: "wimming", suffix: "." },
                            { prefix: "2. Riding a bicycle is c", expected: "ycling", suffix: "." },
                            { prefix: "3. The hot season with holidays is s", expected: "ummer", suffix: "." },
                            { prefix: "4. The season when leaves fall is a", expected: "utumn", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Dopisz końcówkę -ing do czasowników w nawiasach (love / like / hate + -ing):",
                        points: 4,
                        questions: [
                            { prefix: "1. I love (swim) ", expected: "swimming", suffix: " in the lake." },
                            { prefix: "2. She hates (run) ", expected: "running", suffix: " in the cold." },
                            { prefix: "3. We like (play) ", expected: "playing", suffix: " computer games." },
                            { prefix: "4. He doesn't like (dance) ", expected: "dancing", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz odpowiedni zaimek w funkcji dopełnienia (me, him, her, us, them):",
                        points: 4,
                        questions: [
                            { prefix: "1. Anna is my friend. I like ", expected: "her", suffix: " very much." },
                            { prefix: "2. Look at Tom! Look at ", expected: "him", suffix: "!" },
                            { prefix: "3. We are here. Can you see ", expected: "us", suffix: "?" },
                            { prefix: "4. I don't understand. Can you help ", expected: "me", suffix: "?" }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Wpisz odpowiednie słowo pytające (Who, What, Where, When):",
                        points: 4,
                        questions: [
                            { prefix: "1. ", expected: "Where", suffix: " is your dog? - In the garden." },
                            { prefix: "2. ", expected: "When", suffix: " is your birthday? - In May." },
                            { prefix: "3. ", expected: "Who", suffix: " is that girl? - She is my cousin." },
                            { prefix: "4. ", expected: "What", suffix: " is your favourite sport? - Tennis." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Uwielbiam jeździć na rowerze wiosną.", expected: "I love cycling in spring." },
                            { polish: "Jaka jest dzisiaj pogoda?", expected: "What is the weather like today?" }
                        ]
                    }
                ]
            },
            groupB: {
                title: "Sprawdzian Unit 8 - Grupa B",
                maxScore: 20,
                tasks: [
                    {
                        taskNumber: 1,
                        instruction: "Dokończ nazwy sportów i pór roku:",
                        points: 4,
                        questions: [
                            { prefix: "1. Kicking a ball into a goal is f", expected: "ootball", suffix: "." },
                            { prefix: "2. Throwing a ball into an orange basket is b", expected: "asketball", suffix: "." },
                            { prefix: "3. The cold season with snow is w", expected: "inter", suffix: "." },
                            { prefix: "4. The season when flowers bloom is s", expected: "pring", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 2,
                        instruction: "Dopisz końcówkę -ing do czasowników w nawiasach (love / like / hate + -ing):",
                        points: 4,
                        questions: [
                            { prefix: "1. They like (read) ", expected: "reading", suffix: " comic books." },
                            { prefix: "2. My brother hates (sing) ", expected: "singing", suffix: "." },
                            { prefix: "3. She loves (cook) ", expected: "cooking", suffix: " dinner." },
                            { prefix: "4. We don't like (get) ", expected: "getting", suffix: " up early." }
                        ]
                    },
                    {
                        taskNumber: 3,
                        instruction: "Wpisz odpowiedni zaimek w funkcji dopełnienia (me, him, her, it, them):",
                        points: 4,
                        questions: [
                            { prefix: "1. These are my new shoes. Do you like ", expected: "them", suffix: "?" },
                            { prefix: "2. That is a cute puppy. Look at ", expected: "it", suffix: "!" },
                            { prefix: "3. Where is Peter? I want to see ", expected: "him", suffix: "." },
                            { prefix: "4. This cake is for you and ", expected: "me", suffix: "." }
                        ]
                    },
                    {
                        taskNumber: 4,
                        instruction: "Wpisz odpowiednie słowo pytające (Who, What, Where, Why):",
                        points: 4,
                        questions: [
                            { prefix: "1. ", expected: "What", suffix: " is in your bag? - A book and a pen." },
                            { prefix: "2. ", expected: "Where", suffix: " do you play football? - In the park." },
                            { prefix: "3. ", expected: "Who", suffix: " is your best friend? - Max." },
                            { prefix: "4. ", expected: "Why", suffix: " are you late? - Because of the bus." }
                        ]
                    },
                    {
                        taskNumber: 5,
                        instruction: "Przetłumacz zdania na język angielski:",
                        points: 4,
                        questions: [
                            { polish: "Nienawidzę biegać kiedy jest zimno.", expected: "I hate running when it is cold." },
                            { polish: "Dziś jest wietrznie i deszczowo.", expected: "Today is windy and rainy." }
                        ]
                    }
                ]
            }
        }
    }
];
