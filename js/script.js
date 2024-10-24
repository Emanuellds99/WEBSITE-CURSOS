function openModal(src) {
    const modal = document.getElementById('software-developer-6521720_1280.jpg');
    const modalImg = document.getElementById('istockphoto-1830126474-2048x2048.jpg');
    modalImg.src = src;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
