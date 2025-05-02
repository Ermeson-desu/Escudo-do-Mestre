import {Home,Add,Escudo} from '../src/screen/Screens';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
export default function Index() {
  return (
      <ThemeProvider theme={theme}>
          <Escudo/>
      </ThemeProvider>
  );
}
