import React from "react"
import DevCards from "../components/DevCards"

export default function ReachOut(){

    

    return(
        <div className="reachout">
        <h1>Meet The Developers</h1>
        <div className="dev_main">
            <DevCards name="Sasi Kumar" skill="Full-Stack Developer" descp="as a user interface designer, a full-stack developer, and a technical writer, Sasi possesses a high proficiency in the MERN Stack, C++, and, most notably, GUI development having a high familiarity with various auxiliary frontend frameworks. Sasi's core passion lies in demystifying technical subjects and crafting compelling digital experiences for the people of the internet." linkedin="https://www.linkedin.com/in/siddhantxh/" github="https://github.com/Sasi-12" />
            
            <DevCards name="Sutheeb" skill="AI/ML & Backend Developer" descp="an AI/ML developer experienced in NLP, backend (Node & FastAPI), data cleaning, sentiment analysis, neural networks, data science, Python, C++, DSA, and data analysis. Driven by a relentless pursuit of innovation, Sutheeb consistently delivers impactful results, pushing boundaries in the field of AI/ML and leveraging their diverse skill set for cutting-edge solutions." linkedin="https://www.linkedin.com/in/sutheeb-k-t-423571259/" github="https://github.com/ktsutheeb"/>

            <DevCards name="Santhiya" skill="AI/ML & UI Designer" descp="an AI/ML developer experienced in NLP, backend (Node & FastAPI), data cleaning, sentiment analysis, neural networks, data science, Python, C++, DSA, and data analysis. Driven by a relentless pursuit of innovation, Santhiya consistently delivers impactful results, pushing boundaries in the field of AI/ML and leveraging their diverse skill set for cutting-edge solutions." linkedin="https://www.linkedin.com/in/santhiya-e-070396259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" github="https://github.com/Santhiya2005"/>
        </div>
        </div> 
    )
}