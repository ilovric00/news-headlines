const getSlugFromURL = (url: string): string => {
  const urlSubstrings = url.split('/');
  const { length } = urlSubstrings;
  return urlSubstrings[length - 1] !== '' ? urlSubstrings[length - 1] : urlSubstrings[length - 2];
};

export default getSlugFromURL;
