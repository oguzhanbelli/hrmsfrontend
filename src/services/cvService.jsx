
import axios from './axios/axios'


export default class cvService {

    getAll() {
        return axios.get("/cv/getall")
    }

}
