import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { ArrowUp } from '@datacamp/waffles/icon';
import { useAnimateTransition } from '@datacamp/waffles/hooks';
import { Button } from '@datacamp/waffles/button';

const buttonStyle = css`
  position: fixed;
  bottom: ${tokens.spacing.xlarge};
  animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const isAnimating = useAnimateTransition(isVisible, 300);

  useEffect(() => {
    // Show button if the window is scrolled below the default header height (54px)
    function handleVisibilityChange() {
      window.scrollY > 54 ? setIsVisible(true) : setIsVisible(false);
    }

    handleVisibilityChange();
    window.addEventListener('scroll', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleVisibilityChange);
    };
  }, []);

  return isVisible
    ? isAnimating && (
        <Button
          css={buttonStyle}
          variant="plain"
          size="small"
          iconLeft={<ArrowUp />}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top
        </Button>
      )
    : null;
}

export default BackToTop;
