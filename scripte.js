// Minimal chatbot popup simulation
const chatbot = document.createElement('div');
chatbot.innerHTML = `
<div id="chatbot" style="position:fixed;bottom:20px;right:20px;background:#27ae60;color:#fff;padding:15px;border-radius:15px;cursor:pointer;">
    💬 Chat with us
</div>`;
document.body.appendChild(chatbot);

chatbot.addEventListener('click', () => {
    alert("Hi! Ask about produce availability and pricing.");
});