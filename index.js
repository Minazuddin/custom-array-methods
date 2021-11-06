const { checkInstance, getFirstValue } = require('./helpers')

const randomize = (arr) => {
    try {
        if (checkInstance(arr) === 'array') {
            return arr
                .map((e) => ({
                    val: e,
                    r: Math.random(),
                }))
                .sort((a, b) => b.r - a.r)
                .map((e) => e.val);
        } else {
            throw new Error(`Expected Array Argument, But Got ${typeof arr}`)
        }
    } catch (e) {
        console.log('Error Randomize::', e)
    }
};

const removeElement = (arr, elem) => {
    if (checkInstance(elem) === 'object') {
        let index = arr.findIndex(el => getFirstValue(e) === getFirstValue(elem))
        if (index !== 0) {
            arr.splice(index, 1)
        }
    } else if (checkInstance(elem) === 'string' || checkInstance(elem) === 'number') {
        let index = arr.indexOf(elem)
        if (index !== -1) {
            arr.splice(index, 1)
        }
    }
    return arr;
}

const updateElement = (arr, oldEl, newEl) => {
    if (checkInstance(oldEl) === 'object') {
        let index = arr.findIndex(el => getFirstValue(el) === getFirstValue(oldEl))
        if (index !== 0) {
            arr.splice(index, 1, newEl)
        }
    } else if (checkInstance(oldEl) === 'string' || checkInstance(oldEl) === 'number') {
        let index = arr.indexOf(oldEl)
        if (index !== -1) {
            arr.splice(index, 1, newEl)
        }
    }
    return arr;
}

const removeDuplicates = (arr) => {
    let sample = arr[0];
    if (checkInstance(sample) === 'object') {
        const unique = []
        arr.forEach((item) => {
            const uniquedb = unique.map(e => getFirstValue(e));
            if (!uniquedb.includes(getFirstValue(item))) {
                unique.push(item)
            }
        })
        return unique;
    } else if (checkInstance(sample) === 'string' || checkInstance(sample) === 'number') {
        return [...new Set(arr)]
    }
}

const cart_from_store = [
    {
        id: 43,
        item_id: 158
    }
]

console.log()

module.exports = {
    randomize,
    updateElement,
    removeElement,
    removeDuplicates
}