// // Id selector:
// const div = document.getElementById('target');
// console.log(div);

// //Class selector:
// const div1 = document.getElementsByClassName('target');
// console.log(div1);

// //Query selector:
// const div2 = document.querySelector('.target');
// console.log(div2);

// const div3 = document.querySelectorAll('.target');
// console.log(div3);

// const div4 = document.querySelectorAll('meta:first-of-type');
// console.log(div4);

// //Event Listener:
// window.addEventListener('load', ()=>{
//     alert('Window loaded');
// })

// document.addEventListener('click', ()=>{
//     console.log('clicked on dom');
// })

// document.addEventListener('click', (e)=>{
//     console.log(`clicked on position: ${e.pageX} ${e.pageY}`);
// })
// document.addEventListener('click', (e)=>{
//     console.log(e);
// })

//click event example:
// let button = document.querySelector('.btn-custom');
// button.addEventListener('click',(e)=>{
//     let target = e.target;
//     target.innerHTML = 'clicked';
// })


let button = document.querySelector('.like');
button.addEventListener('click',(e)=>{
    let target = e.target;
    let classlist = target.classlist;
    if (Array.from(classlist).includes('fal'))    
    {
       classlist.remove('fal');
       classlist.add('fas'); 
    }
    else    
    {
       classlist.add('fal');
       classlist.remove('fas'); 
    }
    })