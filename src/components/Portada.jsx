import React from 'react'
import logo from '../logo.svg'

const Portada = () => {
    return (
        <div>
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
                
            </div>
        </div>
    )
}

export default Portada
