import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.png"
import "./about.css"

const About = () => {
  return (
    <>
      <section className="about">
        <Back
          name="A propos Nous"
          title="À propos de nous - Qui sommes-nous ?"
          cover={img}
        />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Notre histoire de musée"
              subtitle="Découvrez notre histoire d'équipe et notre processus de travail."
            />

            <p>
              Nous sommes une équipe passionnée qui œuvre pour créer un musée
              dédié aux animaux en danger. Notre mission est de sensibiliser le
              public aux risques auxquels sont confrontés ces animaux, en
              mettant en lumière les causes et les conséquences de leur
              vulnérabilité. À travers notre travail, nous aspirons à éduquer,
              inspirer et mobiliser les gens pour protéger et préserver la
              diversité de la vie sauvage.
            </p>
            <p>
            </p>
          </div>
          <div className="right row">
            <img src="./gaz.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About
