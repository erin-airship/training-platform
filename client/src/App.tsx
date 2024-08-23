import RootRouter from "./routes";
import { AuthProvider } from "./context/AuthContext";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RootRouter />
    </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
