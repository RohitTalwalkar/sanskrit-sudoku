import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import { Game } from "./pages/Game";
import { Title } from "./pages/Title";
import { BoardProvider } from "./context/BoardProvider";

const router = createHashRouter([
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/",
    element: <Title />,
  },
]);

function App() {
  return (
    <div className="App">
      <BoardProvider>
        <RouterProvider router={router} />
      </BoardProvider>
    </div>
  );
}

export default App;
