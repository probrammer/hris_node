import Api from '@/services/Api'

export default {
    index (filter) {
        return Api().get('/dashboard', {
            params: {
                filter: filter
            }
        })
    }
}