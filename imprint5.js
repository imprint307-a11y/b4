document.addEventListener('DOMContentLoaded', () => {
    
    // 1. تأثير اختفاء وظهور الهيدر العلوي بشكل ذكي عند التمرير لأسفل (حركة عصرية)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.8rem 0';
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.padding = '1.2rem 0';
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. تفعيل تأثير "Scroll Animation" (ظهور العناصر تدريجياً أثناء النزول بالصفحة)
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearanceOptions = {
        threshold: 0.15, // يظهر العنصر عندما يتواجد 15% منه داخل الشاشة
        rootMargin: "0px 0px -50px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                // نوقف المراقبة للعنصر بعد ظهوره لمرة واحدة لضمان سلاسة الأداء
                observer.unobserve(entry.target); 
            }
        });
    }, appearanceOptions);

    fadeElements.forEach(element => {
        appearanceObserver.observe(element);
    });
});