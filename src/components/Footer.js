import React from 'react';

function Footer(props) {
    return (
        <div className="flex  w-full ">
            <div className='w-full'>
                {/* <div className="w-5/8 p-7 m-auto">
                    <p className='text-[24px] text-[#898989] italic'>“El amor es ver a Dios en la persona que está a nuestro lado y la meditación es ver a Dios dentro de nosotros.”</p>
                    <p className='text-[16px]'>– SRI SRI RAVI SHANKAR</p>
                </div> */}
                <div className='flex justify-between border-2 py-7 pl-10 pr-[72px] '>
                    <p>© Arte de vivir 2021</p>
                    <p>Políticas de privacidad   |  Términos y condiciones </p>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;