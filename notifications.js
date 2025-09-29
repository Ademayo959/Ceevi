const clearBtn = document.querySelector('.top-left-btn');
const notification = document.querySelectorAll('.notification')

console.log(notification);

clearBtn.addEventListener('click', ()=>{
    notification.forEach((not)=> {
        not.remove();
    })
})