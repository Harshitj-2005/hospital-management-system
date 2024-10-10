document.addEventListener('DOMContentLoaded', () => {
    // Handle box click functionality
    const boxes = document.querySelectorAll('.hospital-link');

    boxes.forEach(box => {
        box.addEventListener('click', (event) => {
            // Optional: Add custom logic here
            // e.g., analytics tracking or confirmation dialogs

            // Get the href attribute of the clicked box
            const url = box.getAttribute('href');

            // Optional: Check if URL is defined and valid
            if (url && url.startsWith('http')) {
                // Redirect to the URL
                window.location.href = url;
            } else {
                console.error('Invalid URL:', url);
            }

            // Uncomment the line below if you want to prevent the default link behavior
            // event.preventDefault();
        });
    });

    // Handle modal functionality
   // Get the modal and emergency button
   var modal = document.getElementById("emergencyModal");
   var emergencyBtn = document.querySelector('.Emergency img');
   var span = document.getElementsByClassName("close")[0];

   // When the emergency icon is clicked, open the modal
   if (emergencyBtn) {
       emergencyBtn.onclick = function () {
           modal.style.display = "block";
       }
   }

   // When the close button is clicked, close the modal
   if (span) {
       span.onclick = function () {
           modal.style.display = "none";
       }
   }

   // When clicking outside the modal, close it
   window.onclick = function (event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }
});
