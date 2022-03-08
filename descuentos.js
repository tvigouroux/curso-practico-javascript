const priceFinal = (priceInitial, discount) => priceInitial * (1-(discount/100));

function calculateDiscount() {
    const originalPrice = parseInt(document.getElementById("InputPrice").value);
    const discount = parseInt(document.getElementById("InputDiscount").value);
    const finalPrice = priceFinal(originalPrice, discount).toFixed(2);
    document.getElementById("resultP").innerHTML = "Your final price is $" + finalPrice;
}