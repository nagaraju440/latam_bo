import React from 'react';
// import cardImage from '../../assests/girl namaste phose.png'

function Card(props) {
    return (
            <div className="bg-dashboard-card-image bg-cover flex items-center justify-center w-full">
                <div className='w-4/5 text-white'>
                    <h2>¡Hola!</h2>
                    <h3>Daiana Buchanan</h3>
                    <p>En esta página encontraras un resumen de la información 
                        más importante, así como enlaces directos y herramientas de apoyo.</p>

                </div>

            </div>

    );
}

export default Card;