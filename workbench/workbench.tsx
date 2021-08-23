import { SlackColoredBrand, AddCircle } from '@datacamp/waffles/icon';
import { Button } from '@datacamp/waffles/button';

function Workbench() {
  return (
    <>
      <Button>
        <SlackColoredBrand size="xsmall" />
        <AddCircle />
        Cheers
      </Button>
    </>
  );
}

export default Workbench;
