const discountCoupons = [10,15,20,30,50];

const priceFinal = (priceInitial, discount) => priceInitial * (1-(discount/100));

function fillSelect(list) {
    let options = "";
    for (const element of list) {
        options = options + '<option value="' + element + '">' + element + '</option>';
        console.log(options);
    }
    document.getElementById("InputDiscount").innerHTML = options;
}

function calculateDiscount() {
    const originalPrice = parseInt(document.getElementById("InputPrice").value);
    const discount = parseInt(document.getElementById("InputDiscount").value);
    const finalPrice = priceFinal(originalPrice, discount).toFixed(2);
    document.getElementById("resultP").innerHTML = "Your final price is $" + finalPrice;
}