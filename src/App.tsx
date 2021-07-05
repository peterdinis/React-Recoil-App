import {Route, Switch} from "react-router-dom";
import NewNote from "./components/NewNote";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={NotesList} />
        <Route exact path="/add" component={NewNote} />
      </Switch>
    </div>
  );
}

export default App;
