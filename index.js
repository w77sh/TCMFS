// Text switching functionality
const texts = {
    ar: "نحن طلاب المستقبل ✨ ، نجعل أحلامنا 🚀 وطموحاتنا 🌎، عالم أفضل.",
    en: "We are the students of the future ✨, making our dreams 🚀 and ambitions 🌎, a better world."
};

const textElement = document.getElementById('dynamic-text');
let isArabic = true;

function updateText() {
    // Add fade-out effect
    textElement.style.opacity = '0';
    
    setTimeout(() => {
        // Update text and direction
        if (isArabic) {
            textElement.textContent = texts.en;
            textElement.style.direction = 'ltr';
        } else {
            textElement.textContent = texts.ar;
            textElement.style.direction = 'rtl';
        }
        // Add fade-in effect
        textElement.style.opacity = '1';
        isArabic = !isArabic;
    }, 500); // Wait for fade out to complete
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add CSS transition for smooth fade effect
    textElement.style.transition = 'opacity 0.5s ease-in-out';
    
    // Update text every 5 seconds
    setInterval(updateText, 5000);
});
