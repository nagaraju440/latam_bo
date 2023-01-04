import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Filter from '../../Filters/Section2'
import HeaderLayout from '../../HeaderLayout/HeaderLayout'
import EditComponent from '../../EditComponent/EditComponent'

export default function Index() {
  return (
    <div>Index
        <div style={{paddingTop:"50px"}}>
        <Navbar/>
        </div>
        <div style={{display:"flex",flexDirection:'row'}}>
            <div style={{float:"left",width:"25%"}}>
            <Sidebar/>
            </div>
            <div style={{display:"flex",width:"100%",flexDirection:'column',float:'right'}}>

            <HeaderLayout/>
        <Filter/>
        
        <EditComponent/> 
            </div>
        </div>
    </div>
  )
}
