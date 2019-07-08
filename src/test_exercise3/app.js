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
    ON_GROCERIES: 0,
    FOR_EVERY_100$: 0,
});

const netAmountCalculation = (() => {

    const calculateBaseOnCases = ((totalAmount, discountType) => {
        let netAmount = totalAmount;
        let percentageDiscount = new PercentageDiscount('', totalAmount, 0, discountPrice.get(discountType).value);
        percentageDiscount.calculate();
        // percentageDiscount.
        // switch(discountType) {
        //     case discountPrice.IS_AN_EMPLOYEE.key: {
        //         let 
        //         netAmount = calculateDiscount(totalAmount, discountPrice.IS_AN_EMPLOYEE.value);
        //         break;
        //     }
        //     case discountPrice.IS_AN_AFFILIATE.key: {
        //         netAmount = calculateDiscount(totalAmount, discountPrice.IS_AN_AFFILIATE.value);
        //         break;
        //     }
        //     case discountPrice.IS_CUSTOMER_FOR_OVER_2_YEAS.key: {
        //         netAmount = calculateDiscount(totalAmount, discountPrice.IS_CUSTOMER_FOR_OVER_2_YEAS.value);
        //         break;
        //     }
        //     case discountPrice.ON_GROCERIES.key: {
        //         netAmount = calculateDiscount(totalAmount, discountPrice.ON_GROCERIES.value);
        //         break;
        //     }
        // }
        // calculate for every $100 case
        // netAmount = calculateSpecialDiscount(netAmount);
        // return netAmount;
    })
    const calculateDiscount = ((totalAmount, discountPercent) => (totalAmount - (totalAmount * (discountPercent / 100))));

    const calculateSpecialDiscount = ((totalAmount) => totalAmount - (PRICE_FOR_MINIUM_DISCOUNT * Math.floor(totalAmount / MINIMUM_DISCOUNT)));

    return {
        calculateBaseOnCases,
        calculateDiscount
    }

})

// console.log(calculateBaseOnCases(990, 'IS_AN_EMPLOYEE'));

module.exports = netAmountCalculation();