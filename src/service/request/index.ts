import axios, {AxiosInstance, CreateAxiosDefaults} from 'axios'


class HttpClient {
  service: AxiosInstance

  constructor(config: CreateAxiosDefaults) {
    this.service = axios.create(config)
  }

/*  get<T>(url: string, params: any, config){
    this.service.get()
  }

  post<T>(){

  }*/


}

export default HttpClient