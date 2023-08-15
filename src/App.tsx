import { ThemeProvider } from "styled-components";
import { Layout } from "./containers/Layout/Layout";
import { theme } from "./styles/theme";
import AssessmentOverview from "./components/AssesmentOverview";
import { GlobalStyle } from "./styles/globalStyle";
import MyAssessment from "./components/MyAssessment";
import { GlobalContextProvider } from "./context/globalContext";

function App() {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <>
            <AssessmentOverview />
            <MyAssessment />
          </>
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </GlobalContextProvider>
  );
}

export default App;
