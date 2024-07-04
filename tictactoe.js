const boxes = document.querySelectorAll('.box');
const boxeslist = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const playerturn = 1;

// Add a click event listener to each box
boxes.forEach(box => {
    box.addEventListener('click', function() {
        if (boxeslist[box.id - 1] == 0) {
            const img = document.createElement('img');
            img.src = 'images/X-Logo.png'; // Adjust the path as necessary
            img.alt = 'X Logo';
            img.style.width = '100px'; // Adjust the size as needed
            img.style.height = '100px'; // Adjust the size as needed
            boxeslist[box.id - 1] = playerturn;
            box.appendChild(img); // Append the image to the box
            console.log(boxeslist);
        }
    });
});
