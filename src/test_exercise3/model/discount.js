class Discount {
    constructor(type, totalBill, netAmount) {
        this._type = type,
        this._totalBill = totalBill,
        this._netAmount = netAmount
    }
    calculate() {
        console.log(1);
    }

    set netAmount(newNetAmount) {
        this._netAmount = newNetAmount;
    }

    get netAmount() {
        return this._netAmount;
    }
    
}

module.exports = Discount;