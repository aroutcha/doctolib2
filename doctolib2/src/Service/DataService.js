import axios from "axios"
export const contacts = []
const urlBase = "http://localhost:3000"
export const getContacts = () => {
  
    return axios.get(`${urlBase}/contacts`)

}
let compteurContact = 1



export const ajouterContact = (contact) => {

    return axios.post(`${urlBase}/contact`, {...contact})
}

export const search = (filter) => {
 

    return axios.get(`${urlBase}/contacts/${filter}`)
}

export const getContactById = (id) => {
    //return annonces.find(a => a.id == id)
    return axios.get(`${urlBase}/contact/${id}`)
}

const users = [
    {login : 'formation', password : '123456'}
]
export let isLogged = false
export const login = (login, password) => {
    const u = users.find(l => l.login == login && l.password == password)
 
    return u != undefined
}
export const changeIsLogged = (log) => {
    isLogged = log
}