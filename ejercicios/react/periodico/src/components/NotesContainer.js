import NotaUno from './NotaUno'
import NotaDos from './NotaDos'
import NotaTres from './NotaTres'
import NotaCuatro from './NotaCuatro'
import NotaCinco from './NotaCinco'

function NotesContainer (){
    return (
        <div className= "content">
            <div className="collumns">
                <NotaUno/>
                <NotaDos/>
                <NotaTres/>
                <NotaCuatro/>
                <NotaCinco/>
            </div>
        </div>
    )
}

export default NotesContainer