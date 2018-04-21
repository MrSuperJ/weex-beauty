import { steamGet } from './steam'
import { resolve } from 'url';
const main = 'http://192.168.1.101:7001/'
export function getImgUrl(datas) {
    return new Promise(function(resolve, reject) {
        steamGet(main + 'getImg.html', datas).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}