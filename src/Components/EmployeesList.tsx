import React from "react";
import Employee from "../Contracts/Employee";
import {
  Button,
  ButtonGroup,
  Card,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Remove as RemoveIcon,
} from "@material-ui/icons";

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
  },
});

const EmployeesList: React.FC<{ employees: Employee[] }> = ({ employees }) => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {employees.map((employee: Employee) => {
            return (
              <Card variant="elevation" className={classes.employeeCard}>
                <div className={classes.employeeFlexContainer}>
                  <div style={{ display: "flex" }}>
                    <p>{employee.name} </p>
                    <p>{employee.age} </p>
                    <p>{employee.role}</p>
                  </div>

                  <div>
                    <ButtonGroup
                      aria-label="outlined primary button group"
                      size="small"
                    >
                      <Button color="secondary" variant="contained">
                        <RemoveIcon />
                      </Button>

                      <Button color="secondary" variant="contained">
                        <EditIcon />
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployeesList;
