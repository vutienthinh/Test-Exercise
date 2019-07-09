const Enum = require('enum');
const Discount = require('./model/discount.js');
const PercentageDiscount = require('./model/percentage_discount.js');
const SpecialDiscount = require('./model/special_discount.js');
const PRICE_FOR_MINIUM_DISCOUNT = 5;
const MINIMUM_DISCOUNT = 100;

const discountPrice = new Enum({
    IS_AN_EMPLOYEE: 30,
    IS_AN_AFFILIATE: 10,
    IS_CUSTOMER_FOR_OVER_2_YEAS: 5,
    ON_GROCERIES: 0
});

const netAmountCalculation = (() => {

    const calculateBaseOnCases = ((totalAmount, discountType) => {
        let netAmount = totalAmount;

        // calculate for percentage discount
        const percentageDiscount = new PercentageDiscount('', totalAmount, 0, discountPrice.get(discountType).value);
        percentageDiscount.calculate();
        netAmount = percentageDiscount.netAmount;
       
        // calculate for every $100 case
        const specialDiscount = new SpecialDiscount('', netAmount, 0, MINIMUM_DISCOUNT, PRICE_FOR_MINIUM_DISCOUNT);
        specialDiscount.calculate();
        netAmount = specialDiscount.netAmount;
        return netAmount;
    });

    return {
        calculateBaseOnCases
    }

});

module.exports = netAmountCalculation();