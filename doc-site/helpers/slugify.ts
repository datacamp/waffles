import slugifyBase from 'slugify';

function slugify(input: string) {
  return slugifyBase(input, { lower: true });
}

export default slugify;
