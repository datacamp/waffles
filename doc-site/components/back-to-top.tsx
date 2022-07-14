import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { ArrowUp } from '@datacamp/waffles/icon';
import { useAnimateTransition } from '@datacamp/waffles/hooks';
import { Button } from '@datacamp/waffles/button';

type buttonStyleOptions = { isVisible: boolean };

function buttonStyle({ isVisible }: buttonStyleOptions) {
  return css`
    position: fixed;
    bottom: ${tokens.spacing.xlarge};
    animation: ${isVisible ? 'fadeIn' : 'fadeOut'} 400ms ease-out forwards;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `;
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const isAnimating = useAnimateTransition(isVisible, 400);

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

  return isAnimating ? (
    <Button
      css={buttonStyle({ isVisible })}
      variant="plain"
      size="small"
      iconLeft={<ArrowUp />}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      Back to Top
    </Button>
  ) : null;
}

export default BackToTop;
