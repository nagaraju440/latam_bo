import React from 'react';


function Resume() {
    const data=[{
        title: 'General Information',
        course:['Course','The Art of Breathing'],
        modality: ['Modality','Online'],
        zoomLink: ['Zoom Link','https://www.zoom.us/5d87f'],
        visibility: ['Visibility','Private']
    },]
  return (
    <div>
        {data.map((d) => {
            return(
                <div key={d.title} className='text-red'>
                    <h2>{d.title}</h2>
                    <table>
                        <tr>
                            <td>{d.course[0]}</td>
                            <td>{d.course[1]}</td>
                        </tr>
                        <tr>
                            <td>{d.modality[0]}</td>
                            <td>{d.modality[1]}</td>
                        </tr>
                        <tr>
                            <td>{d.zoomLink[0]}</td>
                            <td>{d.zoomLink[1]}</td>
                        </tr>
                        <tr>
                            <td>{d.visibility[0]}</td>
                            <td>{d.visibility[0]}</td>
                        </tr>
                    </table>
                    <hr/>
                </div>
            )
        })}
    </div>
  )
}

export default Resume