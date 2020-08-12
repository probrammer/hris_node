import Api from '@/services/Api'

export default {
    index () {
        return Api().get('contractors')
    },
    wsTest () {
        return Api().get('contractors/wsTest')
    }
}