import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteTaskData } from "../API/todoApi";
import { Link } from "react-router-dom";

const TaskList = ({ tasksData }) => {
  const navigate = useNavigate();
  
  const handleDelete = (id) => {
    deleteTaskData(id);
    navigate(0);
  };


  return (
    <>
      <Table
        striped
        bordered
        hover
        variant="light"
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>Task</th>
            <th>Deadline</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasksData?.map((task) => {
            const { _id, title, deadline, category } = task;
            return (
              <tr key={_id}>
                <td>{title}</td>
                <td>{deadline}</td>
                <td>{category}</td>
                <td>
                  <Button variant="success" type="submit">
                  <Link to={`/edit/${title}`} state={task} style={{textDecorationLine:"none",color:"white"}}>
                    Edit
                  </Link>
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    type="submit"
                    onClick={() => handleDelete(_id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TaskList;
