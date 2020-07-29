import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('/dashboard', {
            params: {
                search: search
            }
        })
    }
}