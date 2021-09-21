import React, {
  useRef,
  Children,
  cloneElement,
  isValidElement,
  useState,
  useEffect,
} from 'react';

import { tokens } from '../tokens';
import { Text } from '../text';
import { Portal } from '../portal';
import { tooltipStyle } from './styles';
import useElementMeasurements from './useElementMeasurements';
import useId from './useId';

const REST_TIMER = 125;

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
  inverted?: boolean;
};

function Tooltip({
  children,
  content,
  placement = 'bottom',
  offset = tokens.spacing.small,
  inverted = false,
}: Tooltip) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = useId('tooltip');
  const triggerRef = useRef<HTMLElement>(null);
  const trigger = Children.toArray(children)[0] as React.ReactElement; // It's safe to get single trigger component, because only 1 child is allowed
  const triggerMeasurements = useElementMeasurements(triggerRef);

  const enterTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      clearTimeout(Number(enterTimer.current));
    };
  }, []);

  function handleMouseEnter() {
    enterTimer.current = setTimeout(() => {
      if (trigger.props.onMouseEnter) {
        trigger.props.onMouseEnter();
      }
      setIsVisible(true);
    }, REST_TIMER);
  }

  function handleMouseLeave() {
    clearTimeout(Number(enterTimer.current));

    if (trigger.props.onMouseLeave) {
      trigger.props.onMouseLeave();
    }
    setIsVisible(false);
  }

  function handleFocus() {
    enterTimer.current = setTimeout(() => {
      if (trigger.props.onFocus) {
        trigger.props.onFocus();
      }
      setIsVisible(true);
    }, REST_TIMER);
  }

  function handleBlur() {
    clearTimeout(Number(enterTimer.current));

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
                tooltipStyle({
                  triggerMeasurements,
                  placement,
                  offset,
                  inverted,
                })
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
