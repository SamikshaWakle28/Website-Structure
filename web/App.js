import React, { useState, useEffect, useRef } from 'react';
import './webstyle.css';

const App = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [skillsAnimated, setSkillsAnimated] = useState(false);
    const chatMessagesRef = useRef(null);

    const chatResponses = {
        services: "We offer Web Development, Mobile Apps, Cloud Solutions, and Analytics.",
        contact: "Reach us at info@sculptortechpvtltd.com or call +91 9561190787.",
        pricing: "Pricing varies by project. Contact us for a custom quote!",
        default: "I'm here to help! Ask about our services, pricing, or contact info."
    };

    // Skill Animation Logic
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("skills");
            if (section && section.getBoundingClientRect().top < window.innerHeight && !skillsAnimated) {
                setSkillsAnimated(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [skillsAnimated]);

    // Chatbot Logic
    const handleSendMessage = (text) => {
        const msg = text || userInput;
        if (!msg.trim()) return;

        setMessages(prev => [...prev, { text: msg, isBot: false }]);
        setUserInput("");

        setTimeout(() => {
            const lower = msg.toLowerCase();
            let response = chatResponses.default;
            if (lower.includes('servic')) response = chatResponses.services;
            else if (lower.includes('contact')) response = chatResponses.contact;
            else if (lower.includes('price')) response = chatResponses.pricing;
            setMessages(prev => [...prev, { text: response, isBot: true }]);
        }, 600);
    };

    // Auto-scroll chat
    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="site-wrapper">
            {/* HEADER */}
            <header className="header">
                <div className="logo">
                    <img src="logo.jpeg" alt="logo" />
                    <span>CULPTOR-TECH</span>
                </div>
                <nav className={`nav ${isNavActive ? 'active' : ''}`}>
                    <a href="#home" onClick={() => setIsNavActive(false)}>Home</a>
                    <a href="#services" onClick={() => setIsNavActive(false)}>Services</a>
                    <a href="#clients" onClick={() => setIsNavActive(false)}>Clients</a>
                    <a href="#skills" onClick={() => setIsNavActive(false)}>Skills</a>
                    <a href="#gallery" onClick={() => setIsNavActive(false)}>Gallery</a>
                    <a href="#contact" onClick={() => setIsNavActive(false)}>Contact</a>
                </nav>
                <div className="hamburger" onClick={() => setIsNavActive(!isNavActive)}>
                    {isNavActive ? '✕' : '☰'}
                </div>
            </header>

            {/* HERO */}
            <section className="hero" id="home">
                <div className="hero-overlay">
                    <h1>Innovative Technology & IT Services</h1>
                    <p>Delivering modern Web Development and Mobile Solutions for SMEs.</p>
                    <a href="#contact" className="btn">Enquire Now</a>
                </div>
            </section>

            {/* SERVICES */}
            <section className="services" id="services">
                <h2>Our Services</h2>
                <p>SculptorTech Pvt Ltd helps Small and Medium Enterprises achieve their Revenue Goals by providing Technology and Business Solutions</p>
                <div className="service-grid">
                    <ServiceCard title="Website Design" desc="Designing unique and visually appealing websites tailored to the client's brand identity and business goals." />
                    <ServiceCard title="Web Application Development" desc="Designing and developing websites using modern technologies and frameworks to create responsive interfaces." />
                    <ServiceCard title="Mobile Application Development" desc="Building native or cross-platform mobile applications for iOS and Android, catering to various industries." />
                    <ServiceCard title="Software Testing" desc="Proficiency in testing methodologies, including unit testing, integration testing, and end-to-end testing." />
                    <ServiceCard title="Business Analytics" desc="Developing data-driven solutions and dashboards to help businesses gain valuable insights from their data." />
                </div>
            </section>

            {/* CLIENTS */}
            <section className="clients" id="clients">
                <h2>Our Clients</h2>
                <div className="client-grid">
                    <ClientCard img="client1.jpeg" name="Partner 1" />
                    <ClientCard img="client2.jpg" name="Partner 2" />
                    <ClientCard img="client3.jpg" name="Partner 3" />
                    <ClientCard img="client4.jpeg" name="Partner 4" />
                </div>
            </section>

            {/* SPECIALITIES */}
            <section className="specialities" id="specialities">
                <h2>Our Specialities</h2>
                <div className="spec-container">
                    <ul className="spec-list">
                        <li><span>✔</span> Web Design & Development</li>
                        <li><span>✔</span> Mobile App Development</li>
                        <li><span>✔</span> Social Media Marketing</li>
                        <li><span>✔</span> SEO & Web Analytics</li>
                    </ul>
                    <div className="company-info-card">
                        <h3>Company Insights</h3>
                        <p><strong>Industry:</strong> IT Services & Consulting</p>
                        <p><strong>Headquarters:</strong> Pune, Maharashtra</p>
                        <p><strong>Email:</strong> sculptortechpvtltd@gmail.com</p>
                        <p><strong>Company Size:</strong>05-20 Employees</p>
                        <p><strong>Type:</strong> Private Limited</p>
                        <p><strong>Freelance:</strong> Available</p>
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section className="skills" id="skills">
                <h2>Our Skills</h2>
                <SkillBar label="Website Design" percent={100} animated={skillsAnimated} />
                <SkillBar label="Web App Development" percent={90} animated={skillsAnimated} />
                <SkillBar label="Cloud Solutions" percent={85} animated={skillsAnimated} />
                <SkillBar label="Mobile Apps" percent={60} animated={skillsAnimated} />
            </section>

            {/* GALLERY */}
            <section className="gallery" id="gallery">
                <h2>Photo Gallery</h2>
                <div className="gallery-grid">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <GalleryItem key={num} img={`img${num}.jpg`} />
                    ))}
                </div>
            </section>

            {/* CONTACT */}
            <section className="contact" id="contact">
                <h2>Contact Us</h2>
                <form onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); }}>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>

            {/* FOOTER */}
            <footer className="main-footer">
                <div className="footer-content">
                    <div className="contact-info">
                        <h2>Contact Us</h2>
                        <address>
                            <p><strong>Email:</strong> <a href="mailto:info@sculptortechpvtltd.com">info@sculptortechpvtltd.com</a></p>
                            <p><strong>Location:</strong> C-1006, Green City, Satav Nagar, Hadapsar, Pune - 411028</p>
                            <p><strong>Phone:</strong>
                                <a href="tel:+918623034275">+91 8623034275</a> | <a href="tel:+918668584275">+91 8668584275</a>
                            </p>
                        </address>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 SculptorTech Pvt Ltd.</p>
                </div>
            </footer>

            {/* FLOATING UI */}
            <a href="wa.me" className="whatsapp-floating" target="_blank" rel="noreferrer">
                <div className="whatsapp-icon-container">
                    <svg viewBox="0 0 16 16" width="32" height="32" fill="white"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.978l-1.125 4.105 4.195-1.1c1.173.639 2.49.975 3.827.975h.004c4.368 0 7.926-3.558 7.93-7.93a7.897 7.897 0 0 0-2.333-5.618zM7.994 14.52a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
                </div>
            </a>

            <button className="floating-btn" onClick={() => setIsChatOpen(!isChatOpen)}>
                <svg viewBox="0 0 16 16" width="30" height="30" fill="white"><path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" /></svg>
            </button>

            <div className={`chat-window ${isChatOpen ? 'active' : ''}`}>
                <div className="chat-header">
                    <span>Tech Assistant</span>
                    <button onClick={() => setIsChatOpen(false)}>&times;</button>
                </div>
                <div className="chat-messages" ref={chatMessagesRef}>
                    {messages.length === 0 && <div className="chat-message bot-message">Hello! 👋 How can I help you today?</div>}
                    {messages.map((m, i) => (
                        <div key={i} className={`chat-message ${m.isBot ? 'bot-message' : 'user-message'}`}>{m.text}</div>
                    ))}
                </div>
                <div className="chat-input-area">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type here..."
                    />
                    <button onClick={() => handleSendMessage()}>Send</button>
                </div>
            </div>
        </div>
    );
};

// SUB-COMPONENTS
const ServiceCard = ({ title, desc }) => (
    <div className="card"><h3>{title}</h3><p>{desc}</p></div>
);

const ClientCard = ({ img, name }) => (
    <div className="client-card"><img src={img} alt={name} /></div>
);

const SkillBar = ({ label, percent, animated }) => (
    <div className="skill">
        <span>{label} – {percent}%</span>
        <div className="progress">
            <div style={{ width: animated ? `${percent}%` : '0%', transition: 'width 1.5s ease-in-out' }}></div>
        </div>
    </div>
);

const GalleryItem = ({ img, title }) => (
    <div className="gallery-item">
        <img src={img} alt={title} />
        <div className="gallery-overlay"><span>{title}</span></div>
    </div>
);

export default App;
