import { FormField } from '@datacamp/waffles/form-field';
import { Input } from '@datacamp/waffles/input';
import { Button } from '@datacamp/waffles/button';
import {
  AddCircle,
  Branch,
  ChevronRight,
  CrossCircle,
  Trash,
} from '@datacamp/waffles/icon';
import { css } from '@emotion/react';
import { useState, useRef } from 'react';

function Workbench() {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleClear() {
    setValue('');
    value && inputRef.current?.focus();
  }
  return (
    <div
      css={css`
        padding: 24px;
      `}
    >
      <FormField
        size={'small'}
        label="Input with an error message"
        description={'test'}
        required
      >
        <Input
          iconLeft={<Branch />}
          enhancerRight={<ChevronRight />}
          placeholder="Regular icon left and right"
        />
      </FormField>
      <FormField label="Input with an error message" required>
        <Input
          disabled
          iconLeft={<Branch />}
          enhancerRight={
            <Input.Enhancer aria-label="Clear" onClick={handleClear}>
              <CrossCircle size={'xsmall'} />
            </Input.Enhancer>
          }
          placeholder="Icon left and enhancer right"
          ref={inputRef}
          value={value}
          onChange={handleChange}
        />
      </FormField>
      {/* <FormField
        size={'small'}
        label="Input with an error message"
        error="Error message"
        required
      >
        <Input placeholder="Error" />
      </FormField>
      <FormField
        label="Input with an error message"
        error="Error message"
        required
      >
        <Input placeholder="Error" />
      </FormField>
      <FormField size={'small'} label="Disabled text area">
        <Input
          iconLeft={<Branch />}
          enhancerRight={<ChevronRight />}
          placeholder="Regular icon left and right"
        />
      </FormField>
      <FormField label="Disabled text area">
        <Input
          iconLeft={<Branch />}
          enhancerRight={<ChevronRight />}
          placeholder="Regular icon left and right"
        />
      </FormField> */}

      {/* <Button
        size={'small'}
        icon={<Trash />}
        aria-label="Icon only"
        variant="destructive"
      />
      <Button icon={<Trash />} aria-label="Icon only" variant="destructive" />
      <Button size={'small'} iconLeft={<AddCircle />}>
        Icon Left
      </Button>
      <Button iconLeft={<AddCircle />}>Icon Left</Button>
      <Button size={'small'} iconRight={<AddCircle />}>
        Icon Right
      </Button>
      <Button iconRight={<AddCircle />}>Icon Left</Button>

      <Button size={'large'} iconRight={<AddCircle />}>
        Icon Right
      </Button> */}
    </div>
  );
}

export default Workbench;
