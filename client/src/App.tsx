import RootRouter from "./routes";
import { AuthProvider } from "./context/authContext";
import "./App.css";

function App() {
  // storage.setToken("stringCopied")
  return (
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
  );
}

export default App;
