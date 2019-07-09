const Discount = require('./discount.js');

class PercentageDiscount extends Discount {
    constructor(type, totalBill, netAmount, percent) {
        super(type, totalBill, netAmount);
        this._type = type,
        this._totalBill = totalBill,
        this._netAmount = netAmount,
        this._percent = percent
    }
    
    calculate() {
        this._netAmount = this._totalBill - (this._totalBill * (this._percent / 100));
    }

    set netAmount(newNetAmount) {
        this._netAmount = newNetAmount;
    }

    get netAmount() {
        return this._netAmount;
    }

}

module.exports = PercentageDiscount;