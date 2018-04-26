

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}



Phone.prototype.printinfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". Extended warranty for this model cost " + this.getWarrantyCost());
};

Phone.prototype.getWarrantyCost = function() {
    return 0.1 * this.price;
}


var xiaomiRedmi = new Phone("Xiaomi", 1000, "black");
var samsungGalaxy = new Phone("Samsung", 2000, "golden");
var huaweiP = new Phone("Huawei", 1500, "white");




xiaomiRedmi.printinfo();
samsungGalaxy.printinfo();
huaweiP.printinfo();
