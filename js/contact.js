// contact ---------------------------------------------
// script 
let btn1 = document.querySelector('.click')
let hide = document.querySelector('.hide')
let btn2 = document.querySelector('.btn1')

btn1.addEventListener('click', function(){
    hide.classList.add('active')   // btn 추가 [조작]
})  //btn 이랑 active 연결


// btn2 눌렀을때 할일 hide가 안 보이기
btn2.onclick = () => {
    hide.classList.remove('active')
}







