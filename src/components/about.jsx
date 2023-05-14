
import React from "react";
import aboutImg from '../assets/about-img.png'

const About = () =>{
    return (
        <section className="bg-secondery text-white px-5 py-32" id="about" >
            <div className="container mx-auto grid md:grid-cols-2 items-center " >
                <div className="about-info" >
                       <h2 className="text-4xl font-bold mb-5 border-b-[5px] 2-[180px] border-indigo-600 pb-2">
                        About Me
                        </h2> 

                        <p className="pb-5">
                            Hi, My Name is Roopesh Singh.I am frontend Developer.I build beautifull websites with react and Tailwind CSS.  
                        </p>
                        <p className="pb-5" >
                            I am proficient in Frontend Skills like React.js,Redux,Redux Tool kit,Axios, Tailwind CSS,Sass,Css3 and many more.  
                        </p>
                        <p class>
                            In backend I know Node.js, Java, Python, Mysql, MongoDB. 
                        </p>
                        <p>
                            In my spare time I create Youtube Video and Write Blogs on my Blog Where I talk about programming
                            theory and build various projects.
                        </p>
                </div>
                <div className="about-img">
                    <img
                    src={aboutImg}
                    alt="Coding illustrations"
                    className="lgw-[80%] md:ml-auto"
                    /> 
                </div>
            </div>
        </section >
    )
}

export default About;