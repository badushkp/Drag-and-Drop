let lists = document.getElementsByClassName('list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');

// Loop for all lists
for (list of lists){

    // Drag start function and taken into variable selected.
    list.addEventListener("dragstart", function(e){
        let selected = e.target;
        
        // adding the default drop.
        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        // When dropped, append selected to the right box.
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });
        
        // Same functionality to the left box.
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}
