import "./App.css";
import Routing from "./customRoutes/Routes";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contactPage/ContactPage";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Routing
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
