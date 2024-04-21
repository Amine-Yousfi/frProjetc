import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Avez-vous des Questions ?</h1>
              <p>
                Nous vous aiderons à faire progresser votre connaissance pour
                les animaux..
              </p>
            </div>
            <button className="btn5">Contacter Nous Aujourd'hui</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="" style={{
                width : 100
              }} />
              <h2>Avez-vous besoin d'aide pour quelque chose ?</h2>
              <div className="input flex">
                <input type="text" placeholder="Adresse Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="legal">
        <span>© 2024 Musée. Designd By Amine.</span>
      </div>
    </>
  );
}

export default Footer
