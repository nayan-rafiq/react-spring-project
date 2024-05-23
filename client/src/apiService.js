import axios from "axios";

const baseUrl = "http://localhost:8080/api"
const axiosOptions = {
  baseURL: baseUrl
}

if(localStorage.getItem('token')) {
  axiosOptions['headers'] = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
}

const client = axios.create(axiosOptions);

function errorResponseHandler(error, onError) {
  if(error.response) {
    if(error.response.status === 400) {
      onError(error.response.data)
    } else if(error.response.status === 403) {
      if(!window.location.href.endsWith('login')) {
        window.location.href = '/login'
      }
    } else {
      console.log('unhandled exception', error)
    }
  }
}

export function getData(path, onSuccess) {
  return client.get(path)
    .then((response) => {
      onSuccess(response.data)
    })
    .catch((err) => {
      errorResponseHandler(err)
    })
}

export function postData(path, payload, onSuccess, onError) {
  client
      .post(path, payload)
      .then((response) => {
        onSuccess(response.data)
      })
      .catch((err) => {
        errorResponseHandler(err)
      })
}
