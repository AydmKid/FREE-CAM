// Get modal elements
const modal = document.getElementById('modal');
const modalPhoto = document.getElementById('modal-photo');
const closeBtn = document.querySelector('.close-btn');

// Attach click event to all photos
document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', function () {
        // Open modal and display clicked photo
        modal.style.display = 'flex';
        modalPhoto.src = this.src;
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
