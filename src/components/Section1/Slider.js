import React, { useState } from 'react';

function Slider(props) {
    const [sliderData,setSliderData]=useState([
        {name:"name1",date:"sample date",participants:"number"},
        {name:"name2",date:"sample date",participants:"number"},
        {name:"name3",date:"sample date",participants:"number"},
        {name:"name4",date:"sample date",participants:"number"},
        {name:"name5",date:"sample date",participants:"number"},
    ])

    return (
        <div className='flex  justify-center bg-[#E5E5E5]'>
        <div className='w-5/6 flex  justify-between '>
            {
                sliderData.map(data=>{
                    return(
                        <div className='flex flex-col bg-[#FFFFFF]'>
                            <p>name:{data.name}</p>
                            <p>date:{data.date}</p>
                            <p>participants:{data.participants}</p>
                        </div>
                    )
                })
            }
        </div>
        
    </div>
    );
}

export default Slider;