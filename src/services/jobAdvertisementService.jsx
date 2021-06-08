
import axios from './axios/axios'

export default class jobAdvertisementService {

    getAdvertisements() {
        return axios.get("/adversitements/getAllAd")
    }

}


