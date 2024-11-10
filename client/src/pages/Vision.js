import React from "react"
import Faqs from "../components/Faqs"

export default function Vision(){
    return(
        <div className="vision">
            <h1>Why Mentor Connect?</h1>
            <div className="vision_content">
                <p>🚨Mentor Connect is a platform designed to facilitate connections between mentees and experienced mentors across various domains. It allows individuals to access valuable advice, guidance, and career development support from mentors, enabling growth and professional advancement. The platform bridges the gap between aspiring individuals and seasoned professionals, fostering learning and knowledge exchange.</p>
                <img src={require("../images/mentorship.png")} alt=""/>
            </div>
            <div className="vision_content" id="vision_content2">
                <img src={require("../images/mentor2.png")} alt=""/>
                <p>By simply searching for a particular domain or skill, students can find a list of experts and their contact information, making it easy to reach out and get the guidance and support they need. We believe that Mentor Connect has the potential to transform the way that students and alumni connect and collaborate within our university. By bridging the gap between juniors and seniors/alumni, we can create a more cohesive and supportive community that fosters learning and growth for all.✔️</p>
            </div>
            <Faqs />
        </div>
    )
}