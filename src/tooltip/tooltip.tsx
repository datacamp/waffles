import React, {
  useRef,
  Children,
  cloneElement,
  isValidElement,
  useState,
} from 'react';
import { css } from '@emotion/react';

import { tokens } from '../tokens';
import { Text } from '../text';
import { Portal } from '../portal';
import useElementMeasurements from './useElementMeasurements';

const tooltipStyle = css`
  background-color: ${tokens.colors.navy};
  color: ${tokens.colors.white};
  padding: ${tokens.spacing.small};
  border-radius: ${tokens.borderRadius.medium};
  position: absolute;
  top: 0;
  left: 0;
`;

type Tooltip = {
  children: JSX.Element; // Allow only single child to be passed
  content: React.ReactNode;
};

function Tooltip({ children, content }: Tooltip) {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);
  const trigger = Children.toArray(children)[0] as React.ReactElement; // It's safe to get single trigger component, because only 1 child is allowed
  const triggerMeasurements = useElementMeasurements(triggerRef);

  function handleMouseEnter() {
    if (trigger.props.onMouseEnter) {
      trigger.props.onMouseEnter();
    }
    setIsVisible(true);
  }

  function handleMouseLeave() {
    if (trigger.props.onMouseLeave) {
      trigger.props.onMouseLeave();
    }
    setIsVisible(false);
  }

  function handleFocus() {
    if (trigger.props.onFocus) {
      trigger.props.onFocus();
    }
    setIsVisible(true);
  }

  function handleBlur() {
    if (trigger.props.onBlur) {
      trigger.props.onBlur();
    }
    setIsVisible(false);
  }

  if (isValidElement(trigger)) {
    const element = cloneElement(trigger as React.ReactElement, {
      ref: triggerRef,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: handleFocus,
      onBlur: handleBlur,
    });

    return (
      <>
        {element}
        {isVisible && (
          <Portal>
            <Text
              role="tooltip"
              as="div"
              css={css`
                ${tooltipStyle}
                ${triggerMeasurements &&
                css`
                  left: ${(triggerMeasurements.left +
                    triggerMeasurements.right) /
                  2}px;
                  top: ${triggerMeasurements.bottom}px;
                  transform: translate(-50%, 0);
                `};
              `}
            >
              {content}
            </Text>
          </Portal>
        )}
      </>
    );
  }

  return children;
}

export default Tooltip;
