import TaskList from "./TaskList";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getAllTasksData } from "../API/todoApi";

const TaskPage = () => {
  const navigate = useNavigate();
  const [tasksData, setTasksData] = useState(null);
  useEffect(() => {
    getAllTasksData().then((data) => setTasksData(data));
  }, []);
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h2 style={{ textAlign: "center" }}> Make Your TO Do List !!</h2>
        <Button
          variant="outline-dark"
          onClick={() => navigate("/create-task")}
          style={{ marginTop: "50px", marginBottom: 30 }}
        >
          Add New Task
        </Button>
        <TaskList tasksData={tasksData} />
      </Container>
    </>
  );
};

export default TaskPage;
