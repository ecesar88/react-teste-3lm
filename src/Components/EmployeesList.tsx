import React, { SetStateAction } from "react";
import Employee from "../Contracts/Employee";
import {
	Avatar,
	Button,
	ButtonGroup,
	Card,
	Container,
	Grid,
	ListItemAvatar,
	makeStyles,
	Typography,
} from "@material-ui/core";
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
	undefinedText: {
		display: "flex",
		justifyContent: "center",
		marginTop: "50px",
	},
});

const EmployeesList: React.FC<{
	employees: Employee[];
  setEmployees: React.Dispatch<SetStateAction<Employee[]>>;
  employeeEditMode: React.ComponentState,
  setEmployeeEditMode: React.Dispatch<SetStateAction<Boolean>>;
}> = ({ employees, setEmployees, employeeEditMode, setEmployeeEditMode }) => {

	const deleteEmployee = (evt: any) => {
    console.log(evt)
		//setEmployees(employees.filter((el: Employee) => el.id !== employee.id));
	};

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
						employees.map((employee: Employee) => {
							return (
								<Card
									variant="elevation"
									className={classes.employeeCard}
									key={employee.id}
								>
									<div className={classes.employeeFlexContainer}>
										<div style={{ display: "flex", alignItems: "center" }}>
											<ListItemAvatar>
												<Avatar alt="" src="" />
											</ListItemAvatar>

											<p style={{ marginRight: "5px", fontWeight: "bold" }}>
												Nome:
											</p>
											<p
												style={{ marginRight: "15px" }}
											>{`${employee.name} ${employee.surname}`}</p>

											<p style={{ marginRight: "5px", fontWeight: "bold" }}>
												Idade:
											</p>
											<p style={{ marginRight: "15px" }}>{employee.age}</p>

											<p style={{ marginRight: "5px", fontWeight: "bold" }}>
												Cargo:
											</p>
											<p style={{ marginRight: "15px" }}>{employee.role}</p>
										</div>

										<div>
											<ButtonGroup
												aria-label="outlined primary button group"
												size="small"
											>
												<Button
													color="secondary"
													variant="contained"
													onClick={() => {}}
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
						})
					)}
				</Grid>
			</Grid>
		</Container>
	);
};

export default EmployeesList;
