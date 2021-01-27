import {
	AppBar,
	Button,
	Container,
	makeStyles,
	Tooltip,
	Typography,
} from "@material-ui/core";
import { Add as AddIcon, Clear as ClearIcon } from "@material-ui/icons";
import React, { useState } from "react";
import AddScreen from "./Components/AddScreen";
import EmployeesList from "./Components/EmployeesList";
import EmployeeType from "./Contracts/Employee";
import { EmployeeContext } from "./EmployeeContext";

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
});

function App() {
	const [employeeAddMode, setEmployeeAddMode] = useState(false);
	const [employeeEditMode, setEmployeeEditMode] = useState<
		React.SetStateAction<boolean>
	>(false);

	const [addingNewEmployee, setAddingNewEmployee] = useState<EmployeeType>({
		id: 0,
		name: "",
		surname: "",
		age: 0,
		role: "",
		imgUrl: "",
	});

	const [currentEmployee, setCurrentEmployee] = useState(addingNewEmployee);

	const [employees, setEmployees] = useState<EmployeeType[]>([
		{
			id: 1,
			name: "Erick",
			surname: "Cesar",
			age: 20,
			role: "Desenvolvedor React",
		},
		{
			id: 2,
			name: "Geralt",
			surname: "de Rivia",
			age: 38,
			role: "Desenvolvedor Angular",
			imgUrl:
				"https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-03.jpg",
		},
		{
			id: 3,
			name: "Geraldo",
			surname: "Rivera",
			age: 42,
			role: "Desenvolvedor Rust",
			imgUrl:
				"https://ds393qgzrxwzn.cloudfront.net/resize/m500x500/cat1/img/images/0/LvpVeaBij9.jpg",
		},
		{
			id: 4,
			name: "Linus",
			surname: "Torvalds",
			age: 46,
			role: "Desenvolvedor C/C++",
			imgUrl: "https://avatars.githubusercontent.com/u/1024025?s=460&v=4",
		},
		{
			id: 5,
			name: "Kevin",
			surname: "Mitnick",
			age: 48,
			role: "Analista de Segurança",
			imgUrl:
				"https://conference.pecb.com/wp-content/uploads/2017/03/kevin-mitnick.png",
		},
		{
			id: 6,
			name: "Alice",
			surname: "Gonçalves",
			age: 31,
			role: "Testes e QA",
			imgUrl:
				"https://qodebrisbane.com/wp-content/uploads/2019/07/This-is-not-a-person-2-1.jpeg",
		},
		{
			id: 7,
			name: "Isaac",
			surname: "Clarke",
			age: 28,
			role: "Engenheiro de Software",
		},
	]);

	const classes = useStyles();

	return (
		<EmployeeContext.Provider value={{ currentEmployee, setCurrentEmployee }}>
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

						{employeeAddMode || employeeEditMode ? (
							<Tooltip title="Sair do modo de edição">
								<Button
									size="small"
									variant="contained"
									color="secondary"
									style={{ height: "41px" }}
									onClick={() => {
										setEmployeeAddMode(false);
										setEmployeeEditMode(false);
									}}
								>
									<ClearIcon />
								</Button>
							</Tooltip>
						) : (
							<>
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
						<AddScreen
							addingNewEmployee={addingNewEmployee}
							setAddingNewEmployee={setAddingNewEmployee}
							setEmployees={setEmployees}
							setEmployeeAddMode={setEmployeeAddMode}
						/>
					) : (
						<EmployeesList
							key={Math.random() * 1000}
							employees={employees}
							setEmployees={setEmployees}
							employeeEditMode={employeeEditMode}
							setEmployeeEditMode={setEmployeeEditMode}
						/>
					)}
				</Container>
			</div>
		</EmployeeContext.Provider>
	);
}

export default App;
