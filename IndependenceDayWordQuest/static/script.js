/* =====================================================
   INDIA WORD QUEST

   GAME RULES

   30 QUESTIONS
   40 MINUTES TOTAL

   Correct       = +5
   Correct+Hint  = +1
   Wrong         = -1
   Skip          = -1

   ONLY ONE HINT FOR THE WHOLE GAME

   Hint behavior:
   One letter belonging to the correct answer
   is highlighted GREEN.
===================================================== */


/* ================= GAME SETTINGS ================= */

const GRID_SIZE = 15;

const TOTAL_GAME_TIME =
    40 * 60 * 1000;


/* ================= QUESTIONS ================= */

const questions = [

    {
        question:
            "Who was popularly known as Shaheed-e-Azam?",

        answer:
            "JOOOOOOOOO"
    },

    {
        question:
            "Who is popularly known as the Father of the Nation?",

        answer:
            "GANDHI"
    },

    {
        question:
            "Who was the first Prime Minister of independent India?",

        answer:
            "NEHRU"
    },

    {
        question:
            "Who was the first President of independent India?",

        answer:
            "RAJENDRAPRASAD"
    },

    {
        question:
            "Who designed the Indian national flag?",

        answer:
            "PINGALIVENKAYYA"
    },

    {
        question:
            "What is India's national anthem?",

        answer:
            "JANAGANAMANA"
    },

    {
        question:
            "What is India's national song?",

        answer:
            "VANDEMATARAM"
    },

    {
        question:
            "What is the national animal of India?",

        answer:
            "TIGER"
    },

    {
        question:
            "What is the national bird of India?",

        answer:
            "PEACOCK"
    },

    {
        question:
            "What is the national flower of India?",

        answer:
            "LOTUS"
    },

    {
        question:
            "In which year did India become independent?",

        answer:
            "1947"
    },

    {
        question:
            "On which date is India's Independence Day celebrated?",

        answer:
            "AUGUST15"
    },

    {
        question:
            "Who gave the slogan Swaraj is my birthright?",

        answer:
            "TILAK"
    },

    {
        question:
            "Who gave the slogan Jai Hind?",

        answer:
            "NETAJI"
    },

    {
        question:
            "Who led the Dandi March?",

        answer:
            "GANDHI"
    },

    {
        question:
            "In which year did the Dandi March take place?",

        answer:
            "1930"
    },

    {
        question:
            "Which movement began in 1942 demanding an end to British rule?",

        answer:
            "QUITINDIA"
    },

    {
        question:
            "Where did India's first Prime Minister raise the national flag on August 15,1947?",

        answer:
            "REDFORT"
    },

    {
        question:
            "Who was known as Lokmanya?",

        answer:
            "TILAK"
    },

    {
        question:
            "Who was the Rani of Jhansi during the 1857 uprising?",

        answer:
            "LAKSHMIBAI"
    },

    {
        question:
            "Who was one of the early heroes of the 1857 uprising?",

        answer:
            "MANGALPANDEY"
    },

    {
        question:
            "Who was an important early leader of the Indian National Congress?",

        answer:
            "DADABHAINAOROJI"
    },

    {
        question:
            "Where was the Quit India resolution adopted in 1942?",

        answer:
            "BOMBAY"
    },

    {
        question:
            "What is the capital of India?",

        answer:
            "NEWDELHI"
    },

    {
        question:
            "On which date is Republic Day celebrated?",

        answer:
            "JANUARY26"
    },

    {
        question:
            "In which year did India become a republic?",

        answer:
            "1950"
    },

    {
        question:
            "On which date was the Constitution of India adopted?",

        answer:
            "NOVEMBER26"
    },

    {
        question:
            "Who chaired the Drafting Committee of the Indian Constitution?",

        answer:
            "AMBEDKAR"
    },

    {
        question:
            "Who was the first Indian Governor-General of independent India?",

        answer:
            "RAJAGOPALACHARI"
    },

    {
        question:
            "What is the national motto of India?",

        answer:
            "SATYAMEVAJAYATE"
    }

];


/* ================= GAME VARIABLES ================= */

let currentQuestion = 0;

let score = 0;


/*
   Only ONE hint for the entire game.
*/

let hintAvailable = true;

let hintUsedForCurrentQuestion = false;

let gameOver = false;


/*
   Whole-game timer.
*/

let remainingTime =
    TOTAL_GAME_TIME;

let timerInterval = null;


/*
   Puzzle variables.
*/

let puzzle = [];

let answerPath = [];

let selection = [];

let isSelecting = false;


/*
   Statistics.
*/

let correctCount = 0;

let wrongCount = 0;

let skippedCount = 0;


/* ================= ELEMENTS ================= */

const startPage =
    document.getElementById("startPage");

const rulesPage =
    document.getElementById("rulesPage");

const gamePage =
    document.getElementById("gamePage");

const resultPage =
    document.getElementById("resultPage");


const startButton =
    document.getElementById("startButton");

const rulesButton =
    document.getElementById("rulesButton");

const backFromRules =
    document.getElementById("backFromRules");

const startFromRules =
    document.getElementById("startFromRules");

const homeButton =
    document.getElementById("homeButton");

const playAgainButton =
    document.getElementById("playAgainButton");

const resultHomeButton =
    document.getElementById("resultHomeButton");


const scoreElement =
    document.getElementById("score");

const hintStatus =
    document.getElementById("hintStatus");

const timerElement =
    document.getElementById("timer");

const questionNumber =
    document.getElementById("questionNumber");

const questionText =
    document.getElementById("questionText");

const puzzleGrid =
    document.getElementById("puzzleGrid");

const messageElement =
    document.getElementById("message");

const progressBar =
    document.getElementById("progressBar");

const hintButton =
    document.getElementById("hintButton");

const skipButton =
    document.getElementById("skipButton");


const finalScore =
    document.getElementById("finalScore");

const resultText =
    document.getElementById("resultText");

const correctCountElement =
    document.getElementById("correctCount");

const wrongCountElement =
    document.getElementById("wrongCount");

const skippedCountElement =
    document.getElementById("skippedCount");


/* ================= PAGE SWITCH ================= */

function showPage(page) {

    document
        .querySelectorAll(".page")
        .forEach(function(item) {

            item.classList.remove(
                "active"
            );

        });


    page.classList.add("active");

    window.scrollTo(0, 0);
}


/* ================= START GAME ================= */

function startGame() {

    stopTimer();


    currentQuestion = 0;

    score = 0;


    /*
       IMPORTANT:

       Only ONE hint is available
       for the whole game.
    */

    hintAvailable = true;

    hintUsedForCurrentQuestion = false;


    gameOver = false;


    remainingTime =
        TOTAL_GAME_TIME;


    correctCount = 0;

    wrongCount = 0;

    skippedCount = 0;


    updateStats();

    updateHintDisplay();

    updateTimerDisplay();


    showPage(gamePage);


    /*
       Start the single whole-game timer.
    */

    startTimer();


    loadQuestion();
}


/* ================= TIMER ================= */

function startTimer() {

    stopTimer();


    timerInterval =
        setInterval(function() {

            if (gameOver) {

                stopTimer();

                return;

            }


            remainingTime -= 1000;


            if (remainingTime <= 0) {

                remainingTime = 0;

                updateTimerDisplay();

                timeUp();

                return;

            }


            updateTimerDisplay();

        }, 1000);
}


/* ================= STOP TIMER ================= */

function stopTimer() {

    if (timerInterval !== null) {

        clearInterval(
            timerInterval
        );

        timerInterval = null;

    }
}


/* ================= TIMER DISPLAY ================= */

function updateTimerDisplay() {

    const totalSeconds =
        Math.ceil(
            remainingTime / 1000
        );


    const minutes =
        Math.floor(
            totalSeconds / 60
        );


    const seconds =
        totalSeconds % 60;


    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    if (
        remainingTime <=
        5 * 60 * 1000
    ) {

        timerElement.classList.add(
            "timer-warning"
        );

    }
    else {

        timerElement.classList.remove(
            "timer-warning"
        );

    }
}


/* ================= TIME UP ================= */

function timeUp() {

    if (gameOver) {

        return;

    }


    gameOver = true;

    stopTimer();


    messageElement.textContent =
        "⏰ 40 minutes are over!";


    messageElement.className =
        "message error";


    setTimeout(
        finishGame,
        800
    );
}


/* ================= LOAD QUESTION ================= */

function loadQuestion() {

    clearSelection();

    clearHintLetter();


    answerPath = [];

    selection = [];

    isSelecting = false;


    hintUsedForCurrentQuestion =
        false;


    messageElement.textContent =
        "";

    messageElement.className =
        "message";


    if (
        currentQuestion >=
        questions.length
    ) {

        finishGame();

        return;

    }


    const question =
        questions[currentQuestion];


    questionText.textContent =
        question.question;


    questionNumber.textContent =
        `${currentQuestion + 1} / ${questions.length}`;


    progressBar.style.width =
        `${(
            currentQuestion /
            questions.length
        ) * 100}%`;


    generatePuzzle(
        cleanAnswer(
            question.answer
        )
    );


    updateHintDisplay();
}


/* ================= CLEAN ANSWER ================= */

function cleanAnswer(answer) {

    return answer
        .toUpperCase()
        .replace(
            /[^A-Z0-9]/g,
            ""
        );
}


/* ================= GENERATE PUZZLE ================= */

function generatePuzzle(answer) {

    puzzle = [];


    for (
        let row = 0;
        row < GRID_SIZE;
        row++
    ) {

        puzzle[row] = [];


        for (
            let col = 0;
            col < GRID_SIZE;
            col++
        ) {

            puzzle[row][col] = "";

        }

    }


    let placed = false;


    /*
       Try different random positions
       until the answer fits.
    */

    for (
        let attempt = 0;
        attempt < 1000;
        attempt++
    ) {

        const direction =
            getRandomDirection();


        const startRow =
            Math.floor(
                Math.random() *
                GRID_SIZE
            );


        const startCol =
            Math.floor(
                Math.random() *
                GRID_SIZE
            );


        const path =
            getPath(
                startRow,
                startCol,
                direction.dr,
                direction.dc,
                answer.length
            );


        if (!path) {

            continue;

        }


        let valid = true;


        for (
            let i = 0;
            i < answer.length;
            i++
        ) {

            const row =
                path[i].row;


            const col =
                path[i].col;


            if (
                puzzle[row][col] !== "" &&
                puzzle[row][col] !==
                answer[i]
            ) {

                valid = false;

                break;

            }

        }


        if (!valid) {

            continue;

        }


        for (
            let i = 0;
            i < answer.length;
            i++
        ) {

            puzzle[
                path[i].row
            ][
                path[i].col
            ] = answer[i];

        }


        answerPath = path;

        placed = true;

        break;

    }


    /*
       Fallback.
    */

    if (!placed) {

        answerPath = [];


        for (
            let i = 0;
            i < answer.length;
            i++
        ) {

            puzzle[0][i] =
                answer[i];


            answerPath.push({

                row: 0,

                col: i

            });

        }

    }


    /*
       Fill remaining cells.
    */

    const letters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    for (
        let row = 0;
        row < GRID_SIZE;
        row++
    ) {

        for (
            let col = 0;
            col < GRID_SIZE;
            col++
        ) {

            if (
                puzzle[row][col] === ""
            ) {

                puzzle[row][col] =
                    letters[
                        Math.floor(
                            Math.random() *
                            letters.length
                        )
                    ];

            }

        }

    }


    renderPuzzle();
}


/* ================= DIRECTIONS ================= */

function getRandomDirection() {

    const directions = [

        { dr: 0, dc: 1 },

        { dr: 0, dc: -1 },

        { dr: 1, dc: 0 },

        { dr: -1, dc: 0 },

        { dr: 1, dc: 1 },

        { dr: 1, dc: -1 },

        { dr: -1, dc: 1 },

        { dr: -1, dc: -1 }

    ];


    return directions[
        Math.floor(
            Math.random() *
            directions.length
        )
    ];
}


/* ================= GET PATH ================= */

function getPath(
    row,
    col,
    dr,
    dc,
    length
) {

    const path = [];


    for (
        let i = 0;
        i < length;
        i++
    ) {

        const newRow =
            row + dr * i;


        const newCol =
            col + dc * i;


        if (
            newRow < 0 ||
            newRow >= GRID_SIZE ||
            newCol < 0 ||
            newCol >= GRID_SIZE
        ) {

            return null;

        }


        path.push({

            row: newRow,

            col: newCol

        });

    }


    return path;
}


/* ================= RENDER PUZZLE ================= */

function renderPuzzle() {

    puzzleGrid.innerHTML = "";


    for (
        let row = 0;
        row < GRID_SIZE;
        row++
    ) {

        for (
            let col = 0;
            col < GRID_SIZE;
            col++
        ) {

            const cell =
                document.createElement(
                    "div"
                );


            cell.className =
                "letter-cell";


            cell.textContent =
                puzzle[row][col];


            cell.dataset.row =
                row;


            cell.dataset.col =
                col;


            cell.addEventListener(
                "mousedown",
                startSelection
            );


            cell.addEventListener(
                "mouseenter",
                continueSelection
            );


            cell.addEventListener(
                "touchstart",
                startTouchSelection,
                {
                    passive: false
                }
            );


            cell.addEventListener(
                "touchmove",
                continueTouchSelection,
                {
                    passive: false
                }
            );


            puzzleGrid.appendChild(
                cell
            );

        }

    }
}


/* ================= MOUSE ================= */

function startSelection(event) {

    if (gameOver) {

        return;

    }


    clearSelection();


    isSelecting = true;


    selectCell(
        event.currentTarget
    );
}


function continueSelection(event) {

    if (!isSelecting) {

        return;

    }


    selectCell(
        event.currentTarget
    );
}


document.addEventListener(
    "mouseup",
    function() {

        if (isSelecting) {

            finishSelection();

        }

    }
);


/* ================= TOUCH ================= */

function startTouchSelection(event) {

    if (gameOver) {

        return;

    }


    event.preventDefault();


    clearSelection();


    isSelecting = true;


    selectCell(
        event.currentTarget
    );
}


function continueTouchSelection(event) {

    if (!isSelecting) {

        return;

    }


    event.preventDefault();


    const touch =
        event.touches[0];


    const element =
        document.elementFromPoint(
            touch.clientX,
            touch.clientY
        );


    if (
        element &&
        element.classList.contains(
            "letter-cell"
        )
    ) {

        selectCell(element);

    }
}


document.addEventListener(
    "touchend",
    function() {

        if (isSelecting) {

            finishSelection();

        }

    }
);


/* ================= SELECT CELL ================= */

function selectCell(cell) {

    const row =
        parseInt(
            cell.dataset.row
        );


    const col =
        parseInt(
            cell.dataset.col
        );


    if (
        selection.length === 0
    ) {

        selection.push({

            row: row,

            col: col

        });


        cell.classList.add(
            "selecting"
        );


        return;

    }


    const first =
        selection[0];


    const dr =
        Math.sign(
            row - first.row
        );


    const dc =
        Math.sign(
            col - first.col
        );


    const distance =
        Math.max(
            Math.abs(
                row - first.row
            ),
            Math.abs(
                col - first.col
            )
        );


    if (distance === 0) {

        return;

    }


    const newSelection = [];


    for (
        let i = 0;
        i <= distance;
        i++
    ) {

        const newRow =
            first.row + dr * i;


        const newCol =
            first.col + dc * i;


        const target =
            getCell(
                newRow,
                newCol
            );


        if (!target) {

            return;

        }


        newSelection.push({

            row: newRow,

            col: newCol

        });

    }


    clearSelection();


    selection =
        newSelection;


    selection.forEach(
        function(item) {

            const selectedCell =
                getCell(
                    item.row,
                    item.col
                );


            if (selectedCell) {

                selectedCell.classList.add(
                    "selecting"
                );

            }

        }
    );
}


/* ================= FINISH SELECTION ================= */

function finishSelection() {

    if (!isSelecting) {

        return;

    }


    isSelecting = false;


    if (
        selection.length === 0
    ) {

        return;

    }


    const selectedWord =
        selection.map(
            function(item) {

                return puzzle[
                    item.row
                ][
                    item.col
                ];

            }
        ).join("");


    const answer =
        cleanAnswer(
            questions[
                currentQuestion
            ].answer
        );


    const reverseWord =
        selectedWord
            .split("")
            .reverse()
            .join("");


    if (
        selectedWord === answer ||
        reverseWord === answer
    ) {

        correctAnswer();

    }
    else {

        wrongAnswer();

    }
}


/* ================= CORRECT ================= */

function correctAnswer() {

    clearSelection();


    answerPath.forEach(
        function(position) {

            const cell =
                getCell(
                    position.row,
                    position.col
                );


            if (cell) {

                cell.classList.add(
                    "correct"
                );

            }

        }
    );


    /*
       If the single hint was used,
       this question receives +1.

       Otherwise +5.
    */

    if (
        hintUsedForCurrentQuestion
    ) {

        score += 1;


        messageElement.textContent =
            "🎉 Correct with hint! +1 point";

    }
    else {

        score += 5;


        messageElement.textContent =
            "🎉 Correct! +5 points";

    }


    correctCount++;


    updateStats();


    messageElement.className =
        "message success";


    setTimeout(
        function() {

            currentQuestion++;

            loadQuestion();

        },
        1000
    );
}


/* ================= WRONG ================= */

function wrongAnswer() {

    clearSelection();


    score -= 1;


    wrongCount++;


    updateStats();


    messageElement.textContent =
        "❌ Wrong answer! -1 point";


    messageElement.className =
        "message error";

}


/* ================= ONE HINT ================= */

function useHint() {

    /*
       Prevent using more than one hint
       during the entire game.
    */

    if (!hintAvailable) {

        messageElement.textContent =
            "💡 Your one hint has already been used.";

        messageElement.className =
            "message error";

        return;

    }


    if (gameOver) {

        return;

    }


    /*
       Consume the ONLY hint.
    */

    hintAvailable = false;

    hintUsedForCurrentQuestion = true;


    updateHintDisplay();


    /*
       Pick ONE random letter from
       the correct answer path.

       That one letter becomes GREEN.
    */

    const randomIndex =
        Math.floor(
            Math.random() *
            answerPath.length
        );


    const hintPosition =
        answerPath[randomIndex];


    const hintCell =
        getCell(
            hintPosition.row,
            hintPosition.col
        );


    if (hintCell) {

        hintCell.classList.add(
            "hint-letter"
        );

    }


    messageElement.textContent =
        "💡 Hint used! One letter of the answer is highlighted in green.";

    messageElement.className =
        "message info";

}


/* ================= CLEAR HINT ================= */

function clearHintLetter() {

    document
        .querySelectorAll(
            ".letter-cell.hint-letter"
        )
        .forEach(
            function(cell) {

                cell.classList.remove(
                    "hint-letter"
                );

            }
        );
}


/* ================= SKIP ================= */

function skipQuestion() {

    if (gameOver) {

        return;

    }


    /*
       Skip = -1 point.
    */

    score -= 1;


    skippedCount++;


    updateStats();


    messageElement.textContent =
        "⏭️ Question skipped. -1 point";


    messageElement.className =
        "message info";


    setTimeout(
        function() {

            currentQuestion++;

            loadQuestion();

        },
        600
    );
}


/* ================= CLEAR SELECTION ================= */

function clearSelection() {

    document
        .querySelectorAll(
            ".letter-cell.selecting"
        )
        .forEach(
            function(cell) {

                cell.classList.remove(
                    "selecting"
                );

            }
        );


    selection = [];
}


/* ================= GET CELL ================= */

function getCell(row, col) {

    return document.querySelector(
        `.letter-cell[data-row="${row}"][data-col="${col}"]`
    );
}


/* ================= UPDATE STATS ================= */

function updateStats() {

    scoreElement.textContent =
        score;

}


/* ================= UPDATE HINT ================= */

function updateHintDisplay() {

    if (hintAvailable) {

        hintStatus.textContent =
            "AVAILABLE";


        hintButton.disabled =
            false;


        hintButton.classList.remove(
            "used"
        );

    }
    else {

        hintStatus.textContent =
            "USED";


        hintButton.disabled =
            true;


        hintButton.classList.add(
            "used"
        );

    }
}


/* ================= FINISH GAME ================= */

function finishGame() {

    if (gameOver === false) {

        gameOver = true;

    }


    stopTimer();


    progressBar.style.width =
        "100%";


    finalScore.textContent =
        score;


    correctCountElement.textContent =
        correctCount;


    wrongCountElement.textContent =
        wrongCount;


    skippedCountElement.textContent =
        skippedCount;


    if (score >= 120) {

        resultText.textContent =
            "🏆 Outstanding! You are an India Word Quest champion!";

    }
    else if (score >= 80) {

        resultText.textContent =
            "🌟 Excellent! Your knowledge of India is impressive!";

    }
    else if (score >= 40) {

        resultText.textContent =
            "👏 Good effort! Keep learning about India's history!";

    }
    else {

        resultText.textContent =
            "🇮🇳 Keep learning and try again!";

    }


    showPage(resultPage);
}


/* ================= BUTTON EVENTS ================= */

startButton.addEventListener(
    "click",
    startGame
);


rulesButton.addEventListener(
    "click",
    function() {

        showPage(rulesPage);

    }
);


backFromRules.addEventListener(
    "click",
    function() {

        showPage(startPage);

    }
);


startFromRules.addEventListener(
    "click",
    startGame
);


homeButton.addEventListener(
    "click",
    function() {

        gameOver = true;

        stopTimer();

        showPage(startPage);

    }
);


playAgainButton.addEventListener(
    "click",
    startGame
);


resultHomeButton.addEventListener(
    "click",
    function() {

        stopTimer();

        showPage(startPage);

    }
);


hintButton.addEventListener(
    "click",
    useHint
);


skipButton.addEventListener(
    "click",
    skipQuestion
);


/* ================= DISABLE DRAG ================= */

puzzleGrid.addEventListener(
    "dragstart",
    function(event) {

        event.preventDefault();

    }
);


/* ================= INITIALIZE ================= */

updateStats();

updateHintDisplay();

updateTimerDisplay();