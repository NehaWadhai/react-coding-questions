//Event Bubbling and Capturing/Trickling 
//In JavaScript, event bubbling and capturing (also known as event trickling) are two phases of event propagation in the Document Object Model (DOM). 
//When an event occurs on an element, it doesn't just affect that element; it can also affect its ancestors in the DOM tree.


//Syntax for adding event listeners with capturing and bubbling phases

// addEventHandler('click', ()=>{}, usecapture);
//useCapture is a boolean value that indicates whether the event should be captured during 
//the capturing phase (true) or the bubbling phase (false). By default, it is set to false (bubbling phase).

//by default it is bubbleling phase

document.querySelector('#grandparent').addEventListener('click', function() {
console.log('Grandparent clicked');
}); // Capturing phase

document.querySelector('#parent').addEventListener('click', function() {
    console.log('Parent clicked');
    });

document.querySelector('#child').addEventListener('click', function() {
        console.log('Child clicked');
},true);