export const formatNumberWithSpaces = (value: number) => {
    const digits = String(value)
    let result = ''

    for (let i = digits.length - 1, count = 0; i >= 0; i--, count++) {
        if (count > 0 && count % 3 === 0) {
            result = ' ' + result
        }
        result = digits[i] + result
    }

    return result
}
