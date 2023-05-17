import axios from "axios"
import { baseUrl } from "./components/constants/constants"

const instance = axios.create({
    baseURL:baseUrl
})

export default instance;