$(function(){
    let alert =$('.section1-alert1'); 
       
        // header 요소의 전체의 내용물을 복사
        
        // let alerth = alert.offset(50).top + alert.outerHeight()
        // header가 떨어진 거리 + header padding + border 합쳐진 높이
        
        // alertCloneContainer.appendTo('.section1')
        // alertCloneContainer.append(alertClone)
        
        for( i = 1 ;i <= 10; i++ ){
            alertClone = $('.alert-box1').contents().clone()
            alertCloneContainer = $('<div class="section1-alert-clone' + [i] + '"></div>')
            alertCloneContainer.appendTo('.section1')
            alertCloneContainer.append(alertClone)
            alertCloneContainer.append(alert)
        }

    // contact ---------------------------------------------

    // let btn1 = document.querySelector('.click')
    // let hide = document.querySelector('.hide')
    // let btn2 = document.querySelector('.btn1')

    // btn1.click(function(){
    //     $(hide).addClass('active')
    // })
    $('.skip1').click(function(e){
        e.preventDefault
        // $('.smoky span').removeClass('active')
        // $('.smoky span:nth-child(even)').removeClass('active')
        $('.smoky span').addClass('active')
        $('.smoky span:nth-child(even)').addClass('active-mi')
    })

    // $(window).resize(function(){
    //     let windowWidht  = $(window).width()
    //         if(windowWidht < 500 ){
    //             $('.inner-left').hide()
    //         }else {
    //             $('.inner-left').show()        
    //         }
    // })


})
// main  ---------------------------------------------
let arrow = document.querySelector('.conter-arrow') 

// arrow.addEventListener('click', function(){
//     window.scrollBy(100,200)
// })



// main  ---------------------------------------------
// 스킵을 눌렀을 때 할일
// 섹션1 섹션2 class 추가 display=none
let skip = document.querySelector('.skip')
// let none = document.querySelector('.none')
let sec1 = document.querySelector('.section1')
let sec2 = document.querySelector('.section2')
// let smoky = document.querySelectorAll('.smoky span')
// let event1 = document.querySelectorAll('.smoky span:nth-child(even)')
skip.addEventListener('click', function(){
    sec1.classList.add('none')
    sec2.classList.add('none')
    // smoky.classList.add('active')
    // event1.classList.add('active')
}) 


// skip.onclick = () => {
//     smoky.classList('active')
// }



// contact, portfolio, project(back클릭시 애니메이션 삭제)
// let back = document.querySelector('.back a')

// back.addEventListener('click', function(){
//     sec1.classList.add('none')
//     sec2.classList.add('none')
// })











































    // Glitch Timeline Function
// var $text = document.querySelector('.btn-glitch-active'),
// $filter = document.querySelector('.svg-sprite'),
// $turb = $filter.querySelector('#filter feTurbulence'),
// turbVal = { val: 0.000001 },
// turbValX = { val: 0.000001 };

// var glitchTimeline = function() {
// var timeline = new TimelineMax({
//     repeat: -1,
//     repeatDelay: 2,
//     paused: true,
//     onUpdate: function () {
//         $turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
//     }
// });

// timeline
//     .to(turbValX, 0.1, { val: 0.5 })
//     .to(turbVal, 0.1, { val: 0.02 });
// timeline
//     .set(turbValX, { val: 0.000001 })
//     .set(turbVal, { val: 0.000001 });
// timeline
//     .to(turbValX, 0.2, { val: 0.4 }, 0.4)
//     .to(turbVal, 0.2, { val: 0.002 }, 0.4);
// timeline
//     .set(turbValX, { val: 0.000001 })
//     .set(turbVal, { val: 0.000001 });

// // console.log("duration is: " + timeline.duration());

// return {
//     start: function() {
//         timeline.play(0);
//     },
//     stop: function() {
//         timeline.pause();
//     }
// };
// };

// btnGlitch = new glitchTimeline();

// $('.btn-glitch')
// .on('mouseenter', function () {
//       $(this).addClass('btn-glitch-active');
//       btnGlitch.start();
// })
// .on('mouseleave', function () {
//     var $this = $(this);
//     if ( $this.hasClass('btn-glitch-active') ) {
//         $this.removeClass('btn-glitch-active');
//         btnGlitch.stop();
//     }
// });