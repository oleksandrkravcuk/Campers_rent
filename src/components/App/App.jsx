import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import useTheme from "../../hooks/useTheme";
import GlobalStyles from "../../assets/globalStyles/GlobalStyles";
import SharedHeader from "../../layouts/SharedHeader";

const MainPage = lazy(() => import("../../pages/Main"));
const CatalogPage = lazy(() => import("../../pages/Catalog"));
const Favorites = lazy(() => import("../../pages/Favorites"));

const App = () => {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<SharedHeader />}>
          <Route index element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<MainPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
