import axios from './axios/axios'

export default class employerService {

    getAll() {
        return axios.get("/employers/getall")
    }

}
