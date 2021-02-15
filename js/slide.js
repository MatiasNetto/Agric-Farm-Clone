const checkSlide1 = document.getElementById(`slide-btn-1`);
const checkSlide2 = document.getElementById(`slide-btn-2`);
const slider = document.getElementById(`slider`);

//set the position
let realPosition = 1;

//add event listeners to slider buttons
checkSlide1.addEventListener(`click`,()=>{changeSlidePosition(realPosition + 1)});
checkSlide2.addEventListener(`click`,()=>{changeSlidePosition(realPosition - 1)});

//change position
function changeSlidePosition(position) {

    if (position >= 5) {
        position = 1;
    } else if (position <= 0) {
        position = 4
    }

    if (position == 1) {
        //add buttons indicators
        slider.classList.add(`slider-pos-1`);
        slider.classList.remove(`slider-pos-2`);
        slider.classList.remove(`slider-pos-3`)
        slider.classList.remove(`slider-pos-4`)
    } else if (position == 2) {
        //add buttons indicators
        slider.classList.add(`slider-pos-2`);
        slider.classList.remove(`slider-pos-1`);
        slider.classList.remove(`slider-pos-3`);
        slider.classList.remove(`slider-pos-4`)
    } else if (position == 3) {
        //add buttons indicators
        slider.classList.add(`slider-pos-3`);
        slider.classList.remove(`slider-pos-1`);
        slider.classList.remove(`slider-pos-2`);
        slider.classList.remove(`slider-pos-4`)
    } else if (position == 4) {
        //add buttons indicators
        slider.classList.add(`slider-pos-4`);
        slider.classList.remove(`slider-pos-1`);
        slider.classList.remove(`slider-pos-2`);
        slider.classList.remove(`slider-pos-3`)
    } else {
        console.error("la posicion especificada no es valida")
    }
    //set the position
    realPosition = position;
    //reset the interval
    clearInterval(sliderInterval);
    sliderInterval = setTimeout(slideTimer,5000);
}

//automatizate the slide
function slideTimer() {
    realPosition++;
    if (realPosition == 5) {
        realPosition = 1;
    }
    changeSlidePosition(realPosition);
}

//start all
var sliderInterval = setTimeout(slideTimer,5000);




