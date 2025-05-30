import { Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { useGlobal } from 'qapp-core';
import { useTranslation } from 'react-i18next';
import { EnumTheme, themeAtom } from './state/global/system';

function App() {
  const { auth } = useGlobal();
  const { t } = useTranslation(['core']);

  // retrieve the theme 'light' or 'dark'
  const [theme] = useAtom(themeAtom);

  return (
    <>
      <Typography>
        {t('core:welcome', { postProcess: 'capitalizeAll' })} {auth?.name}
      </Typography>

      <Typography>
        {t('core:using_theme', { postProcess: 'capitalizeFirstChar' })}{' '}
        {theme === EnumTheme.DARK ? 'Dark' : 'Light'}
      </Typography>
    </>
  );
}

export default App;
