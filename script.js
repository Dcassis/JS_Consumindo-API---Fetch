// https://sujeitoprogramador.com/rn-api/?api=posts

let listElement = document.querySelector("#app")
let posts = []

function nutriApp() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
        .then((response) => response.json())
        .then((json) => {
            posts = json
            
            posts.map((post) => {
                let liElement = document.createElement("li")
                let titleElement = document.createElement("strong")
                let imgElement = document.createElement("img")
                let descritionElement = document.createElement("a")

                let titleText = document.createTextNode(post.titulo)

                titleElement.appendChild(titleText)
                liElement.appendChild(titleElement)
                imgElement.src = post.capa
                liElement.appendChild(imgElement)

                let descriptionText = document.createTextNode(post.subtitulo)
                descritionElement.appendChild(descriptionText)
                liElement.appendChild(descritionElement)

                listElement.appendChild(liElement)


            })
        })
        .catch(() => {
        console.log("Deu algum erro!")
    })
}

nutriApp()