import React from 'react';
import Data from '.././Data.json'

function Content() {
      return (
        <div className="container mx-auto h-96 overflow-auto">
          {Data.map((d) => {
            return (
              <div className="my-2 mr-3">
                <div className="flex justify-between">
                  <p className="font-semibold text-lg">{d.title}</p>
                  {/* <EditOutlinedIcon className="fill-blue-500  border-1 border-blue-500" /> */}
                </div>
                <div className="grid grid-cols-2 font-normal text-sm mb-2 [&>*:nth-child(odd)]:text-property [&>*:nth-child(even)]:text-value">
                  <p>{d.course[0]}</p>
                  <p>{d.course[1]}</p>
                  <p>{d.modality[0]}</p>
                  <p>{d.modality[1]}</p>
                  <p>{d.zoomLink[0]}</p>
                  <p>{d.zoomLink[1]}</p>
                  <p>{d.visibility[0]}</p>
                  <p>{d.visibility[1]}</p>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      );
}

export default Content