// eslint-disable-next-line consistent-return
const getTranslatedUrl = (oldUrl) => {
  // FR > EN
  if (oldUrl === '/cv') {
    return '/resume';
  }
  if (oldUrl === '/competences') {
    return '/skills';
  }
  if (oldUrl === '/jeux-video') {
    return '/video-games';
  }
  if (oldUrl === '/photos') {
    return '/pictures';
  }
  // EN > FR
  if (oldUrl === '/resume') {
    return '/cv';
  }
  if (oldUrl === '/skills') {
    return '/competences';
  }
  if (oldUrl === '/video-games') {
    return '/jeux-video';
  }
  if (oldUrl === '/pictures') {
    return '/photos';
  }
};

export default getTranslatedUrl;
