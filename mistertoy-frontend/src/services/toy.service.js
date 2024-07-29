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
    // if (!filterBy.txt) filterBy.txt = ''
    // if (!filterBy.maxPrice) filterBy.maxPrice = Infinity
    // const regExp = new RegExp(filterBy.txt, 'i')

    return httpService.get(BASE_URL, filterBy)
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
        name: '',
        price: 0,
        labels: [],
        createdAt: Date.now(),
        inStock: true,
    }
}

function getRandomToy(availableLabels) {
    return {
        name: utilService.makeLorem(2),
        price: utilService.getRandomIntInclusive(10, 300),
        labels: utilService.getRandomSubarray
            (availableLabels, utilService.getRandomIntInclusive(0, availableLabels.length - 1)),
        createdAt: Date.now(),
        inStock: Math.random() > 0.5,
    }
}

function getDefaultFilter() {
    return { txt: '', maxPrice: '', inStock: '' }
}



