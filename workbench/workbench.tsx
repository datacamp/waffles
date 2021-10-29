import { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { Input } from '@datacamp/waffles/input';
import { TextField } from '@datacamp/waffles/text-field';
import { Button } from '@datacamp/waffles/button';
import { AddCircle, ChevronDown, CrossCircle } from '@datacamp/waffles/icon';
import { ScreenReaderOnly } from '@datacamp/waffles/screen-reader-only';
import { Checkbox } from '@datacamp/waffles/checkbox';
import { Radio } from '@datacamp/waffles/radio';
import { Switch } from '@datacamp/waffles/switch';

function Workbench() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isInvertedChecked, setInvertedIsChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('radio2');
  const [invertedRadioValue, setInvertedRadioValue] = useState('radio2');
  const [isSwitched, setIsSwitched] = useState(false);
  const [isSwitched2, setIsSwitched2] = useState(false);
  const [isInvertedSwitched, setIsInvertedSwitched] = useState(false);
  const [isInvertedSwitched2, setIsInvertedSwitched2] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div
        css={css`
          padding: 50px;
        `}
      >
        <form
          css={css`
            display: flex;
            gap: ${tokens.spacing.small};
            align-items: flex-end;
          `}
        >
          <Input
            // type="search"
            placeholder="Placeholder"
            name="test"
            // error="Some custom error."
            // disabled
            // required
            // pattern="[0-9]{3}"
            autoComplete="off"
            size="small"
            // iconLeft={<AddCircle />}
            // enhancerRight={<Input.Enhancer><CrossCircle /></Input.Enhancer>}
          />
          <Button type="submit" size="small">
            Hello!
          </Button>
        </form>
      </div>
      {/* INVERTED INPUT */}
      <div
        css={css`
          padding: 50px;
          background-color: ${tokens.colors.navy};
        `}
      >
        <form
          css={css`
            display: flex;
            gap: ${tokens.spacing.small};
            align-items: flex-end;
          `}
        >
          <TextField
            type="password"
            label="Inverted Label"
            placeholder="Inverted Placeholder"
            name="invertedTest"
            // description="Inverted. Additional description to explain input content. Additional description to explain input content."
            // error="Some custom error."
            disabled
            required
            pattern="[0-9]{3}"
            autoComplete="off"
            inverted
            size="medium"
            iconLeft={<AddCircle />}
            // enhancerRight={<ChevronDown />}
            // enhancerRight={<TextField.Enhancer disabled><CrossCircle /></TextField.Enhancer>}
          />
          <Button type="submit" inverted size="medium">
            Hello!
          </Button>
        </form>
        <ScreenReaderOnly>I am hidden but not.</ScreenReaderOnly>
      </div>
      {/* CHECKBOX */}
      <div
        css={css`
          padding: 50px;
        `}
      >
        <Checkbox
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          // disabled
          // error
        >
          This is a checkbox. Additional description to explain input content.
          Additional description to explain input content.
        </Checkbox>
      </div>
      {/* INVERTED CHECKBOX */}
      <div
        css={css`
          padding: 50px;
          background-color: ${tokens.colors.navy};
        `}
      >
        <Checkbox
          inverted
          checked={isInvertedChecked}
          onChange={() => setInvertedIsChecked(!isInvertedChecked)}
          // disabled
          // error
        >
          This is a checkbox. Inverted. Additional description to explain input
          content. Additional description to explain input content.
        </Checkbox>
      </div>
      {/* RADIOS */}
      <div
        css={css`
          padding: 50px;
          display: flex;
          flex-direction: column;
          gap: ${tokens.spacing.medium};
        `}
      >
        <Radio
          checked={radioValue === 'radio1'}
          name="coolRadios"
          value="radio1"
          onChange={() => setRadioValue('radio1')}
          // disabled
          // error
        >
          This is a radio 1.
        </Radio>
        <Radio
          checked={radioValue === 'radio2'}
          name="coolRadios"
          value="radio2"
          onChange={() => setRadioValue('radio2')}
          // disabled
          // error
        >
          This is a radio 2.
        </Radio>
        <Radio
          checked={radioValue === 'radio3'}
          name="coolRadios"
          value="radio3"
          onChange={() => setRadioValue('radio3')}
          disabled
          // error
        >
          This is a radio 3.
        </Radio>
      </div>
      {/* INVETED RADIOS */}
      <div
        css={css`
          padding: 50px;
          display: flex;
          flex-direction: column;
          gap: ${tokens.spacing.medium};
          background-color: ${tokens.colors.navy};
        `}
      >
        <Radio
          inverted
          checked={invertedRadioValue === 'radio1'}
          name="coolRadios2"
          value="radio1"
          onChange={() => setInvertedRadioValue('radio1')}
          // disabled
          // error
        >
          This is a radio 1.
        </Radio>
        <Radio
          inverted
          checked={invertedRadioValue === 'radio2'}
          name="coolRadios2"
          value="radio2"
          onChange={() => setInvertedRadioValue('radio2')}
          // disabled
          // error
        >
          This is a radio 2.
        </Radio>
        <Radio
          inverted
          checked={invertedRadioValue === 'radio3'}
          name="coolRadios2"
          value="radio3"
          onChange={() => setInvertedRadioValue('radio3')}
          // disabled
          // error
        >
          This is a radio 3.
        </Radio>
      </div>
      {/* SWITCH */}
      <div
        css={css`
          padding: 50px;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          gap: ${tokens.spacing.medium};
        `}
      >
        <Switch
          checked={isSwitched}
          onChange={() => setIsSwitched(!isSwitched)}
          // disabled
          // error
        >
          This is a switch.
        </Switch>
        <Switch
          checked={isSwitched2}
          onChange={() => setIsSwitched2(!isSwitched2)}
          // disabled
          // error
        >
          This is another switch.
        </Switch>
      </div>
      {/* SWITCH INVERTED */}
      <div
        css={css`
          background-color: ${tokens.colors.navy};
        `}
      >
        <div
          css={css`
            padding: 50px;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: ${tokens.spacing.medium};
          `}
        >
          <Switch
            inverted
            checked={isInvertedSwitched}
            onChange={() => setIsInvertedSwitched(!isInvertedSwitched)}
            // disabled
            // error
          >
            This is inverted switch.
          </Switch>
          <Switch
            inverted
            checked={isInvertedSwitched2}
            onChange={() => setIsInvertedSwitched2(!isInvertedSwitched2)}
            // disabled
            // error
          >
            This is another inverted switch.
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Workbench;
