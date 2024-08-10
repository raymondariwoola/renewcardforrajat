// window.onload = function () {
//     fetchMemes();
// };

// function fetchMemes() {
//     fetch('https://api.imgflip.com/get_memes')  // Example API
//         .then(response => response.json())
//         .then(data => displayMemes(data.data.memes));
// }

// function displayMemes(memes) {
//     const container = document.getElementById('meme-container');
//     memes.forEach(meme => {
//         let img = document.createElement('img');
//         img.src = meme.url;
//         img.alt = 'Meme';
//         img.style.width = '100%';
//         img.style.marginBottom = '20px';
//         container.appendChild(img);
//     });
// }

window.onload = function() {
    fetchMeme();
  };
  
  function fetchMeme() {
    fetch('https://api.imgflip.com/get_memes')  // Example API
      .then(response => response.json())
      .then(data => displayMeme(data.data.memes));
  }
  
  function displayMeme(memes) {
    const container = document.getElementById('meme-container');
    const randomIndex = Math.floor(Math.random() * memes.length); // Get a random index
    const meme = memes[randomIndex]; // Select a random meme
  
    let img = document.createElement('img');
    img.src = meme.url;
    img.alt = 'Meme';
    img.style.width = '50%';
    container.appendChild(img);
  }
  