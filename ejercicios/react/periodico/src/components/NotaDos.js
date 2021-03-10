import imgNote from '../assets/mono.webp'

function NotaDos () {
    return (
        <div className="collumn">
            <div className="head">
                <span className="headline hl5">Arrestan a Mono En Pakistán</span>
                <p><span className="headline hl6">"Hace un año, en India, ocurrió el mismo procedimiento con una paloma por poder estar llevando a cabo, supuestamente, una misión de espionaje para Pakistán."</span></p></div>

                <p>Un mono fue arrestado por cruzar al territorio pakistaní, concretamente en el distrito de Bahawalpur, en pleno desierto de Cholistan. La aventura del mono empezó cuando se disponía a viajar de la India a Pakistán. Pero lo que comenzó como un simple paseo, terminó siendo un grave delito para las autoridades fronterizas de la zona. Seguro que este inocente e inquieto animal no se imaginó que terminaría arrestado por querer recorrer mundo.</p>

                <figure className="figure">
								<img className="media" src={imgNote} alt="mono"></img>
								<figcaption className="figcaption">Mono tras el arresto</figcaption>
						</figure>

                 <p>Según informes, el intrépido animal no se lo puso fácil a los guardias fronterizos. Tras varios intentos fallidos para cazarlo, los residentes locales finalmente se vieron obligados a dar aviso a la policía al no conseguir su objetivo. Una vez capturado, el mono fue trasladado al zoológico de Bahawalpur, donde ya se le ha puesto nombre: Bobby.

                El animal tiene aproximadamente cuatro años de edad y está causando un gran revuelo entre los visitantes de la zona.</p>

                <p>Por muy absurdo que suene, esta no ha sido la primera vez que se ha arrestado a un animal por cruzar alguna zona fronteriza sin presentar la documentación adecuada. Hace un año, en India, ocurrió el mismo procedimiento con una paloma por poder estar llevando a cabo, supuestamente, una misión de espionaje para Pakistán.</p>
        </div>
    )
}

export default NotaDos