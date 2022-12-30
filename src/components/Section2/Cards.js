import React from 'react'
import v1 from '../assets/v1.svg'
import v2 from '../assets/v2.svg'
import v3 from '../assets/v3.svg'
import v4 from '../assets/v4.svg'
import v5 from '../assets/v5.svg'

function Cards() {
    const Data = [
        {  id : '1',
           src:v1,
           text:"Curso nuevo",
           
        },
        {  id : '2',
           src:v2,
           text:"Taller nuevo",
           
        },
        {  id : '3',
           src:v3,
           text:"Alumno nuevo",
        },
        {  id : '4',
           src:v4,
           text:"Reporte nuevo",
           
        },
        {  id : '5',
           src:v5,
           text:"Reporte nuevo hj",
           
        },
        {  id : '6',
           src:v5,
           text:"Reporte nuevo",
           
        },
        
        ]
  return (
    <div>
    <div className="flex flex-justify-between">
      
            {Data.map((item)=>{
              return(
                <div>
                    <div className=' border box-content w-21 h-20 flex justify-center shadow-md items-center'>
                     <img className='w-9 h-9' src={item.src} alt></img>
                     </div>
                     <div className=' text-center'>
                     {item.text}
                     </div>
                    
                </div>
              
              )
            })}

    </div>
    </div>
  )
}

export default Cards