const x = document.querySelector('.topics')
document.querySelector('.menu').addEventListener('click', function (){
    if(x.classList.contains('active')){
        x.classList.remove('topics-movement')
    }
    else{
        x.classList.add('topics-movement')
        x.classList.add('active')
    }
})

