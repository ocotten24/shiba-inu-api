function displayImage(imageUrl) {
    const imgElement = document.getElementById('dogimage');
    imgElement.src = imageUrl;
}


function loadNewImage() {
    fetch(`https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data.length > 0) {
          displayImage(data[0]);
        } else {
          console.error('No images found.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
}


const loadNewImageButton = document.getElementById('loadNewImage');
if (loadNewImageButton) {
    loadNewImageButton.addEventListener('click', loadNewImage);
}


loadNewImage();
