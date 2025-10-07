function subscribe(){
    if (document.querySelector('.js-subscribe-button').innerText === "Subscribe") {
        document.querySelector('.js-subscribe-button').classList.add('is-subscribed');
        document.querySelector('.js-subscribe-button').innerHTML = "Subscribed";
    }
    else if (document.querySelector('.js-subscribe-button').innerText === "Subscribed") {
        document.querySelector('.js-subscribe-button').classList.remove('is-subscribed');
        document.querySelector('.js-subscribe-button').innerHTML = "Subscribe";
    }
}