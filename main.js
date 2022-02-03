
document.getElementById('selectedPerfume').addEventListener('change', (e)=>{
    document.getElementById('selectedPerfume').value;
});

document.getElementById('message').style.display = 'none';
document.getElementById('errorMessage').style.display = 'none';
document.getElementById('placeOrder').style.display = 'none';

document.getElementById('submitOrder').addEventListener('click', (e)=>{
    const productPrice = document.getElementById('selectedPerfume').value;
    const quantityOfGoods = document.getElementById('quantityInput').value;
    if (productPrice == ''){
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorMessage').innerHTML = 'Choose your desired product';
    }
    else if (quantityOfGoods == ''){
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorMessage').innerHTML = 'Input your desired quantity';
    }
    else{
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('message').style.display = 'block';
        document.getElementById('placeOrder').style.display = 'block';
        document.getElementById('submitOrder').style.display = 'none';
        document.getElementById('selectedPerfume').style.display = 'none';
        document.getElementById('quantityPrompt').style.display = 'none';
        document.getElementById('message').innerHTML = 'Total Cost: #' + productPrice * quantityOfGoods;
    }
});

document.getElementById('placeOrder').addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('Thank you for your patronage.');
});