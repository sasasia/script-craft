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
