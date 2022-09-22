import { projects } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionTitle,
  BlogCard,
  HeaderThree,
  Hr,
  CardInfo,
  TitleContent,
} from "../../styles/GlobalComponents";
import {
  ExternalLinks,
  GridContainer,
  Img,
  Tag,
  TagList,
  UtilityList,
} from "./ProjectsStyles";

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <br />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, visit, source }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree isTitle>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source}>Code</ExternalLinks>
              <ExternalLinks href={visit}>Deploy</ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
