import React from "react"
import img from "../images/about.png"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back name="Tester" title="Vos connaissances" cover={img} />
        <div className="container">
          <br />
          <h3>le QR Code de Quiz</h3>
          <form className="shadow">
            <a href="https://quiz-tau-lemon.vercel.app/">
              <img
                src="images/QrCodeM.png"
                alt=""
                style={{ width: 500, display: "block", margin: "auto" }}
              />
            </a>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact
