document.getElementById('recruitmentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to the thank you page
            window.location.href = 'thnq.html';
        } else {
            alert('There was an issue with your submission: ' + data.message);
        }
    }).catch(error => {
        alert('There was an error: ' + error.message);
    });
});