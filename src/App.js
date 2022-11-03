import "./App.css";
import CustomRoutes from "./CustomRoutes";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/ContactPage";

function App() {
  return (
    <div className="app">
      <div className="container">
        <CustomRoutes
          components={[
            { path: "/", component: <Home /> },
            { path: "/contact", component: <Contact /> },
          ]}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
