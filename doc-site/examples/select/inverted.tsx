import { Select } from '@datacamp/waffles/select';

function Example() {
  return (
    <Select
      inverted
      required
      label="Inverted select"
      description="Optional description of inverted select"
    >
      <option>First option</option>
      <option>Second option</option>
    </Select>
  );
}

export default Example;
