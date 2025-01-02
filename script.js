document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    const message = document.getElementById('message').value;

    fetch('YOUR_DISCORD_WEBHOOK_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: message })
    }).then(response => {
        if (response.ok) {
            alert('Message sent!');
        } else {
            alert('Failed to send message.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
});
