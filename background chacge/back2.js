
const body=document.querySelector('body');
const button=document.querySelectorAll('button');

button.forEach((button)=>{
button.addEventListener('click',function(e){

if(e.target.id==='red'){
    body.style.backgroundColor=e.target.id
}
if(e.target.id==='blue'){
    body.style.backgroundColor=e.target.id
}
if(e.target.id==='yellow'){
    body.style.backgroundColor=e.target.id
}
if(e.target.id==='pink'){
    body.style.backgroundColor=e.target.id
}
if(e.target.id==='black'){
    body.style.backgroundColor=e.target.id
}

}
)})
