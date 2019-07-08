const SEPARATION_EQUAL = '=';
const SEPARATION_SEMICOMMA = ';';
const SEPARATION_NEWLINE = '\n';
const ERROR = 'ERROR';

const manipulateData = (() => {

    const storeData = (data) => {
        if(!isArray(data)) return ERROR;
        const pairObjectStr = data.map((pairObj) => convertPairObjectToStr(pairObj));
        return makeStrFromArr(pairObjectStr, SEPARATION_NEWLINE);
    }
    const convertPairObjectToStr = (obj) => {
        if(!obj) return ERROR;
        const transformedStr = Object.entries(obj).reduce((accumulator, curItem) => {
            const convertedAccStr = makeStrFromArr(accumulator, SEPARATION_EQUAL);
            const convertedCurItemStr = makeStrFromArr(curItem, SEPARATION_EQUAL);
            return `${convertedAccStr}${SEPARATION_SEMICOMMA}${convertedCurItemStr}`;
        });
        return transformedStr;
    }

    const makeStrFromArr = ((array , separation) => array.join(separation));

    const makeArrFromStr = ((str , separation) => str.split(separation));

    const isArray = ((array) => array && Array.isArray(array));
    
    const loadData = (text) => {
        if(!text) return ERROR;
        // convert string to array of pair object
        const pairObjects = makeArrFromStr(text, SEPARATION_NEWLINE);
        // loop through all pair object
        return pairObjects.map((item) => {
            // separate element of pair object
            const pairObjectsElements = makeArrFromStr(item, SEPARATION_SEMICOMMA);
            const proceededArr = pairObjectsElements.map((elm) => {
                const hashArray = makeArrFromStr(elm, SEPARATION_EQUAL);
                const key = hashArray[0];
                const value = hashArray[1];
                return {[key]: value};
            });
            const mergedObj = Object.assign(...proceededArr);
            return mergedObj;
        })
    }

    return {
        storeData,
        loadData
    }

})

module.exports = manipulateData();