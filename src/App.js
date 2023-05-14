import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Templates from "./components/Templates";
import TaskPage from "./components/TaskPage";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import CreateTaskPage from "./components/CreateTaskPage";
import EditTaskPage from "./components/EditTaskPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/template/" element={<Templates />}/>
        <Route path="/task" element={<TaskPage />} />
        <Route path="/edit/:title" element={<EditTaskPage />} />
        <Route path="/create-task" element={<CreateTaskPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
