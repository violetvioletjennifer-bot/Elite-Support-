// Live Activity Notification Generator
function createNotification() {
    const actions = ["New Order Confirmed", "Review Live", "Payment Processed", "IP Verification Success", "Tester Report Submitted"];
    const locations = ["Ohio, US", "Texas, US", "Florida, US", "New York, US", "California, US"];
    
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomLoc = locations[Math.floor(Math.random() * locations.length)];

    // Create notification element
    const toast = document.createElement('div');
    toast.className = "fixed bottom-5 right-5 bg-[#141929] border border-[#FF9900]/30 text-white px-6 py-4 rounded-2xl shadow-2xl z-[9999] flex items-center gap-3 animate-bounce";
    toast.style.animation = "slideUp 0.5s ease-out forwards";
    
    toast.innerHTML = `
        <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <div>
            <p class="text-xs font-bold text-orange-400 uppercase tracking-widest">${randomAction}</p>
            <p class="text-[10px] text-slate-400">Location: ${randomLoc} | Just now</p>
        </div>
    `;

    document.body.appendChild(toast);

    // Remove notification after 4 seconds
    setTimeout(() => {
        toast.style.animation = "fadeOut 0.5s ease-in forwards";
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// CSS for animations
const style = document.createElement('style');
style.innerHTML = `
    @keyframes slideUp { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
`;
document.head.appendChild(style);

// Start showing notifications every 10-15 seconds randomly
function startSimulation() {
    const randomDelay = Math.floor(Math.random() * (15000 - 8000) + 8000);
    setTimeout(() => {
        createNotification();
        startSimulation();
    }, randomDelay);
}

startSimulation();
