import Link from "next/link";
import { TbCoffee } from "react-icons/tb";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import {
  Container,
  Div1,
  NavMenu,
  NavLink,
  ContactLinksContainer,
  SocialIcons,
  Span,
  LogoIcon,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <LogoIcon>
          <TbCoffee size="3rem" />
          <Span>Sergio Estrella</Span>
        </LogoIcon>
      </Link>
    </Div1>
    <NavMenu>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#blog">
          <NavLink>Blog</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#services">
          <NavLink>Services</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </NavMenu>
    <ContactLinksContainer>
      <SocialIcons href="https://github.com/Djkde01">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/djkde/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/djkde">
        <AiOutlineTwitter size="3rem" />
      </SocialIcons>
    </ContactLinksContainer>
  </Container>
);

export default Header;
