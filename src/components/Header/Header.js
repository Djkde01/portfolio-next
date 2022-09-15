import Link from "next/link";
import { TbCoffee } from "react-icons/tb";
import { Container, Div1 } from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <TbCoffee size="3rem" />
          <span>Sergio Estrella</span>
        </a>
      </Link>
    </Div1>
  </Container>
);

export default Header;
