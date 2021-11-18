import { useState } from 'react';

import { TextArea } from '@datacamp/waffles/text-area';

function Example() {
  const [value, setValue] = useState('');

  return (
    <TextArea
      autoGrow
      label="Auto-growing text area"
      description="Text area expands in height as much as it needs."
      value={value}
      onChange={(event) => setValue(event.target.value)}
      rows={3}
    />
  );
}

export default Example;
