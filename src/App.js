import "./App.css";
import Expenses from "./components/ExpenseComponents/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: "e1", title: "title 1", amount: 12.31, date: new Date(2020, 7, 14) },
    { id: "e2", title: "title 2", amount: 125.2, date: new Date(2021, 7, 14) },
    { id: "e3", title: "title 3", amount: 1.35, date: new Date(2020, 8, 5) },
    { id: "e4", title: "title 4", amount: 300.56, date: new Date(2019, 1, 29) },
  ];

  function handleAddExpense(newExpense) {
    newExpense = { ...newExpense, id: `e${expenses.length + 1}` };
    expenses.push(newExpense);
    console.log(expenses);
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
