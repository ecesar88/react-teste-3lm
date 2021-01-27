import React, { SetStateAction } from "react";
import EmployeeType from "../Contracts/Employee";
import {
	Grid,
	Card,
	Typography,
	TextField,
	Button,
	makeStyles,
} from "@material-ui/core";
import { Person as PersonIcon, Add as AddIcon } from "@material-ui/icons";

const useStyles = makeStyles({
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

const AddScreen: React.FC<{
	addingNewEmployee: EmployeeType;
	setAddingNewEmployee: React.Dispatch<SetStateAction<EmployeeType>>;
	setEmployees: React.Dispatch<SetStateAction<EmployeeType[]>>;
	setEmployeeAddMode: React.Dispatch<SetStateAction<boolean>>;
}> = ({
	addingNewEmployee,
	setAddingNewEmployee,
	setEmployees,
	setEmployeeAddMode,
}) => {
	const classes = useStyles();

	const addNewEmployee = (evt: React.MouseEvent<HTMLButtonElement>) => {
		evt.preventDefault();

		if (addingNewEmployee.age === 0 && addingNewEmployee.name.length === 0) {
			window.alert("por favor preencha todos os campos");
			return;
		} else {
			setEmployees((prev: EmployeeType[]) => [...prev, addingNewEmployee]);

			setAddingNewEmployee({ id: 0, name: "", surname: "", age: 0, role: "" });
			setEmployeeAddMode(false);
		}
	};

	return (
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
									onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
										setAddingNewEmployee((prev: any) => ({
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
									onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
										setAddingNewEmployee((prev: any) => ({
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
									onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
										setAddingNewEmployee((prev: any) => ({
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
									onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
										setAddingNewEmployee((prev: any) => ({
											...prev,
											role: evt.target.value,
										}));
									}}
									fullWidth
								/>
							</Grid>
						</Grid>
					</form>
					<Grid container spacing={3}>
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
	);
};

export default AddScreen;
