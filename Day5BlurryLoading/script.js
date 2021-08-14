const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

const scale = (number, inMin, inMax, outMin, outMax) => { // map a range of numbers to another range of numbers
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function blurring() {
    load ++

    if (load > 99) {
        clearInterval(int) //khi load chay den 100 thi clear setInterval
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale (load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

    
}