import { useState } from 'react';
import { css } from '@emotion/react';

import { tokens } from '@datacamp/waffles/tokens';
import { FormField } from '@datacamp/waffles/form-field';
import { Input } from '@datacamp/waffles/input';
import { TextArea } from '@datacamp/waffles/text-area';
import { Select } from '@datacamp/waffles/select';
import { Button } from '@datacamp/waffles/button';

const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: ${tokens.spacing.large};
`;

// By default 'Optional' indicator is shown next to non-required fields

function Example() {
  const [favLangs, setFavLangs] = useState('');
  const [reason, setReason] = useState('');
  const [method, setMethod] = useState('');

  return (
    <form
      css={formStyle}
      onSubmit={(event) => {
        event.preventDefault();
        alert('Form was submitted successfully!');
      }}
    >
      <FormField
        label="What are your favorite programming languages?"
        description="Please separate them with comma."
        required
      >
        <Input
          value={favLangs}
          onChange={(event) => setFavLangs(event.target.value)}
          placeholder="JavaScript, Python"
        />
      </FormField>
      <FormField
        label="What is the main reason you love those languages?"
        required
      >
        <TextArea
          rows={4}
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        />
      </FormField>
      <FormField label="How did you learn those languages?">
        <Select
          value={method}
          onChange={(event) => setMethod(event.target.value)}
        >
          <option value="" disabled hidden>
            Select the most appropriate method
          </option>
          <option value="data-camp">DataCamp</option>
          <option value="self-thought">Self-thought</option>
          <option value="university">University</option>
        </Select>
      </FormField>
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Example;
