import Typewriter from "typewriter-effect";
import './Contact.css';

const Contact = () => {
    return <>
        <div className="container">
            <div className="image-column">
                <img src="/nandan.jpg" alt="Descriptive Image Text" />
            </div>
            <div className="text-column">
                <h1>
                    Hello !! I am Nandan Kumar
                </h1>
                <h3>
                    <Typewriter
                        options={{
                            strings: [
                                "SDE Intern'23 Amazon",
                                "Competitive Programmer",
                                "Development Enthusiast"
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </h3>
                <h4>Mail to: k.nandan@iitg.ac.in</h4>
            </div>
        </div>
    </>
}

export default Contact;