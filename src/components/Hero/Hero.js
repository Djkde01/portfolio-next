import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome! <br />
        I'm Sergio Estrella
      </SectionTitle>
      <SectionText>
        Web Developer, teacher, community builder & eternal student
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
