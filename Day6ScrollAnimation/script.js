const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes) // bat su kien khi scroll down

checkBoxes() // khi bắt đầu render 

function checkBoxes() {
    const triggerBottom = window.innerHeight * (9/10) // khi cuộn xuống box nào có top lớn hơn 1/9 height của window
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top // trả về thông số của phần tử box, ở đây là top :
        
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}



