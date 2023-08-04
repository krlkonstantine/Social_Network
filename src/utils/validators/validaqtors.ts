export const required = (value: string) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthTC = (length: number) => (value: string) => {
    if (value.length > length) return `Max length is ${length} symbols.`
}