const btn =document.querySelector('.Talk');
const content =document.querySelector('.content');

const greetings = ['I\'m good','doing good','leave me Alone'];

const weather = [
    'lovely weather',
    'it\'s gonna rain',
    'it\'s hot Like me ;)'
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice activated');
};

recognition.onresult = function(event) {
    //console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    content.textContent =transcript;
    readOutLoud(transcript);
}

btn.addEventListener('click', () => {
    recognition.start();
})


function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text ='I dont know what you said??';

    if(message.includes('how are you')){
       const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text=finalText;
    }

    if(message.includes('weather')){
        const finalText = weather[Math.floor(Math.random() * weather.length)];
         speech.text=finalText;
     }
   
    speech.volume =1;
    speech.rate =1;
    speech.pitch=1;
    
    window.speechSynthesis.speak(speech);
}

