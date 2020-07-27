import Api from '@/services/Api'

export default {
    helloWorld (search) {
        return Api().get('/dashboard', {
            params: {
                search: search
            }
        })
    }
}