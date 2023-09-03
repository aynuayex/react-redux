import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainerAsync";

import './App.css'

function App() {
  return (
    <div className="app">
      <UserContainer />
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
      <HooksIceCreamContainer />
      <ItemContainer cake/>
      <ItemContainer />
    </div>
  );
}

export default App;
