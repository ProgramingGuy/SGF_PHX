// © Saint Germain Foundation 2024
function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  }
