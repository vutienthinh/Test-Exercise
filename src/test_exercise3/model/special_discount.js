const Discount = require('./discount.js');

class SpecialDiscount extends Discount {
    constructor(type, totalBill, netAmount, threshold, deductionAmount) {
        super(type, totalBill, netAmount);
        this.type = type,
        this.totalBill = totalBill,
        this.netAmount = netAmount,
        this.threshold = threshold,
        this.deductionAmount = deductionAmount
    }
    calculate() {
        this.netAmount = this.totalBill - (this.deductionAmount * Math.floor(this.totalBill / this.threshold));
    }
}