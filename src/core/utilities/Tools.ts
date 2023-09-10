export const Tools = {
  setUserAuthToken: (newValue: string): string => {
    localStorage.setItem('USER_AUTH_TOKEN', newValue);
    return newValue;
  },
  clearUserAuthToken: () => {
    localStorage.removeItem('USER_AUTH_TOKEN');
  },
  getUserAuthToken: (): string | null => {
    const value = localStorage.getItem('USER_AUTH_TOKEN');
    if (value) return value;
    return null;
  },
  getCookie: (key: string) => {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split('=');
      if (key == cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  },
  setCookie: (key: string, value: any, daysToLive = 999) => {
    let cookie = key + '=' + encodeURIComponent(value);
    if (typeof daysToLive === 'number') {
      cookie += '; max-age=' + daysToLive * 24 * 60 * 60;
      document.cookie = cookie;
    }
  },
  objectToQueryString: (object = {}, withQuestionMark = true) => {
    const filteredObject: any = Object.fromEntries(
      Object.entries(object).filter((item) => item[1] || item[1] === false)
    );
    const query = new URLSearchParams(filteredObject).toString();

    return query && withQuestionMark ? `?${query}` : query;
  },
  apiErrorHandler: (error: any) => {
    if (error) console.error(error.message);
  },
  scrollToTop: () => window.scrollTo(0, 0),
};
