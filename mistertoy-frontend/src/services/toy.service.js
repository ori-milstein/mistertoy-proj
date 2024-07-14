import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const BASE_URL = 'toy/'

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
    // if (!filterBy.txt) filterBy.txt = ''
    // if (!filterBy.maxPrice) filterBy.maxPrice = Infinity
    // const regExp = new RegExp(filterBy.txt, 'i')
    // return storageService.query(STORAGE_KEY)
    //     .then(toys => {
    //         return toys.filter(toy =>
    //             regExp.test(toy.vendor) &&
    //             toy.price <= filterBy.maxPrice
    //         )
    //     })
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)

}
function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}

function getEmptyToy() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
        speed: utilService.getRandomIntInclusive(75, 200),
    }
}

function getDefaultFilter() {
    return { txt: '', maxPrice: '' }
}



