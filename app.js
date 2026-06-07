const lessons = [
    {
        id: 1,
        title: "پرده اول: شروع و مواجهه (The Setup)",
        content: "در این بخش دنیای قهرمان و زندگی عادی او معرفی می‌شود. سپس یک 'حادثه محرک' نظم زندگی او را به هم می‌زند و او را مجبور به شروع سفر می‌کند."
    },
    {
        id: 2,
        title: "پرده دوم: تقابل و کشمکش (The Confrontation)",
        content: "طولانی‌ترین بخش فیلم‌نامه که در آن قهرمان با موانع، دشمنان و چالش‌های مختلف برای رسیدن به هدفش روبه‌رو می‌شود و مدام شکست می‌خورد."
    },
    {
        id: 3,
        title: "پرده سوم: گره‌گشایی و پایان (The Resolution)",
        content: "داستان به اوج خود (Climax) می‌رسد. قهرمان در نبرد نهایی شرکت می‌کند، گره‌های داستان باز می‌شوند و دنیای جدیدی شکل می‌گیرد."
    }
];

const quizzes = [
    {
        question: "وظیفه اصلی 'حادثه محرک' (Inciting Incident) در پرده اول چیست؟",
        options: ["پایان دادن به فیلم", "معرفی تیتراژ", "به هم زدن نظم زندگی عادی قهرمان و شروع سفر", "کشتن شخصیت اصلی"],
        correct: 2 // گزینه سوم صحیح است (شمارش از صفر شروع می‌شود)
    },
    {
        question: "طولانی‌ترین بخش یک فیلم‌نامه سه پرده‌ای کدام است؟",
        options: ["پرده اول", "پرده دوم (تقابل)", "پرده سوم", "تیتراژ پایانی"],
        correct: 1 // گزینه دوم صحیح است
    },
    {
        question: "نقطه اوج داستان (Climax) معمولاً در کدام پرده رخ می‌دهد؟",
        options: ["پرده اول", "پرده دوم", "پرده سوم (گره‌گشایی)", "در هیچکدام"],
        correct: 2 // گزینه سوم صحیح است
    }
];

let currentLessonIndex = 0;

const titleElement = document.getElementById("lesson-title");
const contentElement = document.getElementById("lesson-content");
const nextButton = document.getElementById("next-btn");

function showLesson(index) {
    titleElement.innerText = lessons[index].title;
    contentElement.innerText = lessons[index].content;
}

// این همان خطی است که جا افتاده بود و اضافه شد:
showLesson(currentLessonIndex);

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("quiz-question");
const optionsContainer = document.getElementById("options-container");
const feedbackElement = document.getElementById("quiz-feedback");

function showQuiz(index) {
    feedbackElement.innerText = ""; // پاک کردن متن جواب قبلی
    optionsContainer.innerHTML = ""; // پاک کردن گزینه‌های قبلی
    quizContainer.style.display = "block"; // نمایش باکس آزمون
    nextButton.style.display = "none"; // مخفی کردن دکمه درس بعدی تا زمان پاسخگویی

    questionElement.innerText = quizzes[index].question;

    quizzes[index].options.forEach((option, i) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.style = "background-color: #333; color: #fff; border: 1px solid #555; padding: 10px; border-radius: 8px; cursor: pointer; text-align: right;";
        
        button.addEventListener("click", () => checkAnswer(i, quizzes[index].correct));
        optionsContainer.appendChild(button);
    });
}

nextButton.addEventListener("click", () => {
    currentLessonIndex++;
    if (currentLessonIndex < lessons.length) {
        showLesson(currentLessonIndex);
    } else {
        titleElement.innerText = "🎉 تبریک! دوره تمام شد.";
        contentElement.innerText = "شما با موفقیت ساختار سه پرده‌ای فیلم‌نامه را یاد گرفتید.";
        nextButton.style.display = "none";
    }
});

function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        feedbackElement.innerText = "✅ آفرین! پاسخ شما کاملاً درست است.";
        feedbackElement.style.color = "#4caf50";
        nextButton.style.display = "inline-block"; // اجازه عبور به درس بعدی
    } else {
        feedbackElement.innerText = "❌ پاسخ اشتباه بود. دوباره تلاش کنید!";
        feedbackElement.style.color = "#f44336";
    }
}
