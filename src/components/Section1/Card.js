import React from 'react';
import play_icon from "../../assests/play_icon.svg"
// import cardImage from '../../assests/girl namaste phose.png'

function Card(props) {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-dashboard-card-image bg-cover flex items-center justify-center w-4/5 rounded-[12px]">
                <div className='w-4/5 text-white mt-8'>
                    <h2 className='text-[24px]'>¡Hola!</h2>
                    <h3 className='text-[21px]'>Daiana Buchanan</h3>
                    <p className='text-[18px]'>En esta página encontraras un resumen de la información
                        más importante, así como enlaces directos y herramientas de apoyo.</p>
                    <div className='flex border-solid border-2 border-[#7677F4] w-2/5 items-center justify-between rounded-[8px] mt-8 p-3.5 mb-12'>
                        <button className='text-[16px] text-[#7677F4]'>VER INTRODUCCIÓN </button>
                        <img src={play_icon}></img>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;