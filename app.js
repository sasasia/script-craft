// ۱. بانک اطلاعاتی درس‌ها
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

// ۲. بانک اطلاعاتی سوالات آزمون
const quizzes = [
    {
        question: "وظیفه اصلی 'حادثه محرک' (Inciting Incident) در پرده اول چیست؟",
        options: ["پایان دادن به فیلم", "معرفی تیتراژ", "به هم زدن نظم زندگی عادی قهرمان و شروع سفر", "کشتن شخصیت اصلی"],
        correct: 2
    },
    {
        question: "طولانی‌ترین بخش یک فیلم‌نامه سه پرده‌ای کدام است؟",
        options: ["پرده اول", "پرده دوم (تقابل)", "پرده سوم", "تیتراژ پایانی"],
        correct: 1
    },
    {
        question: "نقطه اوج داستان (Climax) معمولاً در کدام پرده رخ می‌دهد防؟",
        options: ["پرده اول", "پرده دوم", "پرده سوم (گره‌گشایی)", "در هیچکدام"],
        correct: 2
    }
];

let currentLessonIndex = 0;

// ۳. اتصال به عناصر صفحه HTML
const titleElement = document.getElementById("lesson-title");
const contentElement = document.getElementById("lesson-content");
const nextButton = document.getElementById("next-btn");

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("quiz-question");
const optionsContainer = document.getElementById("options-container");
const feedbackElement = document.getElementById("quiz-feedback");

// ۴. تابع نمایش درس
function showLesson(index) {
    quizContainer.style.display = "none"; // مخفی کردن کوییز هنگام نمایش درس جدید
    nextButton.style.display = "inline-block"; // نمایش دکمه برای رفتن به آزمون
    nextButton.innerText = "شرکت در آزمون این درس ➔"; // تغییر متن دکمه
    
    titleElement.innerText = lessons[index].title;
    contentElement.innerText = lessons[index].content;
}

// ۵. تابع نمایش آزمون
function showQuiz(index) {
    feedbackElement.innerText = ""; 
    optionsContainer.innerHTML = ""; 
    quizContainer.style.display = "block"; 
    nextButton.style.display = "none"; // مخفی کردن دکمه تا زمان پاسخ درست

    questionElement.innerText = quizzes[index].question;

    quizzes[index].options.forEach((option, i) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.style = "background-color: #333; color: #fff; border: 1px solid #555; padding: 12px; border-radius: 8px; cursor: pointer; text-align: right; font-family: inherit; font-size: 15px; transition: 0.2s;";
        
        button.addEventListener("click", () => checkAnswer(i, quizzes[index].correct));
        optionsContainer.appendChild(button);
    });
}

// ۶. تابع بررسی جواب آزمون
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        feedbackElement.innerText = "✅ آفرین! پاسخ شما کاملاً درست است.";
        feedbackElement.style.color = "#4caf50";
        nextButton.style.display = "inline-block"; // باز شدن دکمه عبور
        nextButton.innerText = "رفتنی به درس بعدی ➔";
    } else {
        feedbackElement.innerText = "❌ پاسخ اشتباه بود. دوباره تلاش کنید!";
        feedbackElement.style.color = "#f44336";
    }
}

// اجرای خودکار درس اول در ابتدای کار
showLesson(currentLessonIndex);

// ۷. منطق کلیک روی دکمه اصلی (مغز متفکر برنامه)
nextButton.addEventListener("click", () => {
    // اگر دکمه در حالت دعوت به آزمون بود
    if (quizContainer.style.display === "none") {
        showQuiz(currentLessonIndex);
    } else {
        // اگر آزمون حل شده بود و باید به درس بعدی برویم
        currentLessonIndex++;
        if (currentLessonIndex < lessons.length) {
            showLesson(currentLessonIndex);
        } else {
            titleElement.innerText = "🎉 تبریک فراوان! دوره به پایان رسید.";
            contentElement.innerText = "شما با موفقیت ساختار سه پرده‌ای فیلم‌نامه را یاد گرفتید و تمام آزمون‌ها را پاس کردید.";
            quizContainer.style.display = "none";
            nextButton.style.display = "none";
        }
    }
});
