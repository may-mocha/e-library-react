import axios from "axios"
import config from "./config.json"

axios.defaults.baseURL = config.base_url[
  window.location.hostname === 'localhost' ?
    'dev' :
    'prod'
]

export const http = props => axios({ ...props }).then(res => res.data)

