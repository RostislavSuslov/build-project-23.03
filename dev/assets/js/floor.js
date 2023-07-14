 
window.addEventListener('load', function(){
    document.querySelector('.floor-plan-page') ? installFloorPlan() : console.log("не та страница((");
   

    function installFloorPlan() {
        
    }
})

 





























const flats = document.querySelectorAll('.flat')
flats.forEach(flat => {
    if(flat.classList.contains('booking')){
        flat.querySelector('.status-text').innerHTML = "Бронь"
    } else if (flat.classList.contains('action')){
        flat.querySelector('.status-text').innerHTML = "Акция"
    } else if (flat.classList.contains('sold')){
        flat.querySelector('.status-text').innerHTML = "Продано"
    } else {
        flat.querySelector('.status-text').innerHTML = "Свободна"
    }
})