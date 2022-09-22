import About from "../components/About/About";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Blog from "../components/Blog/Blog";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";

import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <About />
      <Blog />
      <Projects />
      <Services />
    </Layout>
  );
};

export default Home;
