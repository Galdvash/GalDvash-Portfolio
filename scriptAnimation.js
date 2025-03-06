window.addEventListener("load", () => {
  // הגדרת המצב ההתחלתי: האלמנט עם class="work_portfolio" יוצא מלמטה
  gsap.set(".work_portfolio", { y: "0%" });
  gsap.set(".navbar", { y: "-100%" });

  // טיים-ליין עם delay של 5 שניות
  const timeline = gsap.timeline({ delay: 1 });

  // אנימציה לספלש: הזזת האלמנט כלפי מעלה
  timeline.to("#splash", { y: "-100%", duration: 1, ease: "power2.inOut" }, 0);

  // אנימציה לחלק של הפרויקטים: הזזה ממצב של 100% ל-0%
  timeline.to(
    ".work_portfolio",
    { y: "0%", duration: 1, ease: "power2.inOut" },
    0
  );
  timeline.to(".navbar", {
    y: "0%",
    duration: 1,
    ease: "power2.inOut",
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const blurElements = document.querySelectorAll(".autoBlur");

  // נגדיר רשימה עם ערכי threshold בין 0 ל-1 ברזולוציה גבוהה
  const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const diamond = entry.target.querySelector(".diamond");
        const ratio = entry.intersectionRatio;
        // נבדוק אם האלמנט נמצא בטווח הנראות בין 51% ל-55%
        if (ratio >= 0.51 && ratio <= 0.55) {
          // אם לא קיימת כבר מחלקת סיבוב, נוסיף אותה
          if (!diamond.classList.contains("rotate")) {
            diamond.classList.add("rotate");
            // לאחר סיום האנימציה ננקה את המחלקה כדי לאפשר הפעלה חוזרת
            diamond.addEventListener(
              "animationend",
              () => {
                diamond.classList.remove("rotate");
              },
              { once: true }
            );
          }
        } else {
          // במידה והאלמנט לא בטווח, נוודא שהמחלקה מוסרת
          diamond.classList.remove("rotate");
        }
      });
    },
    { threshold: thresholds }
  );

  blurElements.forEach((el) => observer.observe(el));
});
