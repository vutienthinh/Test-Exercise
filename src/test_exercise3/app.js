const Enum = require('enum');
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
        let netAmount = 0;
        switch(discountType) {
            case discountPrice.IS_AN_EMPLOYEE.key: {
                netAmount = calculateDiscount(totalAmount, discountPrice.IS_AN_EMPLOYEE.value);
                break;
            }
            case discountPrice.IS_AN_AFFILIATE.key: {
                netAmount = calculateDiscount(totalAmount, discountPrice.IS_AN_AFFILIATE.value);
                break;
            }
            case discountPrice.IS_CUSTOMER_FOR_OVER_2_YEAS.key: {
                netAmount = calculateDiscount(totalAmount, discountPrice.IS_CUSTOMER_FOR_OVER_2_YEAS.value);
                break;
            }
            case discountPrice.ON_GROCERIES.key: {
                netAmount = calculateDiscount(totalAmount, discountPrice.ON_GROCERIES.value);
                break;
            }
            case discountPrice.FOR_EVERY_100$.key: {
                netAmount = calculateSpecialDiscount(totalAmount);
                break;
            }
        }
        return netAmount;
    })
    const calculateDiscount = ((totalAmount, discountPercent) => (totalAmount - (totalAmount * (discountPercent / 100))));

    const calculateSpecialDiscount = ((totalAmount) => totalAmount - (PRICE_FOR_MINIUM_DISCOUNT * Math.floor(totalAmount / MINIMUM_DISCOUNT)));

    return {
        calculateBaseOnCases,
        calculateDiscount
    }

})

// console.log(calculateAmount(100, 'IS_AN_EMPLOYEE'));

module.exports = netAmountCalculation();