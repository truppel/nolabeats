"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Braces, Check, ChevronDown, Code2, Database, Layers3, Music2 } from "lucide-react";

const skills = ["React", "JavaScript", "Vite", "Vitest", "PeopleSoft", "SQL", "Oracle", "Application Engine"];

export default function Home() {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Terrance Ruppel, home"><span>TR</span><strong>Terrance Ruppel</strong></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#experience">Experience</a>
          <a className="nav-cta" href="https://github.com/truppel" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Enterprise developer · React learner</p>
          <h1>I make complicated systems easier to use.</h1>
          <p className="hero-lede">I’m a longtime enterprise developer bringing deep PeopleSoft, payroll, and SQL experience into modern React applications—one useful project at a time.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">See my work <ArrowDown size={17} /></a>
            <a className="button secondary" href="https://github.com/truppel" target="_blank" rel="noreferrer"><Code2 size={17} /> View GitHub</a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Developer profile summary">
          <div className="code-window">
            <div className="window-bar"><i /><i /><i /><span>approach.js</span></div>
            <pre><code><b>const</b> developer = {'{'}{`\n`}  experience: <em>&quot;enterprise systems&quot;</em>,{`\n`}  learning: <em>&quot;React&quot;</em>,{`\n`}  strength: <em>&quot;fixing what’s broken&quot;</em>,{`\n`}  focus: <em>&quot;useful software&quot;</em>{`\n`}{'}'};</code></pre>
          </div>
          <div className="principles">
            <p><Check size={16} /> Understand the real workflow</p><p><Check size={16} /> Make complexity manageable</p><p><Check size={16} /> Test what matters</p>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="kicker">Selected work</p><h2>Learning by building something real.</h2>
          <p>Setlist Analytics grew from a class project into a tool shaped around an actual band workflow.</p>
        </div>
        <article className="featured-project">
          <div className="project-visual" aria-hidden="true">
            <div className="mini-app">
              <div className="mini-top"><Music2 size={17} /><span>Setlist Analytics</span><i /></div>
              <div className="mini-stats"><div><small>SONGS</small><strong>70</strong></div><div><small>SHOWS</small><strong>100+</strong></div><div><small>STATUS</small><strong className="green">Active</strong></div></div>
              <div className="mini-table">
                <span>Song</span><span>Last played</span><span>Rotation</span>
                <b>NOLA Funk</b><b>12 days ago</b><b className="pill active">Active</b>
                <b>Noble Funk</b><b>46 days ago</b><b className="pill cooling">Cooling off</b>
                <b>Old Favorite</b><b>112 days ago</b><b className="pill stale">Stale</b>
              </div>
            </div>
          </div>
          <div className="project-copy">
            <div className="project-label"><Music2 size={18} /> Featured project</div><h3>Setlist Analytics</h3>
            <p>A React application that helps a working band see what it plays, how often songs rotate, and which material is going stale.</p>
            <ul><li><Check size={16} /> Domain models and reusable React components</li><li><Check size={16} /> Analytics logic separated from the interface</li><li><Check size={16} /> Automated tests with Vitest</li></ul>
            <div className="project-links">
              <a href="https://github.com/truppel/setlist-analytics" target="_blank" rel="noreferrer">Source code <ArrowUpRight size={15} /></a>
              <button type="button" onClick={() => setCaseStudyOpen(!caseStudyOpen)} aria-expanded={caseStudyOpen}>{caseStudyOpen ? "Hide" : "Read"} case study <ChevronDown className={caseStudyOpen ? "rotated" : ""} size={16} /></button>
            </div>
            {caseStudyOpen && <div className="case-study">
              <p><strong>The problem:</strong> A raw list of performances did not show whether the catalog was staying fresh.</p>
              <p><strong>My approach:</strong> I added rotation rules that classify songs as Active, Cooling Off, or Stale based on the latest performance date.</p>
              <p><strong>What I learned:</strong> Keeping analytics logic outside the components made the behavior easier to test and the interface easier to change.</p>
            </div>}
          </div>
        </article>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading compact"><p className="kicker">Experience</p><h2>Modern front ends, backed by production experience.</h2></div>
        <div className="experience-grid">
          <article><div className="icon-box"><Layers3 size={22} /></div><p className="year">Enterprise systems</p><h3>PeopleSoft & payroll development</h3><p>Long-term experience maintaining high-stakes government payroll systems, integrations, batch processing, and business rules.</p></article>
          <article><div className="icon-box"><Database size={22} /></div><p className="year">Data & automation</p><h3>SQL-driven problem solving</h3><p>Oracle and SQL Server work spanning data validation, interface design, reporting, and automation of manual workflows.</p></article>
          <article><div className="icon-box"><Braces size={22} /></div><p className="year">Current focus</p><h3>React application development</h3><p>Building component-based interfaces with JavaScript, Vite, testing, Git, REST data, and responsive CSS.</p></article>
        </div>
      </section>

      <section className="skills-section"><p className="kicker">Tools I work with</p><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></section>
      <section className="contact-section"><p className="kicker">What’s next</p><h2>I’m combining proven systems thinking with modern web development.</h2><p>Follow the projects as I build, test, and improve them.</p><a className="button primary light" href="https://github.com/truppel" target="_blank" rel="noreferrer"><Code2 size={17} /> Visit my GitHub <ArrowUpRight size={16} /></a></section>
      <footer><span>© {new Date().getFullYear()} Terrance Ruppel</span><span>Built with React</span></footer>
    </main>
  );
}
