import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Filter from '../../Filters/Section2'
import HeaderLayout from '../../HeaderLayout/HeaderLayout'
import EditComponent from '../../EditComponent/EditComponent'

export default function Index() {
  return (
    <div className="border h-screen w-screen  ">
    <div className="h-20"><Navbar/></div>
    <div className="bg-yellow-200 grid grid-cols-10 h-full">
        <div className="col-span-2"><Sidebar/> </div>
        <div className="bg-grey-200 col-span-8">
        <HeaderLayout/>
        <Filter/>
        <EditComponent/>
        </div>
    </div>
</div>
  )
}
