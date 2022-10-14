import React from "react"

export default function About() {
    return (
        <main>
            <img src="../Assets/liquidcolour_copy_vYG_icon.ico" className="icon" />
            <div className="rect"></div>
            <div className="rectangle-A">
            <h1 className="main--title">Ojash Kushwaha</h1>
            <h4 className="main--sub">React Developer</h4>
            <a href="https://github.com/OjashKush"><h5 className="main--web">Github</h5></a>
            <a href="../Assets/Resume_5Sept22.pdf" download>
               <button type="button" className="btn">Download Resume</button>
            </a>
            </div>
        </main>
    )
}