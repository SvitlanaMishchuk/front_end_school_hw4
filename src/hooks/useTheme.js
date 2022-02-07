import { useState } from 'react';

import themes from './../themes.json';

export const useTheme = () => {
  const [theme, setTheme] = useState(themes.data.light);

  const hadleSwitchTheme = () => {
    theme.id === themes.data.light.id
      ? setTheme(themes.data.dark)
      : setTheme(themes.data.light);
  };

  return { theme, hadleSwitchTheme };
};
