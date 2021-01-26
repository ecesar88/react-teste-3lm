import {
	AppBar,
	Button,
	Card,
	Container,
	Grid,
	InputBase,
	makeStyles,
	TextField,
	Tooltip,
	Typography,
} from "@material-ui/core";
import {
	Add as AddIcon,
	Search as SearchIcon,
	Clear as ClearIcon,
	Person as PersonIcon,
} from "@material-ui/icons";
import React, { useState } from "react";
import EmployeesList from "./Components/EmployeesList";
import Employee from "./Contracts/Employee";

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	flexContainer: {
		display: "flex",
		justifyContent: "space-between",
	},
	flexContainerEmployeeAddMode: {
		display: "flex",
		justifyContent: "flex-end",
	},
	search: {
		position: "relative",
		backgroundColor: "#003399",
		marginLeft: "0",
	},
	searchIcon: {
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: "0px 10px",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: "0px 0px 0px 35px",
		width: "100%",
		marginTop: "10px",
	},
	gridEmployeeRegistration: {
		marginTop: "81px",
	},
	cardRegisterEmployee: {
		height: "250px",
		padding: "15px",
		boxShadow: "3px 3px 10px 1px #00000050",
	},
	cardRegisterEmployeePhoto: {
		height: "250px",
		padding: "15px",
		boxShadow: "3px 3px 10px 1px #00000050",
		textAlign: "center",
	},
});

function App() {
	const [employeeAddMode, setEmployeeAddMode] = useState(false);
	const [employeeEditMode, setEmployeeEditMode] = useState<React.SetStateAction<Boolean>>(false);

	const [addingNewEmployee, setAddingNewEmployee] = useState<Employee>({
		id: 0,
		name: "",
		surname: "",
		age: 0,
		role: "",
	});

	const [employees, setEmployees] = useState<Employee[]>([
		{ id: 6, name: "jjk", surname: "ad", age: 20, role: "Java Dev" },
		{ id: 1, name: "Erick", surname: "rr", age: 20, role: "React QA" },
		{ id: 75, name: "bna", surname: "hh", age: 20, role: "React QA" },
		{ id: 1, name: "ffh", surname: "ee", age: 20, role: "React QA" },
		{ id: 7312, name: "dds", surname: "aa", age: 20, role: "java QA" },
		{ id: 735, name: "Erick", surname: "xx", age: 20, role: "delphi QA" },
		{ id: 127, name: "Erick", surname: "jgf", age: 20, role: "graphql QA" },
		{ id: 667, name: "fdd", surname: "Cesar", age: 20, role: "React QA" },
	]);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [employeesSearchBackup, setEmployeesSearchBackup] = useState<
		Employee[]
	>([...employees]);

	const searchEmployees = (what: string) => {
		setEmployees((prev) => {
			let searchResult: Employee[] | Employee = prev.filter((item) =>
				item.name.includes(what)
			);
			return searchResult;
		});

		if (!what.length) {
			setEmployees(employeesSearchBackup);
		}
	};

	const addNewEmployee = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    
    if (addingNewEmployee.age === 0 && addingNewEmployee.name.length === 0) {
      window.alert("por favor preencha todos os campos")
      return
    } else {
      setEmployees((prev) => [...prev, addingNewEmployee]);
  
      setAddingNewEmployee({ id: 0, name: "", surname: "", age: 0, role: "" });
      setEmployeeAddMode(false);
    }

	};

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" style={{ padding: "15px" }}>
				<div className={classes.flexContainer}>
					<Typography
						variant="h4"
						component="h4"
						align="center"
						gutterBottom={false}
					>
						Gerenciador de Funcionários
					</Typography>
					{employeeAddMode ? (
						<Tooltip title="Sair do modo de edição">
							<Button
								size="small"
								variant="contained"
								color="secondary"
								style={{ height: "41px" }}
								onClick={() => setEmployeeAddMode(false)}
							>
								<ClearIcon />
							</Button>
						</Tooltip>
					) : (
						<>
							<div className={classes.search}>
								<div className={classes.searchIcon}>
									<SearchIcon />
								</div>
								<InputBase
									placeholder="Buscar..."
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
									inputProps={{ "aria-label": "search" }}
									onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
										searchEmployees(evt.target.value)
									}
								/>
							</div>

							<Tooltip title="Adicionar Funcionários">
								<Button
									size="small"
									variant="contained"
									color="secondary"
									onClick={() => setEmployeeAddMode(true)}
								>
									<AddIcon />
								</Button>
							</Tooltip>
						</>
					)}
				</div>
			</AppBar>

			<Container>
				{employeeAddMode ? (
					<Grid
						container
						xs={12}
						spacing={3}
						className={classes.gridEmployeeRegistration}
					>
						<Grid item xs={4}>
							<Card className={classes.cardRegisterEmployeePhoto}>
								<PersonIcon style={{ fontSize: "225px" }} />
							</Card>
						</Grid>

						<Grid item xs={8}>
							<Card className={classes.cardRegisterEmployee}>
								<Typography variant="h4" component="h4" gutterBottom={true}>
									Cadastrar novo funcionário
								</Typography>
								<form>
									<Grid container spacing={3}>
										<Grid item xs={6}>
											<TextField
												id="nameInput"
												label="Nome"
												onChange={(
													evt: React.ChangeEvent<HTMLInputElement>
												) => {
													setAddingNewEmployee((prev) => ({
														...prev,
														name: evt.target.value,
														id: Math.random() * 100,
													}));
												}}
												fullWidth
											/>
										</Grid>

										<Grid item xs={6}>
											<TextField
												id="surnameInput"
												label="Sobrenome"
												onChange={(
													evt: React.ChangeEvent<HTMLInputElement>
												) => {
													setAddingNewEmployee((prev) => ({
														...prev,
														surname: evt.target.value,
													}));
												}}
												fullWidth
											/>
										</Grid>

										<Grid item xs={6}>
											<TextField
												id="ageInput"
												label="Idade"
												onChange={(
													evt: React.ChangeEvent<HTMLInputElement>
												) => {
													setAddingNewEmployee((prev) => ({
														...prev,
														age: Number(evt.target.value),
													}));
												}}
												fullWidth
											/>
										</Grid>

										<Grid item xs={6}>
											<TextField
												id="roleInput"
												label="Cargo"
												onChange={(
													evt: React.ChangeEvent<HTMLInputElement>
												) => {
													setAddingNewEmployee((prev) => ({
														...prev,
														role: evt.target.value,
													}));
												}}
												fullWidth
											/>
										</Grid>
									</Grid>
								</form>
								<Grid container xs={12} spacing={3}>
									<Grid item xs={6}></Grid>
									<Grid item xs={6}>
										<div
											style={{
												display: "flex",
												justifyContent: "flex-end",
												marginTop: "20px",
											}}
										>
											<Button
												variant="contained"
												color="secondary"
												onClick={addNewEmployee}
												type="submit"
											>
												<AddIcon />
												Adicionar
											</Button>
										</div>
									</Grid>
								</Grid>
							</Card>
						</Grid>
					</Grid>
				) : (
					<EmployeesList
						employees={employees}
						setEmployees={setEmployees}
						employeeEditMode={employeeEditMode}
						setEmployeeEditMode={setEmployeeEditMode}
					/>
				)}
			</Container>
		</div>
	);
}

export default App;
