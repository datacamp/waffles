import { useState } from 'react';
import { TextArea } from '@datacamp/waffles/text-area';

function Example() {
  const [value, setValue] = useState('');

  return (
    <TextArea
      label="Your mood"
      description="How was your day?"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="How do you feel?"
      rows={3}
    />
  );
}

export default Example;
