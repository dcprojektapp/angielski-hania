const db = {
    tobe: [
        // ==============================
        // 📝 Tłumaczenia (to be) - 50 zadań
        // ==============================
        // Twierdzenia (20)
        { polish: "Ja jestem uczniem.", english: "I am a student.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój tata jest wysoki.", english: "My dad is tall.", type: "twierdzenie", mode: "translate" },
        { polish: "Moja mama jest mądra.", english: "My mum is clever.", type: "twierdzenie", mode: "translate" },
        { polish: "Ona jest moją ciocią.", english: "She is my aunt.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój piórnik jest mały.", english: "My pencil case is small.", type: "twierdzenie", mode: "translate" },
        { polish: "My jesteśmy w klasie.", english: "We are in the classroom.", type: "twierdzenie", mode: "translate" },
        { polish: "Oni są szczęśliwi.", english: "They are happy.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój brat jest zabawny.", english: "My brother is funny.", type: "twierdzenie", mode: "translate" },
        { polish: "To jest mój nowy długopis.", english: "It is my new pen.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój pies jest przyjazny.", english: "My dog is friendly.", type: "twierdzenie", mode: "translate" },
        { polish: "Nasz nauczyciel jest miły.", english: "Our teacher is nice.", type: "twierdzenie", mode: "translate" },
        { polish: "Ty jesteś moją najlepszą przyjaciółką.", english: "You are my best friend.", type: "twierdzenie", mode: "translate" },
        { polish: "Ta książka jest ciekawa.", english: "This book is interesting.", type: "twierdzenie", mode: "translate" },
        { polish: "Moja siostra jest cicha.", english: "My sister is quiet.", type: "twierdzenie", mode: "translate" },
        { polish: "Moja babcia jest stara.", english: "My granny is old.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój kot jest czarny.", english: "My cat is black.", type: "twierdzenie", mode: "translate" },
        { polish: "Dziś jest poniedziałek.", english: "Today is Monday.", type: "twierdzenie", mode: "translate" },
        { polish: "My jesteśmy w domu.", english: "We are at home.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój dziadek jest miły.", english: "My grandad is kind.", type: "twierdzenie", mode: "translate" },
        { polish: "Oni są w ogrodzie.", english: "They are in the garden.", type: "twierdzenie", mode: "translate" },

        // Przeczenia (15)
        { polish: "Ja nie jestem zmęczony.", english: "I am not tired.", type: "przeczenie", mode: "translate" },
        { polish: "Mój dziadek nie jest niski.", english: "My grandad is not short.", type: "przeczenie", mode: "translate" },
        { polish: "Ona nie jest spóźniona.", english: "She is not late.", type: "przeczenie", mode: "translate" },
        { polish: "Mój plecak nie jest duży.", english: "My bag is not big.", type: "przeczenie", mode: "translate" },
        { polish: "Oni nie są w szkole.", english: "They are not at school.", type: "przeczenie", mode: "translate" },
        { polish: "My nie jesteśmy smutni.", english: "We are not sad.", type: "przeczenie", mode: "translate" },
        { polish: "Ty nie jesteś głodny.", english: "You are not hungry.", type: "przeczenie", mode: "translate" },
        { polish: "Ten ołówek nie jest czerwony.", english: "This pencil is not red.", type: "przeczenie", mode: "translate" },
        { polish: "To nie jest mój chomik.", english: "It is not my hamster.", type: "przeczenie", mode: "translate" },
        { polish: "Moja siostra nie jest głośna.", english: "My sister is not noisy.", type: "przeczenie", mode: "translate" },
        { polish: "On nie jest moim bratem.", english: "He is not my brother.", type: "przeczenie", mode: "translate" },
        { polish: "My nie jesteśmy źli.", english: "We are not angry.", type: "przeczenie", mode: "translate" },
        { polish: "Ta gumka nie jest zielona.", english: "This rubber is not green.", type: "przeczenie", mode: "translate" },
        { polish: "Oni nie są zmęczeni.", english: "They are not tired.", type: "przeczenie", mode: "translate" },
        { polish: "Ja nie jestem chory.", english: "I am not sick.", type: "przeczenie", mode: "translate" },

        // Pytania (15)
        { polish: "Czy ty jesteś szczęśliwy?", english: "Are you happy?", type: "pytanie", mode: "translate" },
        { polish: "Czy ona jest twoją babcią?", english: "Is she your granny?", type: "pytanie", mode: "translate" },
        { polish: "Czy twój piórnik jest niebieski?", english: "Is your pencil case blue?", type: "pytanie", mode: "translate" },
        { polish: "Czy oni są w domu?", english: "Are they at home?", type: "pytanie", mode: "translate" },
        { polish: "Czy jesteś gotowy?", english: "Are you ready?", type: "pytanie", mode: "translate" },
        { polish: "Czy twój pies jest stary?", english: "Is your dog old?", type: "pytanie", mode: "translate" },
        { polish: "Czy on jest twoim wujkiem?", english: "Is he your uncle?", type: "pytanie", mode: "translate" },
        { polish: "Czy to jest twoja linijka?", english: "Is this your ruler?", type: "pytanie", mode: "translate" },
        { polish: "Czy oni są w klasie?", english: "Are they in the classroom?", type: "pytanie", mode: "translate" },
        { polish: "Czy twoja mama jest w pracy?", english: "Is your mum at work?", type: "pytanie", mode: "translate" },
        { polish: "Czy ten kot jest mały?", english: "Is this cat small?", type: "pytanie", mode: "translate" },
        { polish: "Czy wy jesteście spóźnieni?", english: "Are you late?", type: "pytanie", mode: "translate" },
        { polish: "Czy twój plecak jest ciężki?", english: "Is your backpack heavy?", type: "pytanie", mode: "translate" },
        { polish: "Czy ten królik jest biały?", english: "Is this rabbit white?", type: "pytanie", mode: "translate" },
        { polish: "Czy on jest twoim bratem?", english: "Is he your brother?", type: "pytanie", mode: "translate" },

        // ==============================
        // 🧩 Luki (to be) - 50 zadań
        // ==============================
        // Twierdzenia (20)
        { prefix: "I ", expected: "am", suffix: " a student. (jestem)", mode: "gap", type: "twierdzenie" },
        { prefix: "She ", expected: "is", suffix: " my clever aunt. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "My dad ", expected: "is", suffix: " tall and funny. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "They ", expected: "are", suffix: " in the classroom. (są)", mode: "gap", type: "twierdzenie" },
        { prefix: "We ", expected: "are", suffix: " happy today. (jesteśmy)", mode: "gap", type: "twierdzenie" },
        { prefix: "The pencil case ", expected: "is", suffix: " small. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "You ", expected: "are", suffix: " my best friend. (jesteś)", mode: "gap", type: "twierdzenie" },
        { prefix: "My sister ", expected: "is", suffix: " very quiet. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "It ", expected: "is", suffix: " a black cat. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "The teacher ", expected: "is", suffix: " in the library. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "My dog ", expected: "is", suffix: " friendly. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "These books ", expected: "are", suffix: " heavy. (są)", mode: "gap", type: "twierdzenie" },
        { prefix: "He ", expected: "is", suffix: " ten years old. (jest/ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "My grandad ", expected: "is", suffix: " very old. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "The crayons ", expected: "are", suffix: " on the desk. (są)", mode: "gap", type: "twierdzenie" },
        { prefix: "I ", expected: "am", suffix: " ready for school. (jestem)", mode: "gap", type: "twierdzenie" },
        { prefix: "It ", expected: "is", suffix: " a sunny day. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "We ", expected: "are", suffix: " in the garden. (jesteśmy)", mode: "gap", type: "twierdzenie" },
        { prefix: "She ", expected: "is", suffix: " my cousin Anna. (jest)", mode: "gap", type: "twierdzenie" },
        { prefix: "They ", expected: "are", suffix: " good students. (są)", mode: "gap", type: "twierdzenie" },

        // Przeczenia (15)
        { prefix: "I ", expected: "am not", suffix: " tired today. (nie jestem)", mode: "gap", type: "przeczenie" },
        { prefix: "She ", expected: "is not", suffix: " late for school. (nie jest)", mode: "gap", type: "przeczenie" },
        { prefix: "My grandad ", expected: "is not", suffix: " short. (nie jest)", mode: "gap", type: "przeczenie" },
        { prefix: "We ", expected: "are not", suffix: " sad. (nie jesteśmy)", mode: "gap", type: "przeczenie" },
        { prefix: "They ", expected: "are not", suffix: " at home. (nie są)", mode: "gap", type: "przeczenie" },
        { prefix: "The schoolbag ", expected: "is not", suffix: " big. (nie jest)", mode: "gap", type: "przeczenie" },
        { prefix: "You ", expected: "are not", suffix: " hungry. (nie jesteś)", mode: "gap", type: "przeczenie" },
        { prefix: "He ", expected: "is not", suffix: " my brother. (nie jest)", mode: "gap", type: "przeczenie" },
        { prefix: "The rubber ", expected: "is not", suffix: " blue. (nie jest)", mode: "gap", type: "przeczenie" },
        { prefix: "It ", expected: "is not", suffix: " my pencil. (nie jest)", mode: "gap", type: "przeczenie" },
        { prefix: "My cousins ", expected: "are not", suffix: " noisy. (nie są)", mode: "gap", type: "przeczenie" },
        { prefix: "The dog ", expected: "is not", suffix: " dangerous. (nie jest)", mode: "gap", type: "przeczenie" },
        { prefix: "I ", expected: "am not", suffix: " angry with you. (nie jestem)", mode: "gap", type: "przeczenie" },
        { prefix: "We ", expected: "are not", suffix: " in the gym. (nie jesteśmy)", mode: "gap", type: "przeczenie" },
        { prefix: "She ", expected: "is not", suffix: " scared. (nie jest)", mode: "gap", type: "przeczenie" },

        // Pytania (15)
        { prefix: "", expected: "Are", suffix: " you happy? (Czy jesteś)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Is", suffix: " he your uncle? (Czy on jest)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Is", suffix: " she your granny? (Czy ona jest)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Are", suffix: " your parents here? (Czy są)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Is", suffix: " your dog friendly? (Czy twój pies jest)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Are", suffix: " they ready? (Czy oni są)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Is", suffix: " your ruler long? (Czy twoja linijka jest)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Are", suffix: " you ten years old? (Czy masz/jesteś)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Is", suffix: " this your sharpener? (Czy to jest)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Is", suffix: " the cat under the table? (Czy kot jest)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Are", suffix: " we on time? (Czy jesteśmy)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Is", suffix: " your brother tall? (Czy twój brat jest)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Are", suffix: " the pencils in the box? (Czy ołówki są)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Is", suffix: " she your English teacher? (Czy ona jest)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Are", suffix: " they in the playground? (Czy oni są)", mode: "gap", type: "pytanie" }
    ],
    tohave: [
        // ==============================
        // 📝 Tłumaczenia (have got) - 50 zadań
        // ==============================
        // Twierdzenia (20)
        { polish: "Ja mam papugę.", english: "I have got a parrot.", type: "twierdzenie", mode: "translate" },
        { polish: "Ty masz chomika.", english: "You have got a hamster.", type: "twierdzenie", mode: "translate" },
        { polish: "On ma węża.", english: "He has got a snake.", type: "twierdzenie", mode: "translate" },
        { polish: "Ona ma królika.", english: "She has got a rabbit.", type: "twierdzenie", mode: "translate" },
        { polish: "Pająk ma osiem nóg.", english: "A spider has got eight legs.", type: "twierdzenie", mode: "translate" },
        { polish: "My mamy nowego psa.", english: "We have got a new dog.", type: "twierdzenie", mode: "translate" },
        { polish: "Oni mają duży piórnik.", english: "They have got a big pencil case.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój brat ma żółwia.", english: "My brother has got a tortoise.", type: "twierdzenie", mode: "translate" },
        { polish: "Ja mam zielone oczy.", english: "I have got green eyes.", type: "twierdzenie", mode: "translate" },
        { polish: "Moja siostra ma długie włosy.", english: "My sister has got long hair.", type: "twierdzenie", mode: "translate" },
        { polish: "Kot ma małe uszy.", english: "The cat has got small ears.", type: "twierdzenie", mode: "translate" },
        { polish: "Ty masz nową linijkę.", english: "You have got a new ruler.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój pies ma puszysty ogon.", english: "My dog has got a fluffy tail.", type: "twierdzenie", mode: "translate" },
        { polish: "My mamy trzy koty.", english: "We have got three cats.", type: "twierdzenie", mode: "translate" },
        { polish: "Oni mają małego szczeniaka.", english: "They have got a small puppy.", type: "twierdzenie", mode: "translate" },
        { polish: "Ja mam nożyczki i klej.", english: "I have got scissors and glue.", type: "twierdzenie", mode: "translate" },
        { polish: "Ptak ma kolorowe skrzydła.", english: "The bird has got colourful wings.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój tata ma niebieskie auto.", english: "My dad has got a blue car.", type: "twierdzenie", mode: "translate" },
        { polish: "Ona ma świnkę morską.", english: "She has got a guinea pig.", type: "twierdzenie", mode: "translate" },
        { polish: "My mamy dużo kredek.", english: "We have got a lot of crayons.", type: "twierdzenie", mode: "translate" },

        // Przeczenia (15)
        { polish: "Ja nie mam brata.", english: "I have not got a brother.", type: "przeczenie", mode: "translate" },
        { polish: "Ona nie ma węża.", english: "She has not got a snake.", type: "przeczenie", mode: "translate" },
        { polish: "On nie ma kota.", english: "He has not got a cat.", type: "przeczenie", mode: "translate" },
        { polish: "Ten potwór nie ma trzech oczu.", english: "This monster has not got three eyes.", type: "przeczenie", mode: "translate" },
        { polish: "My nie mamy pracy domowej.", english: "We have not got homework.", type: "przeczenie", mode: "translate" },
        { polish: "Oni nie mają rybki.", english: "They have not got a fish.", type: "przeczenie", mode: "translate" },
        { polish: "Ty nie masz ołówka.", english: "You have not got a pencil.", type: "przeczenie", mode: "translate" },
        { polish: "Mój pies nie ma długiego ogona.", english: "My dog has not got a long tail.", type: "przeczenie", mode: "translate" },
        { polish: "Ja nie mam żółwia.", english: "I have not got a tortoise.", type: "przeczenie", mode: "translate" },
        { polish: "Ona nie ma nowego plecaka.", english: "She has not got a new schoolbag.", type: "przeczenie", mode: "translate" },
        { polish: "My nie mamy lekcji w sobotę.", english: "We have not got lessons on Saturday.", type: "przeczenie", mode: "translate" },
        { polish: "On nie ma siostry.", english: "He has not got a sister.", type: "przeczenie", mode: "translate" },
        { polish: "Pająk nie ma skrzydeł.", english: "A spider has not got wings.", type: "przeczenie", mode: "translate" },
        { polish: "Oni nie mają zwierzątka.", english: "They have not got a pet.", type: "przeczenie", mode: "translate" },
        { polish: "Ja nie mam temperówki.", english: "I have not got a sharpener.", type: "przeczenie", mode: "translate" },

        // Pytania (15)
        { polish: "Czy ty masz chomika?", english: "Have you got a hamster?", type: "pytanie", mode: "translate" },
        { polish: "Czy on ma małe uszy?", english: "Has he got small ears?", type: "pytanie", mode: "translate" },
        { polish: "Czy ona ma królika?", english: "Has she got a rabbit?", type: "pytanie", mode: "translate" },
        { polish: "Czy oni mają papugę?", english: "Have they got a parrot?", type: "pytanie", mode: "translate" },
        { polish: "Czy masz nowy plecak?", english: "Have you got a new bag?", type: "pytanie", mode: "translate" },
        { polish: "Czy twój pies ma długi ogon?", english: "Has your dog got a long tail?", type: "pytanie", mode: "translate" },
        { polish: "Czy wy macie psa?", english: "Have you got a dog?", type: "pytanie", mode: "translate" },
        { polish: "Czy on ma brata?", english: "Has he got a brother?", type: "pytanie", mode: "translate" },
        { polish: "Czy ona ma niebieskie oczy?", english: "Has she got blue eyes?", type: "pytanie", mode: "translate" },
        { polish: "Czy oni mają nową książkę?", english: "Have they got a new book?", type: "pytanie", mode: "translate" },
        { polish: "Czy masz gumkę do ścierania?", english: "Have you got a rubber?", type: "pytanie", mode: "translate" },
        { polish: "Czy twój kot ma zielone oczy?", english: "Has your cat got green eyes?", type: "pytanie", mode: "translate" },
        { polish: "Czy masz nożyczki?", english: "Have you got scissors?", type: "pytanie", mode: "translate" },
        { polish: "Czy potwór ma cztery ręce?", english: "Has the monster got four arms?", type: "pytanie", mode: "translate" },
        { polish: "Czy oni mają świnkę morską?", english: "Have they got a guinea pig?", type: "pytanie", mode: "translate" },

        // ==============================
        // 🧩 Luki (have got) - 50 zadań
        // ==============================
        // Twierdzenia (20)
        { prefix: "I ", expected: "have got", suffix: " a parrot. (mam)", mode: "gap", type: "twierdzenie" },
        { prefix: "My sister ", expected: "has got", suffix: " a rabbit. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "You ", expected: "have got", suffix: " a hamster. (masz)", mode: "gap", type: "twierdzenie" },
        { prefix: "He ", expected: "has got", suffix: " a snake. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "A spider ", expected: "has got", suffix: " eight legs. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "We ", expected: "have got", suffix: " new books. (mamy)", mode: "gap", type: "twierdzenie" },
        { prefix: "They ", expected: "have got", suffix: " a big dog. (mają)", mode: "gap", type: "twierdzenie" },
        { prefix: "My brother ", expected: "has got", suffix: " a tortoise. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "I ", expected: "have got", suffix: " blue eyes. (mam)", mode: "gap", type: "twierdzenie" },
        { prefix: "The dog ", expected: "has got", suffix: " a long tail. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "She ", expected: "has got", suffix: " a pink pencil case. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "You ", expected: "have got", suffix: " a sharpener. (masz)", mode: "gap", type: "twierdzenie" },
        { prefix: "We ", expected: "have got", suffix: " crayons. (mamy)", mode: "gap", type: "twierdzenie" },
        { prefix: "A bird ", expected: "has got", suffix: " wings. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "He ", expected: "has got", suffix: " a new schoolbag. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "They ", expected: "have got", suffix: " three kittens. (mają)", mode: "gap", type: "twierdzenie" },
        { prefix: "My dad ", expected: "has got", suffix: " dark hair. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "The rabbit ", expected: "has got", suffix: " long ears. (ma)", mode: "gap", type: "twierdzenie" },
        { prefix: "I ", expected: "have got", suffix: " a ruler. (mam)", mode: "gap", type: "twierdzenie" },
        { prefix: "We ", expected: "have got", suffix: " a friendly pet. (mamy)", mode: "gap", type: "twierdzenie" },

        // Przeczenia (15)
        { prefix: "I ", expected: "have not got", suffix: " a brother. (nie mam)", mode: "gap", type: "przeczenie" },
        { prefix: "He ", expected: "has not got", suffix: " a spider. (nie ma)", mode: "gap", type: "przeczenie" },
        { prefix: "She ", expected: "has not got", suffix: " a cat. (nie ma)", mode: "gap", type: "przeczenie" },
        { prefix: "We ", expected: "have not got", suffix: " homework today. (nie mamy)", mode: "gap", type: "przeczenie" },
        { prefix: "They ", expected: "have not got", suffix: " a tortoise. (nie mają)", mode: "gap", type: "przeczenie" },
        { prefix: "The monster ", expected: "has not got", suffix: " wings. (nie ma)", mode: "gap", type: "przeczenie" },
        { prefix: "You ", expected: "have not got", suffix: " a pencil. (nie masz)", mode: "gap", type: "przeczenie" },
        { prefix: "My dog ", expected: "has not got", suffix: " short legs. (nie ma)", mode: "gap", type: "przeczenie" },
        { prefix: "She ", expected: "has not got", suffix: " a green ruler. (nie ma)", mode: "gap", type: "przeczenie" },
        { prefix: "I ", expected: "have not got", suffix: " a snake. (nie mam)", mode: "gap", type: "przeczenie" },
        { prefix: "He ", expected: "has not got", suffix: " blue eyes. (nie ma)", mode: "gap", type: "przeczenie" },
        { prefix: "We ", expected: "have not got", suffix: " a pet pony. (nie mamy)", mode: "gap", type: "przeczenie" },
        { prefix: "They ", expected: "have not got", suffix: " scissors. (nie mają)", mode: "gap", type: "przeczenie" },
        { prefix: "A frog ", expected: "has not got", suffix: " fur. (nie ma)", mode: "gap", type: "przeczenie" },
        { prefix: "I ", expected: "have not got", suffix: " a sharpener. (nie mam)", mode: "gap", type: "przeczenie" },

        // Pytania (15)
        { prefix: "", expected: "Have", suffix: " you got a pet? (Czy masz)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Has", suffix: " he got small ears? (Czy on ma)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Has", suffix: " she got a rabbit? (Czy ona ma)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Have", suffix: " they got new pens? (Czy mają)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Has", suffix: " your dog got a long tail? (Czy twój pies ma)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Have", suffix: " you got a rubber? (Czy masz)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Has", suffix: " he got a brother? (Czy on ma)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Has", suffix: " the monster got four legs? (Czy potwór ma)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Have", suffix: " they got a puppy? (Czy mają)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Has", suffix: " she got green eyes? (Czy ona ma)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Have", suffix: " you got a ruler in your bag? (Czy masz)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Has", suffix: " your cat got sharp teeth? (Czy twój kot ma)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Have", suffix: " we got homework? (Czy mamy)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Has", suffix: " he got a new bike? (Czy on ma)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Have", suffix: " they got a guinea pig? (Czy mają)", mode: "gap", type: "pytanie" }
    ],
    can: [
        // ==============================
        // 📝 Tłumaczenia (can) - 50 zadań
        // ==============================
        // Twierdzenia (20)
        { polish: "Ja potrafię grać na gitarze.", english: "I can play the guitar.", type: "twierdzenie", mode: "translate" },
        { polish: "Ty umiesz jeździć na rowerze.", english: "You can ride a bike.", type: "twierdzenie", mode: "translate" },
        { polish: "Papuga potrafi latać.", english: "A parrot can fly.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój brat potrafi pływać.", english: "My brother can swim.", type: "twierdzenie", mode: "translate" },
        { polish: "Oni umieją grać na pianinie.", english: "They can play the piano.", type: "twierdzenie", mode: "translate" },
        { polish: "Ona potrafi tańczyć.", english: "She can dance.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój pies umie szybko biegać.", english: "My dog can run fast.", type: "twierdzenie", mode: "translate" },
        { polish: "Ja potrafię mówić po angielsku.", english: "I can speak English.", type: "twierdzenie", mode: "translate" },
        { polish: "Ryba umie pływać.", english: "A fish can swim.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój tata potrafi gotować.", english: "My dad can cook.", type: "twierdzenie", mode: "translate" },
        { polish: "My potrafimy grać w piłkę nożną.", english: "We can play football.", type: "twierdzenie", mode: "translate" },
        { polish: "Kot potrafi wspinać się na drzewa.", english: "A cat can climb trees.", type: "twierdzenie", mode: "translate" },
        { polish: "Ty potrafisz wysoko skakać.", english: "You can jump high.", type: "twierdzenie", mode: "translate" },
        { polish: "Ona umie ładnie rysować.", english: "She can draw.", type: "twierdzenie", mode: "translate" },
        { polish: "Oni potrafią jeździć na rolkach.", english: "They can rollerblade.", type: "twierdzenie", mode: "translate" },
        { polish: "Mój dziadek umie grać w szachy.", english: "My grandad can play chess.", type: "twierdzenie", mode: "translate" },
        { polish: "Żaba potrafi skakać.", english: "A frog can jump.", type: "twierdzenie", mode: "translate" },
        { polish: "Ja potrafię jeździć na deskorolce.", english: "I can skateboard.", type: "twierdzenie", mode: "translate" },
        { polish: "My umiemy śpiewać piosenki.", english: "We can sing songs.", type: "twierdzenie", mode: "translate" },
        { polish: "Ona potrafi jeździć konno.", english: "She can ride a horse.", type: "twierdzenie", mode: "translate" },

        // Przeczenia (15)
        { polish: "Ja nie potrafię latać.", english: "I cannot fly.", type: "przeczenie", mode: "translate" },
        { polish: "Ona nie umie jeździć na deskorolce.", english: "She cannot skateboard.", type: "przeczenie", mode: "translate" },
        { polish: "My nie potrafimy grać w tenisa.", english: "We cannot play tennis.", type: "przeczenie", mode: "translate" },
        { polish: "Kot nie potrafi nurkować.", english: "A cat cannot dive.", type: "przeczenie", mode: "translate" },
        { polish: "On nie umie śpiewać.", english: "He cannot sing.", type: "przeczenie", mode: "translate" },
        { polish: "Oni nie potrafią jeździć na rolkach.", english: "They cannot rollerblade.", type: "przeczenie", mode: "translate" },
        { polish: "Pies nie potrafi wspinać się na drzewa.", english: "A dog cannot climb trees.", type: "przeczenie", mode: "translate" },
        { polish: "Ja nie umiem grać na pianinie.", english: "I cannot play the piano.", type: "przeczenie", mode: "translate" },
        { polish: "Wąż nie potrafi biegać.", english: "A snake cannot run.", type: "przeczenie", mode: "translate" },
        { polish: "Ty nie potrafisz nurkować.", english: "You cannot dive.", type: "przeczenie", mode: "translate" },
        { polish: "Mój brat nie umie gotować.", english: "My brother cannot cook.", type: "przeczenie", mode: "translate" },
        { polish: "Pająk nie potrafi latać.", english: "A spider cannot fly.", type: "przeczenie", mode: "translate" },
        { polish: "My nie umiemy grać na gitarze.", english: "We cannot play the guitar.", type: "przeczenie", mode: "translate" },
        { polish: "Ona nie umie jeździć na nartach.", english: "She cannot ski.", type: "przeczenie", mode: "translate" },
        { polish: "Żółw nie potrafi szybko biegać.", english: "A tortoise cannot run fast.", type: "przeczenie", mode: "translate" },

        // Pytania (15)
        { polish: "Czy ty umiesz jeździć na rolkach?", english: "Can you rollerblade?", type: "pytanie", mode: "translate" },
        { polish: "Czy on potrafi skakać?", english: "Can he jump?", type: "pytanie", mode: "translate" },
        { polish: "Czy potrafisz pływać?", english: "Can you swim?", type: "pytanie", mode: "translate" },
        { polish: "Czy ona umie grać w piłkę nożną?", english: "Can she play football?", type: "pytanie", mode: "translate" },
        { polish: "Czy papuga potrafi mówić?", english: "Can a parrot talk?", type: "pytanie", mode: "translate" },
        { polish: "Czy oni potrafią nurkować?", english: "Can they dive?", type: "pytanie", mode: "translate" },
        { polish: "Czy umiesz jeździć na rowerze?", english: "Can you ride a bike?", type: "pytanie", mode: "translate" },
        { polish: "Czy twój pies potrafi pływać?", english: "Can your dog swim?", type: "pytanie", mode: "translate" },
        { polish: "Czy ona potrafi grać na gitarze?", english: "Can she play the guitar?", type: "pytanie", mode: "translate" },
        { polish: "Czy potrafisz biegać bardzo szybko?", english: "Can you run very fast?", type: "pytanie", mode: "translate" },
        { polish: "Czy koń potrafi skakać?", english: "Can a horse jump?", type: "pytanie", mode: "translate" },
        { polish: "Czy oni potrafią mówić po angielsku?", english: "Can they speak English?", type: "pytanie", mode: "translate" },
        { polish: "Czy umiesz wspinać się na drzewa?", english: "Can you climb trees?", type: "pytanie", mode: "translate" },
        { polish: "Czy twój kot potrafi łapać myszy?", english: "Can your cat catch mice?", type: "pytanie", mode: "translate" },
        { polish: "Czy potrafisz gotować?", english: "Can you cook?", type: "pytanie", mode: "translate" },

        // ==============================
        // 🧩 Luki (can) - 50 zadań
        // ==============================
        // Twierdzenia (20)
        { prefix: "I ", expected: "can", suffix: " ride a bike. (potrafię)", mode: "gap", type: "twierdzenie" },
        { prefix: "My brother ", expected: "can", suffix: " play football. (potrafi)", mode: "gap", type: "twierdzenie" },
        { prefix: "A parrot ", expected: "can", suffix: " fly. (potrafi)", mode: "gap", type: "twierdzenie" },
        { prefix: "She ", expected: "can", suffix: " dance. (umie)", mode: "gap", type: "twierdzenie" },
        { prefix: "They ", expected: "can", suffix: " play the piano. (umieją)", mode: "gap", type: "twierdzenie" },
        { prefix: "My dog ", expected: "can", suffix: " run fast. (potrafi)", mode: "gap", type: "twierdzenie" },
        { prefix: "A fish ", expected: "can", suffix: " swim in the river. (potrafi)", mode: "gap", type: "twierdzenie" },
        { prefix: "You ", expected: "can", suffix: " speak English well. (potrafisz)", mode: "gap", type: "twierdzenie" },
        { prefix: "He ", expected: "can", suffix: " jump very high. (potrafi)", mode: "gap", type: "twierdzenie" },
        { prefix: "We ", expected: "can", suffix: " play basketball. (umiemy)", mode: "gap", type: "twierdzenie" },
        { prefix: "A cat ", expected: "can", suffix: " climb trees. (potrafi)", mode: "gap", type: "twierdzenie" },
        { prefix: "She ", expected: "can", suffix: " draw funny pictures. (umie)", mode: "gap", type: "twierdzenie" },
        { prefix: "I ", expected: "can", suffix: " skateboard with friends. (potrafię)", mode: "gap", type: "twierdzenie" },
        { prefix: "My dad ", expected: "can", suffix: " cook delicious pizza. (potrafi)", mode: "gap", type: "twierdzenie" },
        { prefix: "They ", expected: "can", suffix: " rollerblade in the park. (umieją)", mode: "gap", type: "twierdzenie" },
        { prefix: "A frog ", expected: "can", suffix: " jump far. (potrafi)", mode: "gap", type: "twierdzenie" },
        { prefix: "We ", expected: "can", suffix: " sing English songs. (potrafimy)", mode: "gap", type: "twierdzenie" },
        { prefix: "She ", expected: "can", suffix: " ride a horse. (potrafi)", mode: "gap", type: "twierdzenie" },
        { prefix: "He ", expected: "can", suffix: " swim fast. (umie)", mode: "gap", type: "twierdzenie" },
        { prefix: "I ", expected: "can", suffix: " play the guitar. (potrafię)", mode: "gap", type: "twierdzenie" },

        // Przeczenia (15)
        { prefix: "I ", expected: "cannot", suffix: " fly in the air. (nie potrafię)", mode: "gap", type: "przeczenie" },
        { prefix: "A dog ", expected: "cannot", suffix: " climb trees. (nie potrafi)", mode: "gap", type: "przeczenie" },
        { prefix: "He ", expected: "cannot", suffix: " sing well. (nie umie)", mode: "gap", type: "przeczenie" },
        { prefix: "She ", expected: "cannot", suffix: " skateboard. (nie umie)", mode: "gap", type: "przeczenie" },
        { prefix: "We ", expected: "cannot", suffix: " play tennis today. (nie umiemy)", mode: "gap", type: "przeczenie" },
        { prefix: "A cat ", expected: "cannot", suffix: " dive in deep water. (nie potrafi)", mode: "gap", type: "przeczenie" },
        { prefix: "They ", expected: "cannot", suffix: " rollerblade fast. (nie potrafią)", mode: "gap", type: "przeczenie" },
        { prefix: "A snake ", expected: "cannot", suffix: " walk on legs. (nie potrafi)", mode: "gap", type: "przeczenie" },
        { prefix: "You ", expected: "cannot", suffix: " ride my bike. (nie potrafisz)", mode: "gap", type: "przeczenie" },
        { prefix: "My little sister ", expected: "cannot", suffix: " swim. (nie potrafi)", mode: "gap", type: "przeczenie" },
        { prefix: "A spider ", expected: "cannot", suffix: " fly. (nie potrafi)", mode: "gap", type: "przeczenie" },
        { prefix: "I ", expected: "cannot", suffix: " play the flute. (nie umiem)", mode: "gap", type: "przeczenie" },
        { prefix: "A tortoise ", expected: "cannot", suffix: " run fast. (nie potrafi)", mode: "gap", type: "przeczenie" },
        { prefix: "He ", expected: "cannot", suffix: " cook dinner. (nie potrafi)", mode: "gap", type: "przeczenie" },
        { prefix: "We ", expected: "cannot", suffix: " speak Spanish. (nie umiemy)", mode: "gap", type: "przeczenie" },

        // Pytania (15)
        { prefix: "", expected: "Can", suffix: " you swim? (Czy potrafisz)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " he jump? (Czy on potrafi)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " she play the guitar? (Czy ona umie)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " you dive? (Czy umiesz)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " a spider swim? (Czy potrafi)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " they rollerblade? (Czy potrafią)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " you ride a bike? (Czy umiesz)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " a dog climb trees? (Czy potrafi)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " she speak English? (Czy ona potrafi)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " he play the piano? (Czy on potrafi)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " a parrot talk? (Czy papuga potrafi)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " you run fast? (Czy potrafisz)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " your dad cook? (Czy twój tata potrafi)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " they play football today? (Czy potrafią)", mode: "gap", type: "pytanie" },
        { prefix: "", expected: "Can", suffix: " you dance hip-hop? (Czy umiesz)", mode: "gap", type: "pytanie" }
    ]
};

// Stan aplikacji
let selectedModule = 'translate';      // 'translate' lub 'gap'
let selectedQuestionCount = 10;        // 10, 20, 30, 40, 50
let currentTopic = '';                 // 'tobe', 'tohave', 'can', 'mix'
let currentQuestions = [];
let bestScore = parseInt(localStorage.getItem('english_best_score') || '0', 10);

// Elementy DOM
const topicSelection = document.getElementById('topic-selection');
const exerciseSection = document.getElementById('exercise-section');
const currentTopicTitle = document.getElementById('current-topic-title');
const currentModuleBadge = document.getElementById('current-module-badge');
const quizCountBadge = document.getElementById('quiz-count-badge');
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
const totalCountDenom = document.getElementById('total-count-denom');
const totalCountDenomErr = document.getElementById('total-count-denom-err');
const scorePercentageElem = document.getElementById('score-percentage');
const finalScoreText = document.getElementById('final-score-text');
const continueBtn = document.getElementById('continue-btn');
const retryBtn = document.getElementById('retry-btn');

// Przełączniki modułów i selektor liczby zadań
const modTranslate = document.getElementById('mod-translate');
const modGap = document.getElementById('mod-gap');
const countButtons = document.querySelectorAll('.count-btn');
const topicButtons = document.querySelectorAll('.topic-btn');

// Inicjalizacja najlepszego wyniku
bestScoreDisplay.textContent = bestScore;

// Obsługa wyboru modułu (Krok 1)
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

// Obsługa wyboru liczby pytań (Krok 2)
countButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        countButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedQuestionCount = parseInt(btn.dataset.count, 10);
    });
});

// Obsługa wyboru tematu (Krok 3)
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
    quizCountBadge.textContent = `${selectedQuestionCount} pytań`;
    
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
    
    // Losujemy i bierzemy dokładnie zadeklarowaną liczbę zadań (np. 10, 20, 30, 40, 50)
    const shuffled = shuffle(filteredPool);
    const targetCount = Math.min(selectedQuestionCount, shuffled.length);
    currentQuestions = shuffled.slice(0, targetCount);
    
    quizCountBadge.textContent = `${currentQuestions.length} pytań`;
    
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
            
            // Obsługa Enter: przejście do następnego zadania
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
            
            // Obsługa Enter: przejście do następnego zadania
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
        { full: "they are", short: "theyre" }, { full: "they are", short: "they're" },
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
    
    // Aktualizacja najlepszego wyniku w gwiazdkach
    if (scorePct > bestScore) {
        bestScore = scorePct;
        localStorage.setItem('english_best_score', bestScore);
        bestScoreDisplay.textContent = bestScore;
    }
    
    // Wypełnienie okna podsumowania
    correctCountElem.textContent = correctCount;
    incorrectCountElem.textContent = incorrectCount;
    totalCountDenom.textContent = `/${total}`;
    totalCountDenomErr.textContent = `/${total}`;
    scorePercentageElem.textContent = `${scorePct}%`;
    
    if (correctCount === total) {
        modalTitle.textContent = "Mistrz Angielskiego! 🏆";
        modalSubtitle.textContent = `Genialnie! Rozwiązałeś bezbłędnie wszystkie ${total} zadań!`;
        finalScoreText.textContent = `Gratulacje! 100% poprawnych odpowiedzi (${correctCount}/${total})!`;
    } else if (scorePct >= 80) {
        modalTitle.textContent = "Bardzo dobra robota! 🌟";
        modalSubtitle.textContent = "Świetny wynik! Prawie wszystkie odpowiedzi były poprawne.";
        finalScoreText.textContent = `Zdobyłeś ${correctCount} poprawnych odpowiedzi i tylko ${incorrectCount} ${incorrectCount === 1 ? 'błąd' : 'błędy'}.`;
    } else if (scorePct >= 50) {
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
