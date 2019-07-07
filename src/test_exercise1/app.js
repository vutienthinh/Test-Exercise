const SEPARATION_EQUAL = '=';
const SEPARATION_SEMICOMMA = ';';
const SEPARATION_NEWLINE = '\n';
const ERROR = 'ERROR';

const manipulateData = (() => {

    const storeData = (data) => {
        if(!isArray(data)) return ERROR;
        let pairObjectStr = data.map((item) => handlePairObject(item));
        return insertSeparation(pairObjectStr, SEPARATION_NEWLINE);
    }
    const handlePairObject = (obj) => {
        if(!obj) return ERROR;
        let transformedStr = Object.entries(obj).reduce((accumulator, curItem) => {
            let convertedAccumulator = insertSeparation(accumulator, SEPARATION_EQUAL);
            let convertedCurItem = insertSeparation(curItem, SEPARATION_EQUAL);
            return `${convertedAccumulator}${SEPARATION_SEMICOMMA}${convertedCurItem}`;
        });
        return transformedStr;
    }

    const insertSeparation = ((str , separation) => str.join(separation));

    const removeSeparation = ((str , separation) => str.split(separation));

    const isArray = ((array) => array && Array.isArray(array));
    
    const loadData = (text) => {
        if(!text) return ERROR;
        let removedNewLineArr = removeSeparation(text, SEPARATION_NEWLINE);
        return removedNewLineArr.map((item) => {
            let removedArr = removeSeparation(item, SEPARATION_SEMICOMMA);
            let resultObj = removedArr.map((elm) => {
                let hashArray = removeSeparation(elm, SEPARATION_EQUAL);
                let key = hashArray[0];
                let value = hashArray[1];
                return {[key]: value};
            })
            return resultObj;
        })
    }

    return {
        storeData,
        loadData
    }

})

module.exports = manipulateData();