import MainNavigator from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store";
import { init } from "./src/data";

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Data base fail connect");
    console.log(err.message);
  });

export default function App() {

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
