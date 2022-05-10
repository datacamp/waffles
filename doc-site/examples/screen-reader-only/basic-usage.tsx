import { ScreenReaderOnly } from '@datacamp/waffles/screen-reader-only';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Link } from '@datacamp/waffles/link';
import { ExternalLink } from '@datacamp/waffles/icon';

function Example() {
  return (
    <Paragraph>
      With{' '}
      <Link href="https://www.datacamp.com/" iconRight={<ExternalLink />}>
        DataCamp <ScreenReaderOnly>(external link)</ScreenReaderOnly>
      </Link>{' '}
      you can gain the career-building Python skills you need to succeed as a
      data scientist.
    </Paragraph>
  );
}

export default Example;
