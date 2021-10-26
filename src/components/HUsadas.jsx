import React from 'react'
import logo from '../logo.svg'
const HUsadas = () => {
    return (
        <div>
            <div className="container container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo} className="figure" alt="logo" />
                        <p>
                            Prueba de despliegue de app en React usando AWS Amplify
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Aqui va un hermoso Link
                        </a>
                    </div>
                    <div className="col-md-4">
                        <figure className="figure">
                            <img className="figure-img img-fluid rounded" src="https://www.datocms-assets.com/18019/1582320948-blog-post-amplify-intro.png?auto=format"  alt="Imagen de Amplify"/>
                            <figcaption className ="figure-caption">AWS Amplify para despliegue rapido.</figcaption>
                        </figure>
                    </div>
                    <div className="col-md-4">
                    <figure className="figure">
                            <img className="figure-img img-fluid rounded" src="https://ayudaleyprotecciondatos.es/wp-content/uploads/2020/09/Firebase-00.png"  alt="Imagen de Firebase"/>
                            <figcaption className ="figure-caption">Probando Firebase.</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HUsadas
