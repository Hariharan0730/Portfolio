const portfolioDisplay = document.getElementById('portfolio-display');
const portfolioBtn = document.getElementById('portfolio-view-btn');
const contactDisplay = document.getElementById("contact");
const contactBtn = document.getElementById("contact-view-btn");
contactBtn.addEventListener('click', () => {
    portfolioDisplay.classList.add('hidden');
    contactDisplay.classList.remove('hidden');
})

portfolioBtn.addEventListener('click', () => {
    portfolioDisplay.classList.remove('hidden');
    contactDisplay.classList.add('hidden');
})
