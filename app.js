// ۱. بانک اطلاعاتی درس‌ها
// ۱. بانک اطلاعاتی درس‌ها (فصل اول و دوم)
const lessons = [
    // درس‌های فصل اول (ساختار سه پرده‌ای)
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
    },
    
    // درس‌های جدید فصل دوم (شخصیت‌پردازی) - از اینجا اضافه کنید:
    {
        id: 4,
        title: "خلق قهرمان: هدف و نیاز درونی (Want vs. Need)",
        content: "یک قهرمان جذاب دو چیز دارد: یک 'خواست ظاهری' (مثل نجات دنیا یا بردن مسابقه) و یک 'نیاز درونی روحی' (مثل یادگیری فداکاری یا غلبه بر ترس شدید خود)."
    },
    {
        id: 5,
        title: "نقص شخصیت (Character Flaw)",
        content: "هیچ قهرمانی نباید کامل باشد. نقص‌های اخلاقی (مثل غرور، زودرنجی یا خودخواهی) باعث می‌شوند مخاطب با شخصیت همذات‌پنداری کند و روند تغییر او را در طول داستان ببیند."
    },
    {
        id: 6,
        title: "خلق ضدقهرمان سایه (The Antagonist)",
        content: "ضدقهرمان یا شرور داستان، صرفاً یک فرد بدجنس نیست؛ او مأموریت دارد تا عمیق‌ترین نقطه‌ضعف و نقصِ شخصیتِ قهرمان را هدف بگیرد و او را به چالش بکشد."
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
let isQuizAnswered = false; // آیا به سوال فعلی پاسخ داده شده است؟


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
    quizContainer.style.borderColor = "#ffcc00"; 
    
    // دقیقاً اینجا در انتهای تابع اضافه کنید:
    isQuizAnswered = false; // بازنشانی برای سوال درس جدید
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
        if (!isQuizAnswered) {
            score += 10; 
            scoreElement.innerText = score; 
            isQuizAnswered = true; 
        }
        feedbackElement.innerText = "✅ آفرین! پاسخ شما کاملاً درست است. (+۱۰ امتیاز)";
        feedbackElement.style.color = "#4caf50";
        quizContainer.style.borderColor = "#4caf50";
        nextButton.style.display = "inline-block"; 
        nextButton.innerText = "رفتن به درس بعدی ➔";
    } else {
        feedbackElement.innerText = "❌ پاسخ اشتباه بود. دوباره تلاش کنید!";
        feedbackElement.style.color = "#f44336";
        quizContainer.style.borderColor = "#f44336";
        
        // اصلاحیه جدید: اگر کاربر بعد از پاسخ درست، گزینه غلط را زد، دکمه دوباره غیب شود
        nextButton.style.display = "none"; 
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
