document.addEventListener('DOMContentLoaded', () => {
    // Define the mapping of IDs to their respective URLs
    const pageLinks = {
        1: 'page3.html',
        2: 'page4.html',
        3: 'page5.html',
        4: 'page6.html',
        5: 'page7.html',
        6: 'page9.html',
    };

    // Add event listener to each button inside the .box-item divs
    document.querySelectorAll('.box-item button').forEach(button => {
        button.addEventListener('click', (event) => {
            // Get the parent .box-item div's ID
            const parentDiv = event.target.closest('.box-item');
            const id = parentDiv.id;

            // Check if the ID exists in the pageLinks object
            if (pageLinks[id]) {
                // Redirect to the respective page
                window.location.assign(pageLinks[id]);
               
            } else {
                alert('No page assigned for this ID.');
            }
        });
    });
});

