import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import Filter from '../../Filters/Section2'
import HeaderLayout from '../../HeaderLayout/HeaderLayout'
import EditComponent from '../../EstatusComponent/EstatusComponent'

export default function Index() {
  return (
    <div className="border ">
    <div className="h-20"><Navbar/></div>
    <div className="bg-yellow-200 grid grid-cols-10 h-full">
        <div className="col-span-2"><Sidebar/> </div>
        <div className="bg-grey-200 col-span-8">
        <HeaderLayout/>
        <Filter/>
        {/* <EditComponent/> */}
        </div>
    </div>
</div>
  )
}
