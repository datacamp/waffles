import React, {
  useRef,
  Children,
  cloneElement,
  isValidElement,
  useState,
} from 'react';

import { Text } from '../text';
import { Portal } from '../portal';
import useElementMeasurements from './useElementMeasurements';
import { tooltipStyle } from './styles';

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
  offset?: number;
};

function Tooltip({
  children,
  content,
  placement = 'bottom',
  offset = 8,
}: Tooltip) {
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
