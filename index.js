document.addEventListener('DOMContentLoaded', () => {
    const getJokeBtn = document.getElementById('getJokeBtn');
    const jokeContainer = document.getElementById('jokeContainer');
  
    getJokeBtn.addEventListener('click', async () => {
      try {
        const response = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
        const jokeData = await response.json();
        jokeContainer.innerHTML = jokeData.joke;
      } catch (error) {
        console.error('Error fetching geek joke:', error.message);
      }
    });
  });
  