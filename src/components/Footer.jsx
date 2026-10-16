import { Github, Linkedin } from "lucide-react";

function Footer({ name, socials }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {name || "Student"}. All rights reserved.</p>
        <div className="social-icons">
          {socials?.github && (
            <a className="icon-link" href={socials.github} target="_blank" rel="noreferrer">
              <Github size={18} />
            </a>
          )}
          {socials?.linkedin && (
            <a className="icon-link" href={socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
