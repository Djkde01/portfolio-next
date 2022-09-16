import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

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
      <Button>About me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
