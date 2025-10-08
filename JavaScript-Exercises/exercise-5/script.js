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
function calculateShipping(){
    let price = document.getElementById("price").value;
    let shipping = 0;

    if (price < 50){
        shipping = 10;
        document.getElementById("shipping-cost").innerHTML = "Total Cost: " + eval(Number(price) + 10);
    }

    else if (price >= 50){
        document.getElementById("shipping-cost").innerHTML = "Total Cost: " + price;
    }

    else if (price <= 0){
        document.getElementById("shipping-cost").innerHTML = "Please enter a valid price";
    }
}