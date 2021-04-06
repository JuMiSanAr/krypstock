import {UseDarkMode} from "./components/darkLightmode/useDarkMode";
import {darkTheme, lightTheme} from "./styles/Themes";
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";
import Toggle from "./components/darkLightmode/toggler";

function App() {

  const [theme, themeToggler, mountedComponent] = UseDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
      <ThemeProvider theme={themeMode}>
        <>
      <GlobalStyles/>

     <Toggle theme={theme} toggleTheme={themeToggler} />
     <h1> Welcome to KrypStock Tracker</h1>
           </>
      </ThemeProvider>
  );
}

export default App;
