import Api from '@/services/Api'

export default {
    index () {
        return Api().get('contractors')
    },
    show (id) {
        return Api().get(`contractors/${id}`)
    },
    store (data) {
        return Api().post('contractors', data)
    },
    update (id, data) {
        return Api().put(`contractors/${id}`, data)
    },
    getManagers () {
        return Api().get('managers')
    }
}