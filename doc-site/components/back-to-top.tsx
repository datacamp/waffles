import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { tokens } from '@datacamp/waffles/tokens';
import { ArrowUp } from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

const buttonStyle = css`
  position: fixed;
  bottom: ${tokens.spacing.xlarge};
`;

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

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

  return isVisible ? (
    <Button
      css={buttonStyle}
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
