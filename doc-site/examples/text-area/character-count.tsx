import { useState } from 'react';
import { TextArea } from '@datacamp/waffles/text-area';

function Example() {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  return (
    <TextArea
      showCharacterCount
      maxLength={100}
      placeholder="Text area with character count indicator."
      rows={3}
      value={value}
      onChange={handleChange}
    />
  );
}

export default Example;
