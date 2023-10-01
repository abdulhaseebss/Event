// const images = document.querySelector('#images');
// const image1 = document.querySelector('#image1')
// const image2 = document.querySelector('#image2')



// image1.addEventListener('mouseenter' , function(event){
//     // console.log(event.target.parentNode);
//     console.log("ul called");
//     if(event.target.tagName === 'IMG'){
//         const removeItem = event.target;
//         console.log(removeItem.parentNode);
//         removeItem.parentNode.remove();
//     }

// })

// image2.addEventListener('mouseenter', function (e) {
//     // e.stopPropagation()
//     console.log('image 2 clicked');
// })



const div = document.querySelector('#main-div')
const button = document.querySelector('button')

div.innerHTML = `<img width="400px" id="image1" src="./assets/black.jpg" alt="black">`

button.addEventListener('mouseenter' , function (event){
    div.innerHTML = `<img width="400px" id="image2" src="./assets/rodion-kutsaiev-xkEtD4Stn0I-unsplash.jpg" alt="black">`
    // console.log(div.parentNode.childNodes[5].childNodes[0]);
})

button.addEventListener('mouseout' , function (event){
    div.innerHTML = `<img width="400px" id="image1" src="./assets/black.jpg" alt="black">`
    // console.log('image2 called');

})
