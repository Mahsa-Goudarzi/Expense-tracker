import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "title 1", amount: 12.31, date: new Date(2020, 7, 14) },
    { id: "e2", title: "title 2", amount: 125.2, date: new Date(2021, 7, 14) },
    { id: "e3", title: "title 3", amount: 1.35, date: new Date(2020, 8, 5) },
    { id: "e4", title: "title 4", amount: 300.56, date: new Date(2019, 1, 29) },
  ];

  return (
    <div className="App">
      <h1>Let's get started!</h1>
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <ExpenseItem expense={expenses[3]} />
    </div>
  );
}

export default App;
