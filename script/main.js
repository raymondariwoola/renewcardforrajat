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

// window.onload = function() {
//     fetchMeme();
//   };
  
//   function fetchMeme() {
//     fetch('https://api.imgflip.com/get_memes')  // Example API
//       .then(response => response.json())
//       .then(data => displayMeme(data.data.memes));
//   }
  
//   function displayMeme(memes) {
//     const container = document.getElementById('meme-container');
//     const randomIndex = Math.floor(Math.random() * memes.length); // Get a random index
//     const meme = memes[randomIndex]; // Select a random meme
  
//     let img = document.createElement('img');
//     img.src = meme.url;
//     img.alt = 'Meme';
//     img.style.width = '50%';
//     container.appendChild(img);
//   }
  

window.onload = function() {
    fetchMeme();
  };
  
  function fetchMeme() {
    fetch('https://meme-api.com/gimme/1')
      .then(response => response.json())
      .then(data => displayMeme(data.memes[0]));
  }
  
  function displayMeme(meme) {
    const container = document.getElementById('meme-container');
    container.innerHTML = ''; // Clear previous content
    let img = document.createElement('img');
    img.src = meme.url;
    img.alt = meme.title;
  
    if (meme.nsfw) {
      img.style.filter = 'blur(8px)'; // Apply blur for NSFW content
      let overlay = document.createElement('div');
      overlay.className = 'nsfw';
      overlay.textContent = 'NSFW - Click to Reveal';
      overlay.onclick = function() {
        img.style.filter = '';
        overlay.style.display = 'none';
      };
      container.appendChild(overlay);
    }
  
    container.appendChild(img);
  }
  