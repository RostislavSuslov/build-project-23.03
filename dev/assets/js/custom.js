const builds = document.querySelectorAll('.build');
const buildValue = document.querySelector('#build-value');
const stagesValue = document.querySelector('#stages-value');
const flatsValue = document.querySelector('#flats-value');
const buildDescriptions = document.querySelector('.build-info__descriptions');


builds.forEach(build => {
    build.addEventListener('mouseover', function() {
        const dataBuildNumber = build.getAttribute('data-build-number')
        const dataStagesNumber = build.getAttribute('data-stages-number')
        const dataFlatsNumber =  build.getAttribute('data-flats-number')
        const dataDescriptions =  build.getAttribute('data-descriptions')
        
        
        buildValue.innerHTML = dataBuildNumber
        stagesValue.innerHTML = dataStagesNumber
        buildDescriptions.innerHTML = dataDescriptions
 
    })
})
 

const floors = document.querySelectorAll('.floor')
const floorItem = document.querySelector('#floor-item')
const flatsAll = document.querySelector('#flats-all')

floors.forEach(floor =>{
    floor.addEventListener('mouseover', ()=> {
        const dataFloorItem = floor.getAttribute('data-floor-item')
        const dataFlatsAll = floor.getAttribute('data-flats-all')
        
        floorItem.innerHTML = dataFloorItem
        flatsAll.innerHTML = dataFlatsAll
    })
})
































