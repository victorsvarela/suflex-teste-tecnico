import { CharacterProvider } from "./Character";
import { CharactersProvider } from "./Characters";

const Providers = ({ children }) => {
  return (
    <>
      <CharactersProvider>
        <CharacterProvider>{children}</CharacterProvider>
      </CharactersProvider>
    </>
  );
};

export default Providers;
