<script>
  import Section from '$lib/components/Section.svelte';
  import Card from '$lib/components/Card.svelte';
  import SkillBadge from '$lib/components/SkillBadge.svelte';
  import ContactLink from '$lib/components/ContactLink.svelte';
  import Stat from '$lib/components/Stat.svelte';
  import Button from '$lib/components/Button.svelte';
  import Timeline from '$lib/components/Timeline.svelte';
  import profileImg from '$lib/assets/profile.jpg';

  const yearsOfExperience = new Date().getFullYear() - 2019;

  const timelineItems = [
    {
      year: 'Today',
      title: 'Senior Data Scientist',
      location: 'RedCarbon.ai',
      active: true,
    },
    {
      year: '2019-23',
      title: 'Data Scientist',
      location: 'WithSecure Inc.',
    },
    {
      year: '2016-20',
      title: 'PhD Candidate',
      location: 'University of Trento',
    },
    {
      year: '2015-16',
      title: 'Software Consultant',
      location: 'Mind-Mercatis Srl',
    },
    {
      year: '2012-14',
      title: 'MSc Computer Engineering',
      location: 'Politecnico di Milano & BarcelonaTech',
    },
  ];
</script>

<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-profile">
        <img src={profileImg} alt="Sivam Pasupathipillai" class="profile-img" />
      </div>
      <h1>Sivam Pasupathipillai</h1>
      <p class="hero-subtitle">AI Specialist</p>
      <p class="hero-description">
        🤖 Turning hype into products. PhD in ICT from University of Trento. Learning enthusiast 📚
        Guitar player 🎸
      </p>
      <div class="hero-contact-links">
        <ContactLink
          href="https://www.linkedin.com/in/svmpsp/"
          title="LinkedIn"
          icon="/icons/linkedin.svg"
          alt="LinkedIn"
        />
        <ContactLink
          href="https://github.com/svmpsp"
          title="GitHub"
          icon="/icons/github.svg"
          alt="GitHub"
        />
        <ContactLink
          href="mailto:sivam.pasupathipillai@gmail.com"
          title="Email"
          icon="/icons/email.svg"
          alt="Email"
        />
      </div>
      <div class="hero-cta">
        <Button href="#about" variant="primary">Learn More</Button>
        <Button href="#contact" variant="secondary">Get in Touch</Button>
      </div>
    </div>
  </div>
</section>

<Section id="about" background="light">
  <h2>About Me</h2>
  <div class="about-content">
    <div class="about-text">
      <p>
        I work on turning AI research into practical solutions. Over the past 5+ years, I've focused
        on bridging the gap between academic research and real-world applications, helping deploy
        machine learning systems that handle large-scale data processing in production environments.
      </p>
      <p>
        My PhD in Information Technology from University of Trento explored scalable anomaly
        detection algorithms for large datasets. This research experience has been valuable in my
        current role as a Senior Data Scientist at RedCarbon.ai, where I contribute to AI product
        development from initial concepts through deployment.
      </p>
      <p>
        I enjoy working at the intersection of research and engineering—whether it's optimizing
        distributed systems, building ML pipelines, or collaborating with teams on technical
        challenges. I find it rewarding to help make complex AI technology more accessible and
        useful.
      </p>
      <p>
        When I'm not coding or analyzing data, I enjoy learning new things and playing guitar. I
        believe there's always something new to discover and improve upon.
      </p>
    </div>
    <div class="about-stats">
      <Stat value="{yearsOfExperience}+" label="Years of Experience" />
      <Stat value="PhD" label="Information Technology" />
      <Stat value="AI/ML" label="Specialization" />
    </div>
  </div>
</Section>

<Section id="experience">
  <h2>Experience & Skills</h2>
  <Timeline items={timelineItems} />

  <div class="skills">
    <h3>Technical Skills</h3>
    <div class="skills-table">
      <div class="skills-headers">
        <h4>Programming Languages</h4>
        <h4>AI/ML & Data</h4>
        <h4>Technologies</h4>
      </div>
      <div class="skills-rows">
        <div class="skills-row">
          <SkillBadge skill="Python" proficiency={9} />
          <SkillBadge skill="Machine Learning" proficiency={9} />
          <SkillBadge skill="Cloud Computing" proficiency={7} />
        </div>
        <div class="skills-row">
          <SkillBadge skill="Typescript" proficiency={8} />
          <SkillBadge skill="Deep Learning" proficiency={8} />
          <SkillBadge skill="Distributed Computing" proficiency={8} />
        </div>
        <div class="skills-row">
          <SkillBadge skill="Java" proficiency={7} />
          <SkillBadge skill="Big Data Management" proficiency={7} />
          <SkillBadge skill="Docker | Kubernetes" proficiency={8} />
        </div>
        <div class="skills-row">
          <SkillBadge skill="C++" proficiency={6} />
          <SkillBadge skill="ML Ops" proficiency={7} />
          <SkillBadge skill="Android Development" proficiency={4} />
        </div>
      </div>
    </div>
  </div>
</Section>

<Section id="projects" background="light">
  <h2>Projects & Research</h2>
  <div class="projects-grid">
    <Card
      variant="project"
      title="Bloggen"
      description="An AI-powered static site generator that creates professional blogs from a simple topic. Supports multiple LLM providers (Ollama, OpenAI, Anthropic), interactive site map review, and multiple themes."
      tags={['TypeScript', 'SvelteKit', 'AI/LLM', 'CLI']}
      href="https://bloggen.svmpsp.dev/"
    />
    <Card
      variant="project"
      title="Scalable Anomaly Detection"
      description="PhD research on scalable anomaly detection algorithms for large datasets, focusing on distributed computing approaches and real-time processing."
      tags={['Machine Learning', 'Big Data', 'Distributed Systems']}
    />
    <Card
      variant="project"
      title="Carcassone Game Implementation"
      description="Digital version of the popular turn-based board game featuring both local and remote gameplay. Implemented using Java with RMI and custom communication protocols."
      tags={['Java', 'RMI', 'Game Development']}
    />
    <Card
      variant="project"
      title="Industrial Durometer Controller"
      description="Android application for controlling industrial durometer equipment via tablet over USB connection. Successfully developed and tested prototype in one month."
      tags={['Android', 'USB Communication', 'Industrial IoT']}
    />
    <Card
      variant="project"
      title="Kernel Programming Project"
      description="Academic project involving programming various kernel features including interrupt management, process management, and I/O management with a comprehensive testing approach."
      tags={['Systems Programming', 'Kernel Development', 'C/C++']}
    />
  </div>
</Section>

<Section id="contact" background="dark">
  <h2>Get in Touch</h2>
  <div class="contact-content">
    <div class="contact-info">
      <p>
        I'm always interested in discussing new opportunities, collaborations, or just having a
        conversation about AI, data science, and technology.
      </p>
      <div class="contact-links">
        <ContactLink
          href="https://www.linkedin.com/in/svmpsp/"
          title="LinkedIn"
          icon="/icons/linkedin.svg"
          alt="LinkedIn"
        />
        <ContactLink
          href="https://github.com/svmpsp"
          title="GitHub"
          icon="/icons/github.svg"
          alt="GitHub"
        />
        <ContactLink
          href="mailto:sivam.pasupathipillai@gmail.com"
          title="Email"
          icon="/icons/email.svg"
          alt="Email"
        />
      </div>
    </div>
  </div>
</Section>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
  }

  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #0f766e 0%, #134e4a 100%);
    color: white;
    padding: 8rem 0 6rem;
    text-align: center;
  }

  .hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  .hero-description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    opacity: 0.8;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-profile {
    margin-bottom: 2rem;
  }

  .profile-img {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }

  .hero-contact-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .hero-contact-links :global(.contact-link) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .hero-contact-links :global(.contact-link:hover) {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px) scale(1.1);
  }

  .hero-contact-links :global(.contact-link img) {
    width: 48px;
    height: 48px;
    filter: brightness(0) invert(1);
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  .hero-contact-links :global(.contact-link:hover img) {
    opacity: 1;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .about-text p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: #4b5563;
  }

  .about-stats {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .skills h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: #1f2937;
    text-align: center;
  }

  .skills-table {
    max-width: 900px;
    margin: 0 auto;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .skills-headers {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
    text-align: left;
  }

  .skills-headers h4 {
    font-size: 1.2rem;
    color: #0f766e;
    margin: 0;
    font-weight: 600;
  }

  .skills-rows {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .skills-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .contact-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-content p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .contact-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .contact-links :global(.contact-link) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .contact-links :global(.contact-link:hover) {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px) scale(1.1);
  }

  .contact-links :global(.contact-link img) {
    width: 48px;
    height: 48px;
    filter: brightness(0) invert(1);
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  .contact-links :global(.contact-link:hover img) {
    opacity: 1;
  }

  /* Common responsive styles for sections */
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #1f2937;
  }

  /* Override h2 color for dark sections */
  :global(.section-dark) h2 {
    color: white;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .container {
      padding: 0 1rem;
      max-width: 100%;
    }

    .hero {
      padding: 6rem 0 4rem;
    }

    .hero h1 {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.25rem;
    }

    .about-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .about-stats {
      flex-direction: row;
      justify-content: center;
      gap: 1rem;
    }

    .hero-cta {
      flex-direction: column;
      align-items: center;
    }

    .hero-contact-links {
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .hero-contact-links :global(.contact-link) {
      width: 54px;
      height: 54px;
    }

    .hero-contact-links :global(.contact-link img) {
      width: 42px;
      height: 42px;
    }

    .contact-links {
      gap: 1.5rem;
    }

    .contact-links :global(.contact-link) {
      width: 54px;
      height: 54px;
    }

    .contact-links :global(.contact-link img) {
      width: 42px;
      height: 42px;
    }

    .skills-table {
      max-width: 100%;
      padding: 1.5rem;
    }

    .skills-headers {
      gap: 1rem;
    }

    .skills-row {
      gap: 1rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 0.75rem;
    }

    .hero h1 {
      font-size: 2rem;
      word-break: break-word;
    }

    .hero-subtitle {
      font-size: 1.1rem;
    }

    .about-stats {
      flex-direction: column;
      gap: 1rem;
    }

    .hero-contact-links {
      gap: 0.8rem;
      margin-bottom: 1rem;
    }

    .hero-contact-links :global(.contact-link) {
      width: 48px;
      height: 48px;
    }

    .hero-contact-links :global(.contact-link img) {
      width: 36px;
      height: 36px;
    }

    .contact-links :global(.contact-link) {
      width: 48px;
      height: 48px;
    }

    .contact-links :global(.contact-link img) {
      width: 36px;
      height: 36px;
    }

    .skills-headers h4 {
      font-size: 1rem;
    }

    .skills-headers {
      margin-bottom: 1rem;
    }

    .skills-table {
      padding: 1rem;
    }

    .skills-row {
      gap: 0.5rem;
    }
  }
</style>
