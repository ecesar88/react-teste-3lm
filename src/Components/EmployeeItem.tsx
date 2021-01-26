import React, { SetStateAction } from "react";
import {
  Avatar,
  ListItemAvatar,
  Card,
  Button,
  ButtonGroup,
  makeStyles,
} from "@material-ui/core";
import EmployeeType from "../Contracts/Employee";
import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  employeeCard: {
    backgroundColor: "#e6e6e6",
    margin: "15px 0px",
    verticalAlign: "center",
    boxShadow: "3px 3px 10px 1px #00000050",
  },
  employeeFlexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 15px",
    flexGrow: 1,
  },
});

const EmployeeItem: React.FC<{
  employee: EmployeeType;
  setEmployees: React.Dispatch<SetStateAction<EmployeeType[]>>;
  employeeEditMode: React.ComponentState;
  setEmployeeEditMode: React.Dispatch<SetStateAction<Boolean>>;
}> = ({ employee, setEmployees, employeeEditMode, setEmployeeEditMode }) => {
  const deleteEmployee = () => {
    setEmployees((prev: EmployeeType[]) =>
      prev.filter((el) => el.id !== employee.id)
    );
  };

  const classes = useStyles();

  return (
    <Card
      variant="elevation"
      className={classes.employeeCard}
      key={employee.id}
    >
      <div className={classes.employeeFlexContainer}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ListItemAvatar>
            <Avatar alt="profile-picture" src={employee.imgUrl} />
          </ListItemAvatar>

          <p style={{ marginRight: "5px", fontWeight: "bold" }}>Nome:</p>
          <p
            style={{ marginRight: "15px" }}
          >{`${employee.name} ${employee.surname}`}</p>

          <p style={{ marginRight: "5px", fontWeight: "bold" }}>Idade:</p>
          <p style={{ marginRight: "15px" }}>{employee.age}</p>

          <p style={{ marginRight: "5px", fontWeight: "bold" }}>Cargo:</p>
          <p style={{ marginRight: "15px" }}>{employee.role}</p>
        </div>

        <div>
          <ButtonGroup aria-label="outlined primary button group" size="small">
            <Button
              color="secondary"
              variant="contained"
              onClick={() => setEmployeeEditMode(true)}
            >
              <EditIcon />
            </Button>

            <Button
              color="secondary"
              variant="contained"
              onClick={deleteEmployee}
            >
              <DeleteIcon />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </Card>
  );
};

export default EmployeeItem;
