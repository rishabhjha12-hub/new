import React, {useState} from 'react'

const Navbar = () => {
    const [show,setShow]=useState(false)
    return (
        <div>
        <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <img src="./images/download.jfif" alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Online courses</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">We are hiring</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">more</a>
        </li>
       </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success" type="submit">login</button>
        <button className="btn btn-outline-success" type="submit">signup</button>
      </form>
    </div>
  </div>
</nav>
</section>
            
        </div>
    )
}

export default Navbar