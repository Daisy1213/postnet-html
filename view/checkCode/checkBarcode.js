/**
 * Created by zhangsha on 16-8-7.
 */
function checkBarcodeAndTip(barcode) {
    let flag = isValidBarcodeDigit(barcode);
    let flag1 = isHasFrame(barcode);
    let flag2 = isValidBarcodeLength(barcode);

    if (flag === false) {
        return {error: `Input can not be illegal characters`, postCode: ``};
    }

    if (flag1 === false) {
        return {error: `Input must have fix frame`, postCode: ``};
    }

    if (flag2 === false) {
        return {error: `Input number of digits must be 6/10`, postCode: ``};
    }

    if (flag && flag1 && flag2) {
        return {error: ``, postCode: ``};
    }
}

function isValidBarcodeDigit(barcode) {
    return /^[\|: ]+$/.test(barcode);
}

function isHasFrame(barcode) {
    return barcode.slice(0, 2) === "| " && barcode.slice(-2) === " |";
}

function isValidBarcodeLength(barcode) {
    let array1 = barcode.slice(2, -2).split(" ");
    return array1.length === 6 || array1.length === 10;

}

