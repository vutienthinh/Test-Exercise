const Discount = require('./discount.js');

class SpecialDiscount extends Discount {
    constructor(type, totalBill, netAmount, threshold, deductionAmount) {
        super(type, totalBill, netAmount);
        this._type = type,
        this._totalBill = totalBill,
        this._netAmount = netAmount,
        this._threshold = threshold,
        this._deductionAmount = deductionAmount
    }

    calculate() {
        this._netAmount = this._totalBill - (this._deductionAmount * Math.floor(this._totalBill / this._threshold));
    }

    set netAmount(newNetAmount) {
        this._netAmount = newNetAmount;
    }

    get netAmount() {
        return this._netAmount;
    }
}

module.exports = SpecialDiscount;