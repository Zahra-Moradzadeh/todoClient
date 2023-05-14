import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { updateTaskData, getOneTaskData } from "../API/todoApi";

const EditTaskPage = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { _id } = location.state;
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    category: "",
  });

  useEffect(() => {
    getOneTaskData(_id).then((res) => {
      setFormData(res);
    });
  }, [_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTaskData(_id, formData).then((res) => {
      navigate(-1);
    });
    setFormData({
      title: "",
      deadline: "",
      category: "",
    });
  };

  return (
    <>
      <Container>
        <h2 style={{ margin: 20, textAlign: "center" }}>
          Edit your task here :D{" "}
        </h2>
        <h4 style={{ marginBottom: 30 }}>
          details of your task with {params.title} slug
        </h4>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAuthorId">
            <Form.Label>DeadLine</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter deadline"
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
              placeholder="Enter Course Category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
          </Form.Group>

          <Button
            variant="dark"
            type="submit"
            style={{ textAlign: "center", width: 150 }}
          >
            Save
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EditTaskPage;
