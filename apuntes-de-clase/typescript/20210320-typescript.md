# Typescript

tipescript es un lenguaje tipado, es decir JS + TIPOS

ts no es capaz de compilar el navegador con lo cual hacemos una pre-compilacion. 

cuando lo pasamos a js ya no tiene tipos, esto se llama transpilar, por defecto transpila a ES3

Instalación global del compilador

`npm install -g typescript`

> Los archihvos los creamos con un .ts

para transpilar: en consola. tsc.index.ts

después de este si podemos hacer node index.js

## INTERFACES Y TIPOS 

a) INTERFAZ especie de contrato entre como formamos un objeto y como queremos que ese objeto sea y vaya a cumplementarse

b) TIPOS: 
- Los mismos que en javascript (string, boolean, etc...)

    tipando: 

    ```` 
    const greet:string = 'hola';
    const age:number = 31;
    const isFalse:boolean = false;
    const list:number[] = [1,2,3,4]
    const whatever:any = 24
    const noIdea:unknown = 'greet'

    ````

    Una vez que hacemos esto, el tipo no permite cambiar el tipo de dato que estamos insertando. 


    Tampoco podemos meter un numero donde hay un string u otro tipo de dato no perteneciente al tipado que hemos definido. 

    Si definimos un array de number,este, solo puede contener numeros. 

    `any` es como si no tiparamos, acepta cualquier tipo de dato. 

    `unknown` no conocemos el tipo que viene 

    **por defecto como transpila en ES3 todas las constantes se vuelven `var`**

- tipos de datos compuestos

**Objetos**

````
interface UserInterface {
    name:string;
    age:number;
    address?:string;
    hobbies:string[];
};

const user:UserInterface = {
    name: 'Alicia', 
    age: 27, 
    address: 'Calle de Berlin 7'
    hobbies: ['drawing','videogames','futbol'],
}

````

> Una interfaz es un contrato entre nosotros y lo que vamos a crear. 

Cuando creamos un objetvo y utilizamos la interfaz como base de creacion va a tener que cumplir esa especie de contrato. 

Con el signo de `?` delante si un campo no lo ponemos en el objeto, este no requere como propiedad obligatoria. 

**type** => este es el que vamos a usar en `React`

````
type UserType = {
    name:string;
    age:number;
    address?:string;
    hobbies:string[];
    registered:boolean;
}

const user:UserType = {
    name: 'Alicia', 
    age: 27, 
    address: 'Calle de Berlin 7'
    hobbies: ['drawing','videogames','futbol'],
    registered: false,
}
````

**funciones**


````
type UserType = {
    name:string;
    age:number;
    address?:string;
    hobbies:string[];
    registered:boolean;
    greet():string;
    // greet():void;
    // greet(prop?:string):void;
}

const user:UserType = {
    name: 'Alicia', 
    age: 27, 
    address: 'Calle de Berlin 7'
    hobbies: ['drawing','videogames','futbol'],
    registered: false,
    greet: ()=> 'hello',
    //greet: console.info('>greet: ', user.greet())
    //greet: (name) => console.info('hello ${name}')
}

console.info('>greet: ', user.greet())
//console.info(user.greet())
//console.info(user.greet('name'))

````

## CONFIGURACION

creammos un fichero `tsconfig.json`

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    //"sourceMap": true
    "outDir": "out"
  }
}
`````

- sourceMap nos sirve para poder debugar
- module es la manera en que se hacen los imports y los exports

para ejecutarlo: `tsc`, esto transpila todos los ficherso typescript que tengamos en nuestra carpeta. 

## UNION

```
let mixed:number | string = 24;
mixed = 'hello;'

`````

Crear tipos a través de uniones. 

type MixedType = number | string; 

```
let mixed:MixedType = 24;
mixed = 'hello;'

`````

## ENUM: lista de constantes

```
enum Colors {
    RED = red,
    BLUE = blue,
    PINK = pink,
}

let color:Colors = Colors.RED

color = Colors.BLUE

`````

Visual studio : `shift command b`

elegir el watch y cada vez que guardamos hace el tsc index.tsc

hay que hacer en consola => `node + carpeta de archivo`

## RECORDS

es una manera para construir objetos, es una especie de creacion de tipos compuestos a través de ciertos patrones al que se les pasa las claves y los valores.

````
type RecordExample = Record<string, string | number {o} MixedType>

cost example:RecordExample = {
    name: 'Antonio',
    age: '24' => ahora si podemos hacer 24 como numero,
    favColor: Colos.PINK,
}
````
***<> ::: corchetes angulares***


Podemos hacer un modelo de objeto que solo tenga los campos que nosotros queremos tener: 


````
type Properties = 'name' | 'age' | 'favouriteColor'
type RecordExample = Record<Properties, MixedType>

cost example:RecordExample = {
    name: 'Antonio',
    age: '24' => ahora si podemos hacer 24 como numero,
    favColor: Colos.PINK,
}
}
````
## TYPESCRIPT CON REACT

`npx createreact-app (el nombre que queramos) --template typescript`

````
import React, { ReactElement } from 'react';

const App:React.FC = ():ReactElement => {

    const [value, setValue] = useState<string>('')

    const handleChange = ({target}:React.ChangeEvent<HTMLinputElement>):void => {}

    return (
        <div className='App'>
            <input value={value}  type='text' 
            onChange={handleChange}
            placeholder='typesomething...'>
        </div>
    )
}
````
FC = FunctionComponent
`<string>` = ya estan definidas, se renderizan y el tipo se interpreta al momento de la ejecución. 

### asignando custom hooks

````
import React, { ReactElement } from 'react';

const useDebounce = (text:string, time:number):string => {
    const [value, setValue] = useState<string>('')
    useEffect(()=>{
        const id:number = window.setTimeout (():void=>{
           text && setValue(text)
        }, time)

        return ()=> clearTimeout(id);
    }, [text, time])

    return value
}




const App:React.FC = ():ReactElement => {

    const [value, setValue] = useState<string>('')
    
    const debouncedValue:string = useDebounce(value, 1500);

    useEffect(()=>{
        debouncedValue &&
      (async ()=>{
          const result:PokemonType | AsyncError = await getPokemon(debouncedValue)

          console.info(result)
      })()

    }, [debouncedValue])

    const handleChange = ({target}:React.ChangeEvent<HTMLinputElement>):void => {}

    return (
        <div className='App'>
            <input value={value}  type='text' 
            onChange={handleChange}
            placeholder='typesomething...'>
            <p>Real time : {value}</p>
            <p>Debounced: {debouncedValue}</p>
        </div>
    )
}
````

Indicando que settimeout viene de window logramos que ese id se le pueda asignar `Number`

### generando un fetch

esta funcion se va tambine a carpeta misc
````

type PokemonType = {
    success:boolean;
    name:string; 
    id:number;
}

export const getPokemon = async (pokemon:string):Promise<PokemonType | AsycError>=> {
    try {
        const result = await(await fetch({`${POKE_API/${pokemon}}`})).json()

        const {name, id} =result

        return { success: true, name,id}

    } catch(error){
        console.info(error.message)
        return { success: false}
    }
}

````

**si entra en el catch ponemos el void**, pero mejor generar un tipo especifico de success para el asyncError que podamos usar en el `or` de la función. 

se puede crear una carpeta misc donde pongamos el `success` y cambiar el void

````
export type AsycError = {
    success: false
}

````


