import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div>
        <h1>My Todos</h1>
        <Todo text="go there" />
        <Todo text="who dey?" />
        <Todo />
      </div>
    </>
  );
}

export default App;
