import React from "react";
import Employee from "../Contracts/Employee";
import { Card, Container, Grid } from "@material-ui/core";

const EmployeesList: React.FC<{ employees: Employee[] }> = ({ employees }) => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {employees.map((employee: Employee) => {
            return (
              <Card variant="elevation">
                <p>{employee.name}</p>
                <p>{employee.surname}</p>
                <p>{employee.age}</p>
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployeesList;
