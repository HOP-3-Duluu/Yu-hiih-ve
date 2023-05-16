import axios from "axios";
import { API } from "@env";

export const AwsAPI = axios.create({
    baseURL: API,
})

export default AwsAPI;