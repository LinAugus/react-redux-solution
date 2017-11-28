
export const request = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'allin'
            })
        }, 1000)
    })
}
