import { useEffect, useRef, useState } from "react";
import { TimeLineData } from "../../constants/constants";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Timeline from "../Timeline/Timeline";
import {
  CarouselButtonDot,
  CarouselButtons,
  CarouselButton,
  CarouselContainer,
  CarouselItem,
  CarouselItemTitle,
  CarouselMobileScrollNode,
  CarouselItemText,
} from "./AboutStyles";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const About = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (event, index) => {
    event.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (index / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  useEffect(() => {
    const handleRezise = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleRezise);
  }, []);

  return (
    <Section nopadding id="about">
      <SectionDivider />
      <SectionTitle main>About Me</SectionTitle>
      <SectionText>
        Some brief description about me, this have to explain who am I, what I
        am doing and that thing that makes me unique
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, i) => (
            <CarouselMobileScrollNode
              key={i}
              final={i === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={i}
                id={`carousel_item-${i}`}
                active={activeItem}
                onClick={(e) => handleClick(e, i)}
              >
                <CarouselItemTitle>
                  {item.year}
                  <Timeline />
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, i) => (
          <CarouselButton
            key={i}
            index={i}
            active={activeItem}
            onClick={(e) => handleClick(e, i)}
            type="button"
          >
            <CarouselButtonDot active={activeItem} />
          </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default About;
