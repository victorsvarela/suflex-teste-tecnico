import { useContext } from "react";

import * as Styles from "./styles";
import { CharactersContext } from "../../Providers/Characters";

import RickAndMortyLogo from "./../../assets/images/Rick-And-Morty-Logo.png";
import SearchIcon from "./../../assets/images/search-icon.png";

const Navbar = ({
  changeInputName,
  setChangeInputName,
  selectCurrentSpecie,
  setSelectCurrentSpecie,
  getCharacterInfo,
  dataCharacterInfo,
}) => {
  const { newFiltered } = useContext(CharactersContext);

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
        <Styles.Logo src={RickAndMortyLogo} alt="icon rick and morty" />
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
