import Router from "./rout/Rout";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="bg-black w-full">
      <Toaster position="top-center" richColors />
      <Router />
    </div>
  );
}

export default App;
