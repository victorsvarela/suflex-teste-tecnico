import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Styles from "./styles";

const CardCharacters = ({ character }) => {
  const history = useHistory();

  const [favoritedCharacter, setFavoritedCharacter] = useState(false);

  const [favoriteCharactersList, setFavoriteCharactersList] = useState();

  const handleClickFavoritedCharacter = (characterId, character) => {
    const favorite = JSON.parse(
      localStorage.getItem("@RickAndMorty:favoriteCharactersList")
    );

    setFavoritedCharacter(!favoritedCharacter);

    if (favorite) {
      return setFavoriteCharactersList([...favorite, character]);
    }

    return setFavoriteCharactersList([character]);
  };

  useEffect(() => {
    setFavoriteCharactersList(
      JSON.parse(localStorage.getItem("@RickAndMorty:favoriteCharactersList"))
    );
  }, []);

  useEffect(() => {
    favoriteCharactersList &&
      localStorage.setItem(
        "@RickAndMorty:favoriteCharactersList",
        JSON.stringify(favoriteCharactersList)
      );
    favoriteCharactersList?.map(
      (item) => item.id === character.id && setFavoritedCharacter(true)
    );
  }, [favoriteCharactersList]);

  return (
    <Styles.WrapperCard>
      <Styles.FavoritedCharacterSvg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-blue-500"
        viewBox="0 0 20 20"
        favoritedCharacter={favoritedCharacter}
        onClick={() => handleClickFavoritedCharacter(character.id, character)}
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </Styles.FavoritedCharacterSvg>

      <Styles.LinkCardCharacter
        onClick={() => {
          history.push(`/character/${character.id}`);
        }}
      >
        <Styles.ContainerCard>
          <Styles.IconAlive status={character?.status}>
            <p>{character?.status}</p>
          </Styles.IconAlive>
          <img src={character?.image} alt={`${character?.name} person`} />

          {/* <Styles.FavoriteIcon onClick={() => handleClickFavoritedCharacter(character.id)} /> */}

          <p>{character?.name}</p>
        </Styles.ContainerCard>
      </Styles.LinkCardCharacter>
    </Styles.WrapperCard>
  );
};

export default CardCharacters;
