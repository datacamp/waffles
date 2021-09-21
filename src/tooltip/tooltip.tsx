import React, {
  useRef,
  Children,
  cloneElement,
  isValidElement,
  useState,
} from 'react';

import { tokens } from '../tokens';
import { Text } from '../text';
import { Portal } from '../portal';
import { tooltipStyle } from './styles';
import useElementMeasurements from './useElementMeasurements';
import useId from './useId';

type Tooltip = {
  children: JSX.Element; // Allow only single child to be passed
  content: React.ReactNode;
  placement?:
    | 'bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight';
  offset?: string;
};

function Tooltip({
  children,
  content,
  placement = 'bottom',
  offset = tokens.spacing.small,
}: Tooltip) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = useId('tooltip');
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
      ...(isVisible && { 'aria-describedby': tooltipId }),
    });

    return (
      <>
        {element}
        {isVisible && (
          <Portal>
            <Text
              id={tooltipId}
              role="tooltip"
              as="div"
              css={
                triggerMeasurements &&
                tooltipStyle({ triggerMeasurements, placement, offset })
              }
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
