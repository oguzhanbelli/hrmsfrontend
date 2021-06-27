import { IdNumberIcon } from 'evergreen-ui'
import axios from './axios/axios'

export default class jobAdvertisementService {
    getAdvertisements() {
        return axios.get("/adversitements/getActive")
    };
    getPageable(pageNo,pageSize) {
        return axios.get("/adversitements/getAllByPage?pageNo="+pageNo+"&pageSize="+pageSize)
    };
    getPassiveAdvertisements() {
        return axios.get("/adversitements/getAllPassive")
    };
    passiveAdvertisementsActive(id,active) {
        return axios.put("/adversitements/updateActive?active="+active+"&id="+id)
    };


    addAdvertisement(values) {
        return axios.post("/adversitements/addAd",values)
    };

}


