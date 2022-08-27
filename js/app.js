const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

Eventos();
function Eventos(){
    formulario.addEventListener('submit',AgregarTweets);
}

function AgregarTweets(e){
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;

    if(tweet === ''){
        MostrarError('complete el campo');
        return;
    }

    const tweetObj = {
        id : Date.now(),
        tweet
    }

    tweets = [...tweets,tweetObj];
    CrearHTML();

    formulario.reset();
}

function MostrarError(mensaje){
    const msjError = document.createElement('p');
    msjError.textContent = mensaje;
    msjError.classList.add('error');

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(msjError);

    setTimeout(() => {
        msjError.remove();
    }, 3000);
}

function CrearHTML(){
    LimpiarHTML();
    if(tweets.length >0){
        tweets.forEach(tweet=>{
            const li = document.createElement('li');
            li.innerText = tweet.tweet;
            listaTweets.appendChild(li);
        });
    }
}

function LimpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.remove(listaTweets.firstChild);
    }
}