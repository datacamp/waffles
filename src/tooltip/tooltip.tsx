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
  /* The content that will trigger the tooltip. Must be single element. */
  children: JSX.Element;
  /* The content of the tooltip. */
  content: React.ReactNode;
  /* Sets the tooltip's position relative to the trigger. */
  placement?:
    | 'bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight';
  /* Sets the distance between tooltip and it's trigger. By default `tokens.spacing.small` [design token](/foundation/design-tokens/) is used. */
  offset?: string;
  /* Sets the style of the tooltip suitable for dark backgrounds. */
  inverted?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Tooltip({
  children,
  content,
  placement = 'bottom',
  offset = tokens.spacing.small,
  inverted = false,
  ...restProps
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
    if (trigger.props.onMouseEnter) {
      trigger.props.onMouseEnter();
    }

    enterTimer.current = setTimeout(() => {
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
    if (trigger.props.onFocus) {
      trigger.props.onFocus();
    }

    enterTimer.current = setTimeout(() => {
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
              {...restProps}
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
