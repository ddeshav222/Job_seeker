import React from "react";
import { FaMicrosoft, FaAmazon, FaGoogle } from "react-icons/fa";
import { SiTesla } from "react-icons/si";



const PopularCompany = () => {

  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Mumbai, Mahrashtra",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Google",
      location: "Noida, Uttar Pradesh",
      openPositions: 5,
      icon: <FaGoogle />,
    },
    {
      id: 3,
      title: "Amazon",
      location: "Pune, Mahrashtra",
      openPositions: 20,
      icon: <FaAmazon />,
    },
  ];


  return (
    <div className='companies'>
      <div className="container">
        <h3>TOP COMPANIES</h3>

        <div className="banner">
          {
            companies.map(element=>{
              return (
                <div className="card" key={element.id}>
                    <div className="content">
                      <div className="icon">{element.icon}</div>
                      <div className="text">
                        <p>{element.title}</p>
                        <p>{element.location}</p>
                      </div>
                    </div>
                    <button>Open Positions:  {element.openPositions}</button>
                </div>
              )
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default PopularCompany
