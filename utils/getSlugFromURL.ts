const getSlugFromURL = (url: string): string => url.split('/').pop();

export default getSlugFromURL;
