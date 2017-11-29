import mockdata from '../mock/index.js';


export const request = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockdata)
        }, 1000)
    })
}
