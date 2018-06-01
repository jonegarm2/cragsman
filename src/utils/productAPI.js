import tokenService from "./tokenService";

function apiUtil(path) {
    return fetch(`/api/products/${path}`)
    .then(data => data.json())
    .catch(err => console.log(err))
}
function apiUtilAuth(path, method) {
    return fetch(`/api/products/${path}`,{
        method: method, 
        headers: method === "POST" ? {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + tokenService.getToken()
        } : null
    })
    .then(data => data.json())
}

export default {
    apiUtil,
    apiUtilAuth
}
