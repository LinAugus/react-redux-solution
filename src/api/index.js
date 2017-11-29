import json from '../mock/index.json';
console.log(json)

export const request = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'allin'
            })
        }, 1000)
    })
}
