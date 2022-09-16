import { Rotate, Svg } from "./BackgroundAnimationStyles";

const BackgroundAnimation = () => (
  <Svg viewBox="0 0 400 400">
    <Rotate stroke="#FF2137" r="100" cx="200" cy="200" fill="transparent" />
    <Rotate stroke="#177FB3" r="80" cx="200" cy="200" fill="transparent" />
    <Rotate stroke="#B3AD0E" r="60" cx="200" cy="200" fill="transparent" />
  </Svg>
);

export default BackgroundAnimation;
