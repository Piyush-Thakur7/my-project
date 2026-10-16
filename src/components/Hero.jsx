import { Github, Linkedin } from "lucide-react";

function Hero({data}) {
  return (
    <section id="home" className="hero">
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>

      <div className="container hero-inner">
        <div>
          <p className="hero-greeting">Hi, I'm {data?.name}</p>
          <h1 className="hero-title gradient-text">{data?.role}</h1>
          <p className="hero-text">{data?.tagline}</p>

          <a href="#projects" className="btn btn-primary">Explore my work</a>

          <div className="social-icons">
            {data?.socials?.github && (
              <a className="icon-link" href={data.socials.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
            )}
            {data?.socials?.linkedin && (
              <a className="icon-link" href={data.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
            )}
          </div>
        </div>

        <div className="hero-photo">
          <img
            src={data?.profileImage || "/profile.png"}
            alt={data?.name || "Profile"}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
