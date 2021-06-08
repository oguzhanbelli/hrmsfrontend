
import axios from './axios/axios'

export default class candidateService {

    getAll() {
        return axios.get("/candidates/getall")
    }

}
