import { Mail, Github, Linkedin } from "lucide-react";

function Contact({ email, socials }) {
  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="muted">Feel free to reach out for collaborations or just a friendly hello!</p>

          <div className="contact-links">
            {email && (
              <a className="icon-link icon-link-text" href={`mailto:${email}`}>
                <Mail size={18} /> {email}
              </a>
            )}
            {socials?.github && (
              <a className="icon-link icon-link-text" href={socials.github} target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub
              </a>
            )}
            {socials?.linkedin && (
              <a className="icon-link icon-link-text" href={socials.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn
              </a>
            )}
          </div>

          {email && (
            <a className="btn btn-primary" href={`mailto:${email}`}>
              Say Hello
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
