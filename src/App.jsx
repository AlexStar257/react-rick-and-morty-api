import { CharacterList } from "./components/CharacterList";
import 'bootstrap/dist/css/bootstrap.min.css'

export const App = () => {
  return(
  <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty API</h1>
    <CharacterList/>
  </div>
  );
};
