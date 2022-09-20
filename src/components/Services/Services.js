import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { MdSettingsSuggest, MdPhonelink, MdPalette } from "react-icons/md";
import {
  List,
  ListContainer,
  ListIcon,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./ServicesStyles";

const Services = () => (
  <Section id="services">
    <SectionDivider />
    <br />
    <SectionTitle>Services</SectionTitle>
    <SectionText>
      I've worked with different technologies in web development, offering 3
      main services
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <MdPhonelink size="3rem" />
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with React.js
            <br />
            Using Next.js and Styled Components
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <MdSettingsSuggest size="3rem" />
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with Node.js
            <br />
            Using Fastify and Express (Also GCP)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <MdPalette size="3rem" />
          <ListTitle>UI Design</ListTitle>
          <ListParagraph>
            Experience with Figma
            <br />
            and Material Design
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Services;
