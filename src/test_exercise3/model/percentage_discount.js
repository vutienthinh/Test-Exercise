const Discount = require('./discount.js');

class PercentageDiscount extends Discount {
    constructor(type, totalBill, netAmount, percent) {
        super(type, totalBill, netAmount);
        this.type = type,
        this.totalBill = totalBill,
        this.netAmount = netAmount,
        this.percent = percent
    }
    calculate() {
        this.netAmount = this.totalBill - (this.totalBill * (this.percent / 100));
    }

}

module.exports = PercentageDiscount;