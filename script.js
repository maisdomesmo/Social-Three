const btnoff = document.querySelector('.btnoff')
const btnon = document.querySelector('.btnon')
const logo = document.querySelector('.logos');
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
    
    logo.classList.add('night');
}
function nightmodeoff(){
    document.body.style.setProperty('--secondary', 'hsl(var(--hue), 60%, 98%)');
    btnon.style.display = 'none';
    btnoff.style.display = 'initial';
    logo.classList.remove('night');
    
}
//changecolor();
nightmodeon();