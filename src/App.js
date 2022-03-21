import Counter from "./components/Counter";
import Projects from "./components/Projects";
import Users from "./components/Users";
import configureStore from "./store/store";
const App = () => {
  // const store = configureStore();
  // store.dispatch({
  //   type: "projectAdded",
  //   payload: {
  //     name: "project1",
  //   },
  // });

  return (
    <div>
      <Counter />
      <Projects />
      <Users />
    </div>
  );
};

export default App;
