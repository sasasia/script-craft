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
        question: "نقطه اوج داستان (Climax) معمولاً در کدام پرده رخ می‌دهد؟",
        options: ["پرده اول", "پرده دوم", "پرده سوم (گره‌گشایی)", "در هیچکدام"],
        correct: 2
    }
];

let currentLessonIndex = 0;
let score = 0;

// ۳. اتصال به عناصر صفحه HTML
const titleElement = document.getElementById("lesson-title");
const contentElement = document.getElementById("lesson-content");
const nextButton = document.getElementById("next-btn");

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("quiz-question");
const optionsContainer = document.getElementById("options-container");
const feedbackElement = document.getElementById("quiz-feedback");

const scoreElement = document.getElementById("user-score");
const progressBar = document.getElementById("progress-bar");

// ۴. تابع به‌روزرسانی نوار پیشرفت
function updateProgress() {
    const progressPercentage = ((currentLessonIndex + 1) / lessons.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// ۵. تابع نمایش درس
function showLesson(index) {
    quizContainer.style.display = "none"; 
    nextButton.style.display = "inline-block"; 
    nextButton.innerText = "شرکت در آزمون این درس ➔"; 
    
    titleElement.innerText = lessons[index].title;
    contentElement.innerText = lessons[index].content;
    
    updateProgress();
    
    // اصلاحیه: رنگ حاشیه دقیقاً اینجا به زرد برمی‌گردد
    quizContainer.style.borderColor = "#ffcc00"; 
}

// ۶. تابع نمایش آزمون
function showQuiz(index) {
    feedbackElement.innerText = ""; 
    optionsContainer.innerHTML = ""; 
    quizContainer.style.display = "block";
    quizContainer.classList.add("animate-fade-in");
 
    nextButton.style.display = "none"; 

    questionElement.innerText = quizzes[index].question;

    quizzes[index].options.forEach((option, i) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.style = "background-color: #333; color: #fff; border: 1px solid #555; padding: 12px; border-radius: 8px; cursor: pointer; text-align: right; font-family: inherit; font-size: 15px; transition: 0.2s;";
        
        button.addEventListener("click", () => checkAnswer(i, quizzes[index].correct));
        optionsContainer.appendChild(button);
    });
}

// ۷. تابع بررسی جواب آزمون
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        score += 10; 
        scoreElement.innerText = score; 
        feedbackElement.innerText = "✅ آفرین! پاسخ شما کاملاً درست است. (+۱۰ امتیاز)";
        feedbackElement.style.color = "#4caf50";
        
        // سبز کردن حاشیه باکس آزمون به نشانه موفقیت
        quizContainer.style.borderColor = "#4caf50";
        
        nextButton.style.display = "inline-block"; 
        nextButton.innerText = "رفتن به درس بعدی ➔";
    } else {
        feedbackElement.innerText = "❌ پاسخ اشتباه بود. دوباره تلاش کنید!";
        feedbackElement.style.color = "#f44336";
        
        // قرمز کردن حاشیه باکس آزمون به نشانه اخطار
        quizContainer.style.borderColor = "#f44336";
    }
}

// اجرای خودکار درس اول در ابتدای کار
showLesson(currentLessonIndex);

// ۸. منطق کلیک روی دکمه اصلی
nextButton.addEventListener("click", () => {
    if (quizContainer.style.display === "none") {
        showQuiz(currentLessonIndex);
    } else {
        currentLessonIndex++;
        if (currentLessonIndex < lessons.length) {
            showLesson(currentLessonIndex);
        } else { // <--- منظورم دقیقاً همین ال‌اس آخری است
            
            // کدهای جدید کارنامه سینمایی را دقیقاً از اینجا جایگزین کنید:
            const mainContainer = document.querySelector("main");
            mainContainer.innerHTML = `
                <div class="animate-fade-in" style="background: linear-gradient(145deg, #222, #111); padding: 50px 30px; border-radius: 20px; border: 2px solid #ffcc00; box-shadow: 0 10px 30px rgba(0,0,0,0.7); max-width: 600px; margin: 40px auto; border-style: dashed;">
                    <h1 style="font-size: 50px; margin: 0 0 10px 0;">🏆</h1>
                    <h2 style="color: #ffcc00; font-size: 28px; margin-bottom: 15px;">دیپلم افتخار فیلم‌نامه‌نویسی</h2>
                    <p style="font-size: 18px; color: #fff; line-height: 1.8; margin-bottom: 30px;">
                        با افتخار، شما تمامی مراحل <span style="color: #ffcc00; font-weight: bold;">«ساختار سه پرده‌ای»</span> را با موفقیت پشت سر گذاشتید و آماده خلق اولین سناریوی خود هستید!
                    </p>
                    <div style="background: #2a2a2a; padding: 15px 25px; border-radius: 12px; display: inline-block; border: 1px solid #333;">
                        <span style="color: #aaa; font-size: 16px;">امتیاز نهایی شما:</span>
                        <span style="color: #ffcc00; font-size: 24px; font-weight: bold; margin-right: 10px;">${score} از ۳۰</span>
                    </div>
                </div>
            `;
            // تا اینجا کدهای قدیمی داخل این ال‌اس را پاک و کدهای بالا را گذاشتیم
        }
    }
});
