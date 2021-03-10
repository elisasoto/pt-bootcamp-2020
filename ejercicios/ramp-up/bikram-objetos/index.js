const Coche = {
    marca:"",
    modelo:"",
    matricula:"",
  }
  const Casa = {
    codPostal:"",
    calle:"",
    portal:"",
    piso:"",
  }
  const FullStackDeveloper = {
    lenguajes:[],
    proyectos:[],
  }
  const Perro = {
      nombre:"",
      raza:"",
      color:"",
      edad:"",
      ladrar: function () {
          console.log("Wooof!!")
      },
      popo: function () { 
      return Math.random()*3
    }
  }
const marcaPortatil = Portatil.marca
const marcaPortatil2 = Portatil["marca"]
const grupos = Concierto.grupos
const RGB = [Led.rojo,Led.azul,Led.verde]
Portatil.modelo = "P345"
Concierto.cartelera.push ("Guns N' Roses")
Concierto.fecha = new Date ()
Impresora.imprimiendo = {
    nombreArchivo: "",
    copias:"",
    numPaginas:"",
}
const Noticia = {
    titular: "",
    cuerpo: "",
}
const Persona = {
    nombre: "",
    apellidos: "",
    edad: "",
}
const Avion = {
    numPasajeros: 0,
    despegar: function (){
        console.log("despegando")
    },
    volar: function (){
        console.log("llegando al destino")
    },
    aterrizar: function (){
        console.log("aterrizando")
    }
}
const Paquete = {
    paquete: []
}
const Pais = {
    numHabitantes: 0,
    continente: "",
    gentilicio: "",
}

const codError = O_Error.codigo

const integrantes = Grupo.integrantes

const nivelesTinta = Impresora.tinta

const especificaciones = Movil.especificaciones

Grupo.numIntegrantes = 5

Pantalla.dimensiones = "1920x1080"

Movil.temperatura = "20º"

