import { default as axios } from "axios"
import UserService from "./UserService"


const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE'
}

const _axios = axios.create()

const configure = () => {
    _axios.interceptors.request.use((config) => {
        const cb = () => {
            config.headers.Authorization = `Bearer ${UserService.getToken()}`;
            return Promise.resolve(config)
        }
        return UserService.updateToken(cb)
    })
}

const getAxiosClient = () => _axios;

const HttpService = {
    HttpMethods,
    configure,
    getAxiosClient
}

export default HttpService