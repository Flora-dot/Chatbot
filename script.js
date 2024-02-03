const chatBox = document.getElementById('chat-box');
const toggleButton = document. getElementById('toggle-button');

function toggleChat() {
    if( chatBox.style.display === 'none' ) {
        chatBox.style.display === 'block';
    } else{
        chatBox.style.display === 'block';
    }
}

toggleButton.addEventListener('click', toggleChat);