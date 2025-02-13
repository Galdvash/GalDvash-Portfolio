// window.addEventListener("load", () => {
//   // הגדרת המצב ההתחלתי: האלמנט עם class="work_portfolio" יוצא מלמטה
//   gsap.set(".work_portfolio", { y: "0%" });
//   gsap.set(".navbar", { y: "-100%" });

//   // טיים-ליין עם delay של 5 שניות
//   const timeline = gsap.timeline({ delay: 1 });

//   // אנימציה לספלש: הזזת האלמנט כלפי מעלה
//   timeline.to("#splash", { y: "-100%", duration: 1, ease: "power2.inOut" }, 0);

//   // אנימציה לחלק של הפרויקטים: הזזה ממצב של 100% ל-0%
//   timeline.to(
//     ".work_portfolio",
//     { y: "0%", duration: 1, ease: "power2.inOut" },
//     0
//   );
//   timeline.to(".navbar", {
//     y: "0%",
//     duration: 1,
//     ease: "power2.inOut",
//   });
// });
