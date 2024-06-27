import About from "./components/about/about";
import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Header from "./components/header/header.component";
import Promo from "./components/promo/promo";
import Strip from "./components/strip/strip";
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Promo />
        <About />
        <Features />
        <Strip />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;