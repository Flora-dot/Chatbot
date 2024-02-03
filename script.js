const chatBox = document.getElementById('chat-box');
const toggleButton = document.getElementById('toggle-button');
const toggleButtonUp = document.getElementById('inactive');
const chatInput = document.getElementById('chat-input');
const chatArea = document.getElementById('chat-area');

function toggleChat() {

    if( chatBox.style.display === 'none' ) {
        chatBox.style.display = 'block';
        toggleButton.style.display = 'none';
        toggleButtonUp.style.display = 'block';
        
    } else{
        chatBox.style.display = 'none';
        toggleButton.style.display = 'block';
        toggleButtonUp.style.display = 'none';
    }
}

toggleButton.addEventListener('click', toggleChat);
toggleButtonUp.addEventListener('click', toggleChat);


function createChat(message, sender) {
    const chatDiv = document.createElement('div');
    chatDiv.classList.add(sender === 'You' ? 'chat_user' : 'chat_bot');
    chatDiv.classList.add('chat_bot');
    chatArea.appendChild(chatDiv);


    const profilePic = document.createElement('img');
    profilePic.src = "images/Profile-picture.png"; 
    profilePic.classList.add('profile-pic');
    chatDiv.appendChild(profilePic);
    

    const chatMessage = document.createElement('div');
    chatMessage.classList.add(sender === 'You' ? 'chat-user-message' : 'chat-message');
    chatMessage.classList.add('chat-message');
    chatDiv.appendChild(chatMessage);

    const chatText = document.createElement('p');
    chatText.classList.add('chat-text');
    chatText.textContent = message;
    chatMessage.appendChild(chatText);
}

const chatBotMessages = ["Hi there, my name is Hannah and i'm here to assist you.",
                         "Hello there! How can I assist you today?", 
                         "Hi, How can i help you?", "What do you need?",
                         "Let me find that information for you...", 
                         "Sure! Here is the information you requested..", 
                         "Your request has been successfully processed.", 
                         "Have a lovely day."];
let count = 0;
let lastUser = "ChatBot";


function sendMessage() {
    if(chatInput.value !== ''){
        createChat(chatInput.value, "You");
        setTimeout(() => {
            createChat(chatBotMessages[count], "ChatGPT");
            count++;
        }, 2000);
        chatInput.value = '';
    } else{
        alert('please enter a message')
    }
}


chatInput.addEventListener('keypress', function(event) {
    // Check if the 'Enter' key is pressed (key code 13 or event.key === 'Enter')
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});
