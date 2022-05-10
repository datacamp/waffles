import { Paragraph } from '@datacamp/waffles/paragraph';
import { Link } from '@datacamp/waffles/link';
import { ExternalLink } from '@datacamp/waffles/icon';

function Example() {
  return (
    <Paragraph>
      Build data skills online on{' '}
      <Link iconRight={<ExternalLink />} href="https://www.datacamp.com/">
        DataCamp
      </Link>{' '}
      and get ready for the future of work.
    </Paragraph>
  );
}

export default Example;
