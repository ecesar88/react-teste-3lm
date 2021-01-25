import React from "react";
import EmployeesList from "./Components/EmployeesList";
import Employee from "./Contracts/Employee"

// Uma possível requisição ao servidor
let employees: Employee[] = [
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
  { name: "Erick", surname: "Cesar", age: 20, role: "Desenvolvedor React" },
];

function App() {
  return <EmployeesList employees={employees}/>;
}

export default App;

