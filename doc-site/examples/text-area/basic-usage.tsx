import { useState } from 'react';

import { TextArea } from '@datacamp/waffles/text-area';

function Example() {
  const [value, setValue] = useState('');

  return (
    <TextArea
      aria-label="Your mood"
      placeholder="How do you feel?"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      rows={3}
    />
  );
}

export default Example;
