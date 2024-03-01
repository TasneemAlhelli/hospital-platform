const InterestedServices = () => {
  return (
    <div>
        <h1 className="servicesTitle">Services</h1>
      <section className="servSection">
        <div className="card">
          <div className="profileImage">
            <img src="/image/Radiology.png"></img>
          </div>
          <div className="textContainer">
            <p className="name">Radiology</p>
          </div>
        </div>

        <div className="card">
          <div className="profileImage">
            <img src="/image/ophthalmology.png"></img>
          </div>
          <div className="textContainer">
            <p className="name">Ophthalmology</p>
          </div>
        </div>

        <div className="card">
          <div className="profileImage">
            <img src="/image/ENT.png"></img>
          </div>
          <div className="textContainer">
            <p className="name">ENT</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InterestedServices
