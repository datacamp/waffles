import { useState } from 'react';

import { Checkbox } from '@datacamp/waffles/checkbox';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox inverted checked={checked} onChange={() => setChecked(!checked)}>
      Inverted checkbox
    </Checkbox>
  );
}

export default Example;
