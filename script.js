
let day = getComputedStyle(document.documentElement).getPropertyValue('--hue'); 
let night = getComputedStyle(document.documentElement).getPropertyValue('--night'); 

function nightmodeon(){
    document.body.style.setProperty('--secondary', 'hsl(var(--hue), 50%, 15%)');
}
function nightmodeoff(){
    document.body.style.setProperty('--secondary', 'hsl(var(--hue), 60%, 98%)');
}