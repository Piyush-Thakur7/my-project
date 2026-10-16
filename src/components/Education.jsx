function Education({ education }) {
  return (
    <section id="education" className="section dark-section">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Education</span></h2>

        <div className="grid">
          {education && education.map((edu, idx) => (
            <div className="card" key={idx}>
              <p className="year">{edu.year}</p>
              <h3>{edu.degree}</h3>
              <p>{edu.college}</p>
              <p className="muted">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
