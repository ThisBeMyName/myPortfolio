// Voice RSS: http://www.voicerss.org/api/
// RapidAPI - Text to speech: https://rapidapi.com/voicerss/api/text-to-speech-1?endpoint=53aa3ba6e4b07e1f4ebea8c8

const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// VoiceRSS Javascript SDK

// Disable/enable Button
function toggleButton() {
    button.disabled = !button.disabled;
}

// Passing joke to VoiceRSS API
function tellMe(joke) {
    console.log('tell me:', joke);
    VoiceRSS.speech({
        key: '75967e354c0443c7afacc2c08d38fc7f',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Get Jokes from Joke API
async function getJokes () {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
                joke = data.joke;
        }
        // Text to speach    
        tellMe(joke);
        // Disable Button
        toggleButton();
    } catch (error) {
        // Catch errors here
        console.log('whoops..', error);
    }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);