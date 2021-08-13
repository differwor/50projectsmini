const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')  /* = 4 */

let currentActive = 1 /* gia tri default tuong duong voi circle dang active */

next.addEventListener('click', () => { 
    currentActive++
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
    
})

prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

/** currentActive la so circle dang active */
/** If the specified class already exist, the class will not be added
 * neu lop duoc chi dinh da ton tai, lop do se ko dc them vao nua
 */
function update() {
    circles.forEach( (circle, index) => {
        if (index < currentActive) {
            circle.className.add('active')
            
        } else {
            circle.classList.remove('active')
        }
    })
    console.log(currentActive)
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}
