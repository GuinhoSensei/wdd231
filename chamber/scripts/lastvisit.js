document.addEventListener('DOMContentLoaded', function() {
    var messageElement = document.getElementById('message');
    var lastVisit = localStorage.getItem('lastVisit');
  
    if (!lastVisit) {
      messageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      var currentDate = new Date();
      var diffInMs = currentDate - new Date(lastVisit);
      var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  
      if (diffInDays < 1) {
        messageElement.textContent = "Back so soon! Awesome!";
      } else {
        var message = "You last visited ";
        message += diffInDays + " " + (diffInDays === 1 ? "day" : "days") + " ago.";
        messageElement.textContent = message;
      }
    }
  
    // Update localStorage with current visit date
    localStorage.setItem('lastVisit', new Date().toISOString());
  });