import React, { SetStateAction, useContext } from "react";
import EmployeeType from "../Contracts/Employee";
import {
	Grid,
	Card,
	Typography,
	TextField,
	Button,
	makeStyles,
} from "@material-ui/core";
import { Person as PersonIcon, Save as SaveIcon } from "@material-ui/icons";
import { EmployeeContext } from "../EmployeeContext";

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

const EditScreen: React.FC<{
	employees: EmployeeType[];
	employeeEditMode: React.ComponentState;
	setEmployeeEditMode: React.Dispatch<SetStateAction<boolean>>;
	setEmployees: React.Dispatch<SetStateAction<EmployeeType[]>>;
}> = ({ employees, employeeEditMode, setEmployeeEditMode, setEmployees }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { currentEmployee, setCurrentEmployee } = useContext(EmployeeContext);

	const classes = useStyles();

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
										setCurrentEmployee((prev: any) => ({
											...prev,
											name: evt.target.value,
										}));
									}}
									fullWidth
									defaultValue={currentEmployee.name}
								/>
							</Grid>

							<Grid item xs={6}>
								<TextField
									id="surnameInput"
									label="Sobrenome"
									onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
										setCurrentEmployee((prev: any) => ({
											...prev,
											surname: evt.target.value,
										}));
									}}
									fullWidth
									defaultValue={currentEmployee.surname}
								/>
							</Grid>

							<Grid item xs={6}>
								<TextField
									id="ageInput"
									label="Idade"
									onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
										setCurrentEmployee((prev: any) => ({
											...prev,
											age: Number(evt.target.value),
										}));
									}}
									fullWidth
									defaultValue={currentEmployee.age}
								/>
							</Grid>

							<Grid item xs={6}>
								<TextField
									id="roleInput"
									label="Cargo"
									onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
										setCurrentEmployee((prev: any) => ({
											...prev,
											role: evt.target.value,
										}));
									}}
									fullWidth
									defaultValue={currentEmployee.role}
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
									onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
										evt.preventDefault();
										setEmployees((prev: any) =>
											prev.map((item: any) => {
												return item.id === currentEmployee.id
													? currentEmployee
													: item;
											})
										);

										setEmployeeEditMode(false);
									}}
									type="submit"
								>
									<SaveIcon />
									Salvar
								</Button>
							</div>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
};

export default EditScreen;
