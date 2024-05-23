const baseUrl = "http://localhost:8080/api"

function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

export function getData(path, onSuccess) {
  //const apiUrl = new URL(path, baseUrl).href
  const apiUrl = combineURLs(baseUrl, path)
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data)
    })
    .catch((err) => {
      console.log(err.message)
    })
}

