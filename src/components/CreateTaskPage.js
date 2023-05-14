import { Button, Form, Container } from "react-bootstrap/";
import { useState } from "react";
import { createNewTask } from "../API/todoApi";
import { useNavigate } from "react-router-dom";

const CreateTaskPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    category: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewTask(formData).then((res) => {
      navigate(-1);
    });

    setFormData({
      title: "",
      desdline: "",
      category: "",
    });
  };

  return (
    <>
      <Container style={{ marginTop: 50, fontSize: "20px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Task</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDeadline">
            <Form.Label>Deadline</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter deadline of your task"
              value={formData.deadline}
              onChange={(e) =>
                setFormData({ ...formData, deadline: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter  Category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
          </Form.Group>

          <Button
            variant="outline-secondary"
            type="submit"
            style={{ position: "center" }}
          >
            ADD
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default CreateTaskPage;
