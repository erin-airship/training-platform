import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthenticatedRoutes } from "./routes/AuthenticatedRoutes";
import { SharedRoutes } from "./routes/SharedRoutes";
import { UnauthenticatedRoutes } from "./routes/UnAuthenticatedRoutes";

function App() {
  // const { state } = AuthContext.useLogin();
  // const authenticated = state.accessToken && true;
  const authenticated = false;

  return (
    <>
      <BrowserRouter>
        {/* {authenticated && <ResponsiveAppBar />} */}
        {authenticated ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />}
        <SharedRoutes />
      </BrowserRouter>
    </>
  )
}

export default App;
