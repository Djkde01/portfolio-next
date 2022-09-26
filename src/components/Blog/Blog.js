import {
  CardInfo,
  TitleContent,
  Hr,
  HeaderThree,
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { BlogData } from "../../constants/constants";
import { BlogContainer, BlogCard, BlogButton, BlogLinks } from "./BlogStyles";

const Blog = () => (
  <Section id="blog">
    <SectionDivider />
    <br />
    <SectionTitle>Blog</SectionTitle>
    <BlogContainer>
      {BlogData.map(({ id, title, slug, description }) => (
        <BlogCard key={id}>
          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo nopadding>{description}</CardInfo>
          <BlogLinks>
            <BlogButton href="/">Read more</BlogButton>
          </BlogLinks>
        </BlogCard>
      ))}
    </BlogContainer>
  </Section>
);

export default Blog;
