const button=document.querySelector('button');
const body=document.querySelector('body')   
const color=["red", "blue", "gren", "grey", "purple"];

body.style.backgroundColor='violet';
button.addEventListener('click', function changeColor(){
    const colorIndex= parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex];
    
});
