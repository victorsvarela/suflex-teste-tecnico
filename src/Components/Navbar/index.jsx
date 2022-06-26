import { useContext } from "react";

import * as Styles from "./styles";
import { CharactersContext } from "../../Providers/Characters";

import RickAndMortyLogo from "./../../assets/images/Rick-And-Morty-Logo.png";
import SearchIcon from "./../../assets/images/search-icon.png";
import { useHistory } from "react-router-dom";

const Navbar = ({
  changeInputName,
  setChangeInputName,
  selectCurrentSpecie,
  setSelectCurrentSpecie,
  getCharacterInfo,
  dataCharacterInfo,
}) => {
  const { newFiltered } = useContext(CharactersContext);
  const history = useHistory();

  const handleClickSearch = (keyClicked) => {
    keyClicked.toLowerCase().includes("enter") &&
      newFiltered({
        variables: {
          species: selectCurrentSpecie,
          name: changeInputName,
        },
      });
  };
  return (
    <Styles.WrapperNavigation>
      <Styles.ContainerLogo>
        <div></div>
        <Styles.Logo
          src={RickAndMortyLogo}
          alt="icon rick and morty"
          onClick={() => history.push("/")}
        />
        <div onClick={() => history.push("/my-favorites")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <p>meus favoritos</p>
        </div>
      </Styles.ContainerLogo>
      <Styles.ContainerFilters>
        <Styles.ContainerFilterInput>
          <Styles.FilterInput
            placeholder="Por qual personagem está procurando?"
            value={changeInputName}
            onChange={(value) => setChangeInputName(value.target.value)}
            onKeyDown={(event) => handleClickSearch(event.code)}
          />
          <Styles.FilterInputIcon
            src={SearchIcon}
            alt="search icon"
            onClick={() => {
              newFiltered({
                variables: {
                  species: selectCurrentSpecie,
                  name: changeInputName,
                },
              });
            }}
          />
        </Styles.ContainerFilterInput>

        <Styles.ContainerSelectSpecie>
          <Styles.LabelSelectSpecie>
            Selecionar espécie
          </Styles.LabelSelectSpecie>
          <Styles.FilterSelectSpecie
            name="select_specie"
            onChange={(event) => {
              setSelectCurrentSpecie(event.target.value);
            }}
          >
            <Styles.FilterOptionSpecie value="">
              Todos
            </Styles.FilterOptionSpecie>
            <Styles.FilterOptionSpecie value="human">
              Humano
            </Styles.FilterOptionSpecie>
            <Styles.FilterOptionSpecie value="alien">
              Alien
            </Styles.FilterOptionSpecie>
          </Styles.FilterSelectSpecie>
        </Styles.ContainerSelectSpecie>
      </Styles.ContainerFilters>
    </Styles.WrapperNavigation>
  );
};

export default Navbar;
