const getFirstValue = (obj) => (Object.entries(obj)[0][1])

const checkInstance = (elem) => {
    if (elem instanceof Array && elem instanceof Object) {
        return 'array'
    } else if (!(elem instanceof Array) && elem instanceof Object) {
        return 'object'
    } else if (typeof elem === 'string') {
        return 'string'
    } else if (typeof elem === 'number') {
        return 'number'
    }
}

module.exports = {
    getFirstValue,
    checkInstance
}