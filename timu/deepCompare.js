
// a === null || typeof a !== 'object'

// 目标是： 不是object跟array的进，但是typeof null是object所以特殊处理
// 总的来看，就是放 null进、function进、数字进、字符串进、undefined进

function deepCompare(a, b) {

    if (a === null || typeof a !== 'object' || b === null || typeof b !== 'object') {
        return a === b;
    }

    if (a === b) {
        return false;
    }

    if(Object.keys(a).length !== Object.keys(b).length){
        return false;
    }
    
    return Object.keys(a).every((key) => deepCompare(a[key], b[key]));
}

// every some相当于解决了 every不能rerurn的问题