import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id: "e0",
      title: " TOILET PAPER",
      amount: 94.13,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e1",
      title: "NEW TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e2",
      title: "CAR INSURANCE",
      amount: 394.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "NEW DESK",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>EXPENSE APP</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
