import {
  AppBar,
  Button,
  Container,
  InputBase,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Search as SearchIcon,
  Clear as ClearIcon,
} from "@material-ui/icons";
import React, { useState } from "react";
import EmployeesList from "./Components/EmployeesList";
import AddScreen from "./Components/AddScreen";
import EmployeeType from "./Contracts/Employee";

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
  });

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [employeesSearchBackup, setEmployeesSearchBackup] = useState<
    EmployeeType[]
  >([...employees]);

  const searchEmployees = (what: string) => {
    setEmployees((prev) => {
      let searchResult: EmployeeType[] | EmployeeType = prev.filter((item) =>
        Object.values(item).includes(what)
      );

      return searchResult;
    });

    if (!what.length) {
      setEmployees(employeesSearchBackup);
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
          <AddScreen
            addingNewEmployee={addingNewEmployee}
            setAddingNewEmployee={setAddingNewEmployee}
            setEmployees={setEmployees}
            setEmployeeAddMode={setEmployeeAddMode}
          />
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
