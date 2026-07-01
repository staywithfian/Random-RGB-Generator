function colorgenerator() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function updatergb() {
    const box = document.getElementById("box");
    const rgb = colorgenerator();
    box.style.backgroundColor = rgb;
    const ptag = document.getElementById('pt');
    ptag.innerText = rgb;
}

document.getElementById('cpy').addEventListener('click',()=>{
const ptag = document.getElementById('pt');
const inp = document.createElement('input');
document.body.appendChild(inp);
inp.value = ptag.innerText;
inp.select();
document.execCommand('copy');
document.body.removeChild(inp);
alert("Color Code Copied");
})

document.getElementById('newclr').addEventListener('click',  updatergb);