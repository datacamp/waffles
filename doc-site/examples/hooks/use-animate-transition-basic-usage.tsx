import { useState } from 'react';
import { css, keyframes } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { Text } from '@datacamp/waffles/text';
import { useAnimateTransition } from '@datacamp/waffles/hooks';
import { Button } from '@datacamp/waffles/button';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(1);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(0);
  }
  100% {
    opacity: 0;
    transform: scaleX(0);
  }
`;

type AnimatedCardProps = {
  isVisible: boolean;
};

function AnimatedCard({ isVisible }: AnimatedCardProps) {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        background-color: ${tokens.colors.blue};
        width: 100%;
        height: ${tokens.sizing.medium};
        border-radius: ${tokens.borderRadius.medium};
        padding-left: ${tokens.spacing.medium};
        padding-right: ${tokens.spacing.medium};
        // Initial transforms setup, to keep them in sync with keyframes
        transform-origin: 0 0;
        opacity: 0;
        transform: scaleX(0);
        // Animation
        animation: ${isVisible ? fadeIn : fadeOut} 300ms ease-out forwards;
      `}
    >
      <Text as="p">Simple animated element</Text>
    </div>
  );
}

function Example() {
  const [isVisible, setIsVisible] = useState(true);
  // Timeout, in this case 400ms
  // should be slightly longer than CSS animation duration
  const isAnimating = useAnimateTransition(isVisible, 400);

  return (
    <div
      css={css`
        display: flex;
        gap: ${tokens.spacing.small};
      `}
    >
      <Button onClick={() => setIsVisible(!isVisible)}>Animate!</Button>
      {isAnimating ? <AnimatedCard isVisible={isVisible} /> : null}
    </div>
  );
}

export default Example;
