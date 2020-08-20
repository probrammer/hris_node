import Api from '@/services/Api'

export default {
    index () {
        return Api().get('contractors')
    },
    store (data) {
        return Api().post('contractors/store', data)
    },
    wsTest () {
        return Api().get('contractors/wsTest')
    }
}