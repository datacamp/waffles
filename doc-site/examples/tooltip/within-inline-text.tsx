import { Tooltip } from '@datacamp/waffles/tooltip';
import { Paragraph } from '@datacamp/waffles/paragraph';
import { Link } from '@datacamp/waffles/link';

function Example() {
  return (
    <Paragraph>
      Through hands-on exercises, with{' '}
      <Tooltip content="The best place to build data skills online.">
        <Link href="https://www.datacamp.com/">DataCamp</Link>
      </Tooltip>{' '}
      you’ll learn how to understand data, whether it’s a bar plot on the news
      or as a statistic shared during a work meeting. You’ll expand your
      knowledge of key data topics, including data science, machine learning,
      data visualization, and even data engineering and cloud computing.
    </Paragraph>
  );
}

export default Example;
