/**
 * Created by zhangsha on 16-8-7.
 */
function checkPostcodeAndTip(postCode) {
    let flag = isValidCode(postCode);
    let flag1 = getCodeNumber(postCode);
    let flag2 = isValidCodeLength(flag1);

    if (flag === false) {
        return {error: `Input can not be illegal characters`, barcode: ``};
    }

    if (flag1 === false) {
        return {error: `'-' position wrong`, barcode: ``};
    } else {
        let newPostcode = getCodeNumber(postCode);
        let flag2 = isValidCodeLength(newPostcode);
        if (flag2 === false) {
            return {error: `numbers of input must be 5/9`, barcode: ``};
        }
    }

    if (flag && flag2 && flag1 != 'error') {
        return {error: ``, barcode: ``};
    }
}

function isValidCode(code) {
    return /^[\d-]+$/.test(code);
}

function getCodeNumber(postCode) {
    if (postCode.indexOf('-') !== -1) {
        if (postCode.indexOf('-') === 5) {
            let splitCode = postCode.split('-');
            return splitCode[0] + splitCode[1];
        } else {
            return false;
        }
    } else {
        return postCode;
    }
}

function isValidCodeLength(postCode) {
    return postCode.length === 5 || postCode.length === 9;
}
