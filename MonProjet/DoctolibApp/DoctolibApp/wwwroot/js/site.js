// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const homeLink = "http://localhost:65078/"
const form = document.querySelector("#searchForm")
const result = document.querySelector("#result")
if (form != null && form != undefined) {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        result.innerHTML = "recherche en cours..."
        const searchValue = document.querySelector("input[name='search']").value
        fetch(e.target.getAttribute("action") + "?ajax=true&search=" + searchValue).then(res => res.text()).then((response) => {
            result.innerHTML = response
        })
    })
}

const formUpload = document.querySelector("#formPraticien")
const progress = document.querySelector(".progress-bar")
const config = {
    onUploadProgress: (progressEvent) => {
        let completed = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        progress.style.width = completed + "%"
    }
}

if (formUpload != null && formUpload != undefined) {
    formUpload.addEventListener('submit', function (e) {
        e.preventDefault()
        const data = new FormData()
        for (let element of document.querySelectorAll(".field")) {
            if (element.getAttribute("type") != "file") {
                const name = element.getAttribute("name")
                const val = element.value
                data.append(name, val)
            }
        }
        const files = document.querySelector('input[type="file"]').files
        for (let i = 0; i < files.length; i++) {
            data.append("image" + i, files[i])
        }
        //data.append("titre", document.querySelector('input[name="titre"]').value)
        //data.append("prix", document.querySelector('input[name="prix"]').value)
        //data.append("description", document.querySelector('textarea[name="description"]').value)
        //data.append("images", document.querySelector('input[name="images"]').files[0])
        axios.post(e.target.getAttribute("action"), data, config).then(res => {
            if (res.data.error == false) {
                alert("Ok")
                window.location = homeLink
            }
        })
    })
}


