import Cookies from 'js-cookie';

export const getCounterFromCookie = (): number => {
  const cookieCount = Cookies.get('counter') || '0';
  return parseInt(cookieCount, 10);
};

export const setCounterCookie = (count: number): void => {
    
  Cookies.set('counter', count.toString());
};

export const getDarkModeFromCookie = (): boolean => {
  
  const cookieDarkMode = Cookies.get('darkMode') === 'true';
  console.log(cookieDarkMode);

  return cookieDarkMode;
};

export const setDarkModeCookie = (darkMode: boolean): void => {

  Cookies.set('darkMode', darkMode.toString());
};
