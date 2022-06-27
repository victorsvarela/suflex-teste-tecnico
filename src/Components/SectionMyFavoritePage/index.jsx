import * as Styles from "./styles";

import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FavoritesListContext } from "../../Providers/FavoritesList";
import CardCharacters from "../CardCharacters";
import Navbar from "../Navbar";
import { ContainerLogo, Logo } from "../Navbar/styles";
import {
  WrapperContent,
  WrapperNavigation,
} from "../SectionCharacterPage/styles";

import RickAndMortyLogo from "./../../assets/images/Rick-And-Morty-Logo.png";

const SectionMyFavoritePage = () => {
  const history = useHistory();

  const useContextFavoritesList = useContext(FavoritesListContext);

  const favorite = useContextFavoritesList.favoriteCharactersList;

  return (
    <div>
      <WrapperContent>
        <WrapperNavigation>
          <ContainerLogo>
            <Logo
              src={RickAndMortyLogo}
              alt="icon rick and morty"
              onClick={() => history.push("/")}
            />
          </ContainerLogo>
        </WrapperNavigation>
        {favorite?.map((character, index) => (
          <Styles.ContainerCard key={index}>
            <CardCharacters character={character} />
          </Styles.ContainerCard>
        ))}
      </WrapperContent>
    </div>
  );
};

export default SectionMyFavoritePage;
