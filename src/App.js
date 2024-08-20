import Layout from "./pages/Layout";
import Routers from "./routers";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routers />
      </Layout>
    </Router>
  );
}
