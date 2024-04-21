import React from "react";
import img from "../images/about.png";
import Back from "../common/Back";
import "./contact.css";

const Contact1 = () => {
  return (
    <>
      <section className="contact mb">
        <Back name="Tester" title="Vos connaissances" cover={img} />
        <div className="container">
          <br />
          <h3>Bienvenue dans notre musée</h3>
          <form>
            <iframe
              width="1280"
              height="720"
              src="https://www.artsteps.com/embed/661c3a7203d2be2cf63dd2e9/1280/720"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact1;
