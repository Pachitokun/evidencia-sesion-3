const botonmascotajugador = document.getElementById('botonmascota')
const botonfuego = document.getElementById('botonagua')
const botonagua = document.getElementById('botonfuego')
const botontierra = document.getElementById('botontierra')
const ButtomReload= document.getElementById('botonreinicar')


const spanmascotajugador = document.getElementById('mascotajugador')

const spanvidasjugador = document.getElementById("vidasjugador")
const spanvidasenemigo = document.getElementById("vidasenemigo")

const SectionMensajes = document.getElementById("mensajes")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")



let mokepones = []
let ataquejugador
let ataqueenemigo
let OpcionDeMokepones
let inputgreninja
let inputcharizad 
let inputvulvasur 
let vidasjugador = 3
let vidasenemigo = 3

class Mokepon 
{
    constructor(Name, Photo, Life) 
    {
        this.Name = Name
        this.Photo = Photo
        this.Life = Life
        this.attack = []
    }
}

let greninja = new Mokepon("Greninja", "./Images/greninja_mokepon.png", 5)
let charizad = new Mokepon("Charizad", "./Images/Charizard_mokepon.png", 5)
let vulvasur = new Mokepon("Vulvasur", "./Images/Bulbasour_mokepon.png", 5)


greninja.attack.push(
    { Name: "💧", id: "botonagua" },
    { Name: "💧", id: "botonagua" },
    { Name: "💧", id: "botonagua" },
    { Name: "🔥", id: "botonfuego" },
    { Name: "🌱", id: "botontierra" },
)
charizad.attack.push(
    { Name: "🔥", id: "botonagua" },
    { Name: "🔥", id: "botonagua" },
    { Name: "🔥", id: "botonagua" },
    { Name: "🌱", id: "botonfuego" },
    { Name: "💧", id: "botontierra" },
)
vulvasur.attack.push(
    { Name: "🌱", id: "botonagua" },
    { Name: "🌱", id: "botonagua" },
    { Name: "🌱", id: "botonagua" },
    { Name: "💧", id: "botonfuego" },
    { Name: "🔥", id: "botontierra" },
)

mokepones.push(greninja, charizad, vulvasur)

function iniciarjuego() {

    mokepones.forEach((Mokepon) => {
        OpcionDeMokepones = ` 
        <input type="radio" name="mascota" id=${Mokepon.Name} />
        <label class="tarjeta-de-mokepon" for=${Mokepon.Name} ></label>
        <div class="card" >
                    <div class="card-image"><img src=${Mokepon.Photo} alt=${Mokepon.Name}
                    width="260px" height="240px"></div>
                <div class="card-text">
                    <span class="date-1">1 days ago</span>
                    <h2><i class="fa-fire"></i> ${Mokepon.Name} </h2>
                    <p>es un Pokémon de tipo agua/siniestro introducido en la sexta generación. 
                        Es la evolución de Frogadier.</p>
                </div>
                <div class="card-stats card-1">
                    <div class="stat">
                        <div class="value">40,0 kg</div>
                        <div class="type">agua/siniestro</div>
                    </div>
                    <div class="border"></div>
                    <div class="stat">
                        <div class="value">5123</div>
                        <div class="type">views</div>
                    </div>
                    <div class="border"></div>
                    <div class="stat">
                        <div class="value">32</div>
                        <div class="type">comment</div>
                    </div>
        </div>`
        contenedorTarjetas.innerHTML += OpcionDeMokepones

        inputgreninja = document.getElementById("Greninja")
        inputgreninja = document.getElementById("Charizad")
        inputgreninja = document.getElementById("Vulvasur")
    })
    botonmascotajugador.addEventListener("click", seleccionarmascotajugador)
    botonfuego.addEventListener("click", ataquefuego)
    botonagua.addEventListener("click", ataqueagua)
    botontierra.addEventListener("click", ataquetierra)
    
   
}

function seleccionarmascotajugador() {
    

    if (inputgreninja.checked) {
        spanmascotajugador.innerHTML = 'greninja'
    }else if (inputcharizad.checked) {
        spanmascotajugador.innerHTML = 'charizad'
    } else if (inputvulvasur.checked) {
        spanmascotajugador.innerHTML = 'vulvasur'
    } else {
        alert('selecciona una mascota')
    }
    
}

    function seleccionarmascotaenemigo() {
    let mascotaaleatorio = aleatorio(1,3)
    let spanmascotaenemigo = document.getElementById(mascotaenemigo)
    
    if(mascotaaleatorio == 1) {
        spanmascotaenemigo.innerHTML = 'greninja'
    } else if (mascotaaleatorio == 2) {
        spanmascotaenemigo.innerHTML = 'charizad'
    } else {
        spanmascotaenemigo.innerHTML = 'vulvasur'
    }
}

function ataquefuego() {
    ataquejugador = "fuego"
    ataquealeatorioenemigo()
}
function ataqueagua() {
    ataquejugador = "agua"
    ataquealeatorioenemigo()
}
function ataquetierra() {
    ataquejugador = "tierra"
    ataquealeatorioenemigo()
}

function ataquealeatorioenemigo() {
    let ataquealeatorio = aleatorio(1,3)

    if (ataquealeatorio == 1 ) {
        ataqueenemigo = 'fuego'
    } else if (ataquealeatorio == 2) {
        ataqueenemigo = 'agua'
    } else {
        ataqueenemigo = 'tierra'
    }


    crearmensajes()
}

function combate() {

    if(ataqueenemigo  == ataquejugador) {
        crearmensajes("empate")
    } else if (ataquejugador == 'fuego' && ataqueenemigo == 'tierra') {
        crearmensajes("ganaste")
        vidasenemigo--
        spanvidasenemigo.innerHTML = 'vidasenemigo'
    } else if (ataquejugador == agua && ataqueenemigo == 'fuego') {
        crearmensajes("ganaste")
        vidasenemigo--
        spanvidasenemigo.innerHTML = 'vidasenemigo'
        
    } else if (jugador == tierra && ataqueenemigo == 'agua') {
        crearmensajes("ganaste")
        vidasenemigo--
        spanvidasenemigo.innerHTML = 'vidasenemigo'
    } else {
        crearmensajes("perdiste")
        vidasjugador--
        spanvidasjugador.innerHTML = 'vidasjugador'
    }
}

function revisarvidas() {
    if (vidasenemigo == 0){
        crearmensajesfinal("felicitaciones ganaste")
    } else if (vidasjugador == 0) {
        crearmensajesfinal("lo siento perdiste")
    }
}

function crearmensajes(resultado) {

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con' + ataquejugador + ',la mascota del enemigo ataco con ' + ataqueenemigo  + '- ' + resultado 

    sectionmensajes.appendChild(parrafo)
}

function crearmensajesfinal(resultadofinal) {
    

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con' + ataquejugador + ',la mascota del enemigo ataco con ' + ataqueenemigo   + '- ' + resultado

    sectionmensajes.appendChild(parrafo)
}

function reiniciarjuego() {
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener("load", iniciarjuego)