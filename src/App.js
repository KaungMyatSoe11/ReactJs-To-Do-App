import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Todo } from "./components/Todo";
import { AllMeetUps } from "./pages/AllMeetUps";
import { Favorites } from "./pages/Favorites";
import { NewMeetUp } from "./pages/NewMeetUp";

function App() {
  return (
    <Routes>
      <Route  path="/" element={<AllMeetUps />} />
      <Route path="/new-meetups" element={<NewMeetUp />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
