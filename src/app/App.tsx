import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "routes";

// Componenets
import Scroll from "components/scroll";

const App = () => {
  return (
    <Router>
      <Scroll />
      <AppRoutes />
    </Router>
  );
};

export default App;
