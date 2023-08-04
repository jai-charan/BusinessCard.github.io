function ProfilePic(){
    return(
        <div>
            
            <img className="Main_pic" src="./Images/dp2.jpg"></img>
        </div>
    )
}

function Maincontent(){
    return(
        <div>
            <h1 className="Name"> Jaicharan S </h1>
            <h4 className="mail"><b>Contact : </b> sjcharan11@gmail.com</h4>
            <Skills/>
        </div>
    )

}

function Github(){
    return(
        <a href="https://github.com/jai-charan?tab=repositories">
    <img src="./Images/github.png" className="github" alt="Github Profile"></img>
</a>
    )
}
function Linkedin(){
    return(
        <a href="https://www.linkedin.com/in/sjcharan/">
    <img src="./Images/linkedin.png" className="linkedin" alt="LinkedIn Profile"></img>
</a>
    )
}function Hackerrank(){
    return(
        <a href="https://www.hackerrank.com/sjcharan11?hr_r=1">
    <img src="./Images/hackerrank.png" className="hackerrank" alt="HackerRank Profile"></img>
</a>
    )
}function Codechef(){
    return(
        <a href="https://www.codechef.com/users/charan1_1">
    <img src="./Images/codechef.png" className="codechef" alt="Codechef Profile"></img>
</a>
    )
}
function Leetcode(){
    return(
        <a href="https://leetcode.com/sjcharan11/">
    <img src="./Images/leetcode.png" className="leetcode" alt="Leetcode Profile"></img>
</a>
    )
}

function About(){
    return(
        <div className="about_content">
           <b> An enthusiastic fresher with highly motivated and leadership skills having B.Tech degree in
Information Technology and eager to learn new technologies and methodologies.</b>

        </div>
    )
}
function Skills(){
    return(
        <div >
        <h3 className="skills">SKILLS</h3>
        <h4><ul className="list">
            <li><b>Programming Languages :</b> C, Python, Java</li>
            <li><b>Web Development Languages :</b> HTML, CSS, Javascript,React JS</li>
            <li><b>Databases    :</b> MySQL</li>
            <li>Data Structures And Algorithms</li> 
            <li>Object Oriented Programming</li>
            </ul></h4>
        </div>
    )
}

function App(){
    return(
        <div>
            <ProfilePic/>
            <About/>
            <Maincontent/>
            <Github/>
            <Hackerrank/>
            <Linkedin/>
            <Leetcode/>
            <Codechef/>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"))