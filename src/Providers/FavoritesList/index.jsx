import { createContext, useEffect, useState } from "react";

export const FavoritesListContext = createContext([]);

export const FavoritesListProvider = ({ children }) => {
  const [favoriteCharactersList, setFavoriteCharactersList] = useState(
    JSON.parse(localStorage.getItem("@RickAndMorty:favoriteCharactersList")) ||
      []
  );

  useEffect(() => {
    localStorage.setItem(
      "@RickAndMorty:favoriteCharactersList",
      JSON.stringify(favoriteCharactersList)
    );
  }, [favoriteCharactersList]);

  const attFavoriteListToStorage = ({ character, setFavoritedCharacter }) => {
    favoriteCharactersList &&
      localStorage.setItem(
        "@RickAndMorty:favoriteCharactersList",
        JSON.stringify(favoriteCharactersList)
      );
    // favoriteCharactersList?.map(
    //   (item) => item.id === character.id && setFavoritedCharacter(true)
    // );
  };

  const removeCharacterToFavoriteList = (favorite1, character) => {
    const index = favorite1?.findIndex((item) => item.id === character.id);

    const fav = favorite1?.filter((_, currIndex) => currIndex !== index);

    setFavoriteCharactersList(fav);
  };

  const addCharacterToFavoriteList = (character) => {
    if (favoriteCharactersList.length === 0) {
      return setFavoriteCharactersList([character]);
    }

    return setFavoriteCharactersList([...favoriteCharactersList, character]);
  };

  return (
    <FavoritesListContext.Provider
      value={{
        favoriteCharactersList,
        attFavoriteListToStorage,
        removeCharacterToFavoriteList,
        addCharacterToFavoriteList,
      }}
    >
      {children}
    </FavoritesListContext.Provider>
  );
};
