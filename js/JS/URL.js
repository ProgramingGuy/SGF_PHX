// © Saint Germain Foundation 2024
// JavaScript code to set custom URL for page name
document.addEventListener('DOMContentLoaded', function() {
    function setCustomURL(buttonId) {
      var button = document.getElementById(buttonId);
      var customURL = button.dataset.url;
      if (button && customURL) {
        button.addEventListener('click', function() {
          window.location.href = customURL;
        });
      }
    }

    setCustomURL("home"); // Home button redirects to default URL
    setCustomURL("test"); // Set custom URL for Test button
  });