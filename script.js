const btnoff = document.querySelector('.btnoff')
const btnon = document.querySelector('.btnon')

function changecolor() {
    let hue = getComputedStyle(document.documentElement).getPropertyValue('--hue'); 
    setInterval(() => {
        hue++;
        document.body.style.setProperty('--hue', `${hue}`);
    }, 100);
}

function nightmodeon(){
    document.body.style.setProperty('--secondary', 'hsl(var(--hue), 50%, 15%)');
    btnoff.style.display = 'none';
    btnon.style.display = 'initial';
}
function nightmodeoff(){
    document.body.style.setProperty('--secondary', 'hsl(var(--hue), 60%, 98%)');
    btnon.style.display = 'none';
    btnoff.style.display = 'initial';
    
}
changecolor();