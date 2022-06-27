import { CharacterProvider } from "./Character";
import { CharactersProvider } from "./Characters";
import { FavoritesListProvider } from "./FavoritesList";

const Providers = ({ children }) => {
  return (
    <>
      <CharactersProvider>
        <CharacterProvider>
          <FavoritesListProvider>{children}</FavoritesListProvider>
        </CharacterProvider>
      </CharactersProvider>
    </>
  );
};

export default Providers;
