const inp1=document.querySelector('#inp1');
const tasks=document.querySelector('#ul');
// const task=document.querySelector('#ul li');



inp1.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let v1=inp1.value;
        if(v1){
            let total_tasks=tasks.children.length+1;
        
            let listhtml=` <li class="li${total_tasks}">
            <div class="unchecked"></div>
              ${v1}
              <img src="cross-svgrepo-com.svg" alt="cross" class="cross" />
            </li>`;
        
            tasks.innerHTML+=listhtml;
            console.log(v1);
            inp1.value='';
            saveData()
        }
        saveData()

    }})



const add=document.querySelector('.add');

add.addEventListener('click',()=>{
    let v1=inp1.value;
if(v1){
    let total_tasks=tasks.children.length+1;

    let listhtml=` <li class="li${total_tasks}">
    <div class="unchecked"></div>
      ${v1}
      <img src="cross-svgrepo-com.svg" alt="cross" class="cross" />
    </li>`;

    tasks.innerHTML+=listhtml;
    console.log(v1);
    inp1.value='';
    saveData()
}
})
tasks.addEventListener('click', (e) => {


    if(e.target.classList.contains('cross')){
        e.target.parentElement.remove();
        saveData()

    }
    else{
    const li = e.target.closest('li');
    if (li) {
        const div = li.querySelector('div.unchecked');
        li.style.textDecoration="none"
       
        if (div) {
            div.classList.toggle('checked');

        }


        if(div.classList.contains('checked')){
            li.style.textDecoration="line-through";
        }
        else{
            li.style.textDecoration="none";
            console.log(1)
        }
    }
    saveData()
}
});




function saveData(){
    localStorage.setItem('data',tasks.innerHTML);
   
}


function showData(){
    tasks.innerHTML=localStorage.getItem('data')
}

showData();

















// const list=document.querySelector('.tasks ul ');
// const del=document.querySelector('.cross');
// const add=document.querySelector('.add');
// let inp1=document.querySelector('#inp1');
// const ul1=document.querySelector('ul')


// list.addEventListener('click',(e)=>{
//     let icon=document.querySelector('.unchecked');
    
//     if (e.target.tagName === 'LI') {
//         const firstChild = e.currentTarget.querySelector('li > .unchecked');
//         if (firstChild) {
//             firstChild.classList.toggle('checked');
//             const textDecoration = e.target.style.textDecoration;
//             console.log(34)
//             if (textDecoration === 'line-through') {
//                 e.target.style.textDecoration = 'none';
//                 e.target.style.color='rgb(0,0,0)'
//             } else {
//                 e.target.style.textDecoration = 'line-through';
//                 e.target.style.color='rgb(0,0,0,.7)'
//             }
//         } else {
//             console.error('No first child with class "unchecked" found in clicked LI element.');
//         }
//     }
//     else if(e.target.className=='unchecked'){
//         e.target.classList.toggle('checked')
//         console.log(45)

//     }

// })


// del.addEventListener('click',(e)=>{
// e.target.parentElement.remove();
// console.log('del')

// })

// add.addEventListener('click',()=>{
//     // inp1=inp1.value;
//     let v1=inp1.value;
//     // console.log(v1)
//     inp1.value='';




//     const lihtml=`<li>
//     <div class="unchecked"></div>
//       ${v1}
//       <img src="cross-svgrepo-com.svg" alt="cross" class="cross" />
//     </li>`;

//     ul1.innerHTML+=lihtml;




// })








