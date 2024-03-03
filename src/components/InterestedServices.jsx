import { getInterestedServices } from '../services/services'
import { useState, useEffect } from 'react'
const InterestedServices = () => {
  const [interestedServices, setInterestedServices] = useState([])

  useEffect(() => {
    getAllServices()
  }, [])

  const getAllServices = async () => {
    const services = await getInterestedServices()
    setInterestedServices(services)
  }

  return (
    <div>
      <h1 className="servTitle">Services</h1>
      <section className="servSection">
        <div className="servCard">
          <div className="servProfileImage">
            <img src="/image/Radiology.png"></img>
          </div>
          <div className="servTextContainer">
            <p className="servName">Radiology</p>
          </div>
        </div>

        <div className="servCard">
          <div className="servProfileImage">
            <img src="/image/ophthalmology.png"></img>
          </div>
          <div className="servTextContainer">
            <p className="servName">Ophthalmology</p>
          </div>
        </div>

        <div className="servCard">
          <div className="servProfileImage">
            <img src="/image/ENT.png"></img>
          </div>
          <div className="servTextContainer">
            <p className="servName">ENT</p>
          </div>
        </div>

        <div className="servCard">
          <div className="servProfileImage">
            <img src="/image/ENT.png"></img>
          </div>
          <div className="servTextContainer">
            <p className="servName">ENT</p>
          </div>
        </div>

        <div className="servCard">
          <div className="servProfileImage">
            <img src="/image/ENT.png"></img>
          </div>
          <div className="servTextContainer">
            <p className="servName">ENT</p>
          </div>
        </div>

        <div className="servCard">
          <div className="servProfileImage">
            <img src="/image/ENT.png"></img>
          </div>
          <div className="servTextContainer">
            <p className="servName">ENT</p>
          </div>
        </div>

        <div className="servCard">
          <div className="servProfileImage">
            <img src="/image/ENT.png"></img>
          </div>
          <div className="servTextContainer">
            <p className="servName">ENT</p>
          </div>
        </div>

        <div className="servCard">
          <div className="servProfileImage">
            <img src="/image/ENT.png"></img>
          </div>
          <div className="servTextContainer">
            <p className="servName">ENT</p>
          </div>
        </div>

        <div className="servCard">
          <div className="servProfileImage">
            <img src="/image/ENT.png"></img>
          </div>
          <div className="servTextContainer">
            <p className="servName">ENT</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InterestedServices
