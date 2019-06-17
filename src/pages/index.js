import React, {useState, useEffect} from "react"
import { Controller, Scene } from "react-scrollmagic"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () =>{ 

  const [uncover, setUncover] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setUncover(true)
    }, 500);
    return () => clearTimeout(timer);
  }, []);
return(
  <Layout>
    <SEO title="Home" />
    
    <div className="section-container">
    <section className="landing">
    <div className={!uncover ? "triangle-1 uncover" : "triangle-1"}/>
          <div className={!uncover ? "triangle-2 uncover" : "triangle-2"}/>
          <div className="triangle-3"/>
          <div className={!uncover ? "triangle-4 uncover" : "triangle-4"}/>
          <div className={!uncover ? "overlay uncover" : "overlay"}/>
            <a href="#about">
            <h1>{"<web>"}</h1>
            <h1>developer</h1>
            </a>
            
          
          
    </section>
    <Controller>
    <Scene
      classToggle="change"
      
      triggerElement="#about"
    >
    <section className="about" id="about">
    <div className="triangle-5"/>
    <div className="about-left"></div>
    <div className="about-right">
      <h1 style={{color: "#333", fontFamily: "Dosis"}}>About Me</h1>
      <p>I'm Oliver, freelance full-stack developer, tech lover and former teacher. I keep myself busy constantly brushing up on the most modern tools and technologies to provide maximum value to my client or team.</p>
    </div>

    </section>
    </Scene>
    </Controller>
    </div>
    
  </Layout>
)
}

export default IndexPage
