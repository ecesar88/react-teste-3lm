import React, { SetStateAction } from "react";
import EmployeeType from "../Contracts/Employee";
import EmployeeItem from "./EmployeeItem";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  undefinedText: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },
});

const EmployeesList: React.FC<{
  employees: EmployeeType[];
  setEmployees: React.Dispatch<SetStateAction<EmployeeType[]>>;
  employeeEditMode: React.ComponentState;
  setEmployeeEditMode: React.Dispatch<SetStateAction<Boolean>>;
}> = ({ employees, setEmployees, employeeEditMode, setEmployeeEditMode }) => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ marginTop: "75px" }}>
          {!employees.length ? (
            <>
              <div className={classes.undefinedText}>
                <Typography variant="h5" component="h5">
                  Não há nenhum funcionário para gerenciar, por favor adicione
                  um
                </Typography>
              </div>
            </>
          ) : (
            employees.map((employee: EmployeeType) => {
              return (
                <EmployeeItem
                  employee={employee}
                  setEmployees={setEmployees}
                  employeeEditMode={employeeEditMode}
                  setEmployeeEditMode={setEmployeeEditMode}
                />
              );
            })
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployeesList;
