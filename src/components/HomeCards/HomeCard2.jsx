import React from 'react'
import { GiNotebook } from 'react-icons/gi';
import {GrMail,GrMapLocation} from 'react-icons/gr';
import {CgProfile,CgPhone} from 'react-icons/cg';
import { SiAmazonpay } from 'react-icons/si';
import { BiBookContent } from 'react-icons/bi';
import {FaPaperPlane,FaTruck, FaPeopleCarry,FaTruckMoving,FaRupeeSign,FaWarehouse ,FaHandshake, FaPlane 
}from 'react-icons/fa';
import {TbReportSearch,TbCalendarStats} from 'react-icons/tb';
import {IoMdCloudDownload} from 'react-icons/io';
import {MdInventory} from 'react-icons/md';
import {AiOutlineBarChart} from 'react-icons/ai';
import {RiMailSendFill} from 'react-icons/ri';
import {GoListUnordered }from 'react-icons/go';
import './HomeCard2.css'

const featureData = [{
  
  icon:<GiNotebook/>,
  text: 'eWay Bill API Integration'
},
{
  icon:<FaPlane/>,
  text: 'GPS Tracking Integration'
},
{
  icon: <GrMail/>,
  text: 'Whatsapp & SMS Integration'
},
{
  icon:<CgProfile/>,
  text: 'Agency or User Control'
},
{
  icon:<SiAmazonpay/>,
  text: 'HR and Payroll Report'
},
{
  icon: <BiBookContent/>,
  text:'Consignment'
},
{
  icon:<FaPaperPlane/>,
  text: 'Shipping'
},
{
  icon:<FaTruck/>,
  text: 'Dispatch'
},
{
  icon: <FaPeopleCarry/>,
  text: 'POD'
},
{
  icon: <FaTruckMoving/>,
  text: 'Truck Status'
},
{
  icon: <FaRupeeSign/>,
  text: 'Transaction'
},
{
  icon: <CgPhone/>,
  text: "Follow up"
},
{
  icon: <TbReportSearch/>,
  text: "MIS Report"
},
{
  icon : <AiOutlineBarChart/>,
  text: 'Analytics'
},
{
  icon:<GrMapLocation/>,
  text: 'Tracking'
},
{
  icon: <IoMdCloudDownload/>,
  text: 'Loads'
},
{
  icon: <GoListUnordered/>,
  text: 'Rate List'
},
{
  icon : <RiMailSendFill/>,
  text: 'Invoice'
},
{
  icon: <TbCalendarStats/>,
  text: 'Stationary'
},
{
  icon: <FaWarehouse/>,
  text: 'Warehouse'
},
{
  icon: <MdInventory/>,
  text : 'Inventory'
},
{
  icon: <FaHandshake/>,
  text: 'Client'
}
]
const HomeCard2 = () => {
  return (
    <div className='homecard2'>
     
        {
          featureData.map(({icon,text},index)=>{
            return (
              <div key={index} className="col-md-4">
                <div className="card">
                  <p style={{widgth:"15px",height:'15px'}}>{icon}</p>
                  <p>{text}</p>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}

export default HomeCard2
