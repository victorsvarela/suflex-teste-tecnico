import { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../Providers/Characters";

import * as Styles from "./styles";
import CardCharacters from "../CardCharacters";

import RickAndMortyLogo from "./../../assets/images/Rick-And-Morty-Logo.png";

const SectionHomePage = () => {
  const [changeInputName, setChangeInputName] = useState("");
  const [selectCurrentSpecie, setSelectCurrentSpecie] = useState("");

  const {
    loading,
    error,
    data,
    getCharacterInfo,
    newFiltered,
    dataF,
    loading1,
    error1,
  } = useContext(CharactersContext);

  useEffect(() => {
    newFiltered({
      variables: {
        species: selectCurrentSpecie,
        name: changeInputName,
      },
    });
  }, []);

  return (
    <Styles.WrapperContent>
      <Styles.ContainerNavigation>
        <div>
          <img src={RickAndMortyLogo} alt="vsf" />
        </div>
        <div>
          <input
            value={changeInputName}
            onChange={(value) => setChangeInputName(value.target.value)}
          />
        </div>
        <div>
          <select
            name="select_specie"
            onChange={(event) => {
              setSelectCurrentSpecie(event.target.value);
            }}
          >
            <option value="">Todos</option>
            <option value="human">Humano</option>
            <option value="alien">Alien</option>
          </select>
        </div>
        <div>
          <button
            onClick={() => {
              newFiltered({
                variables: {
                  species: selectCurrentSpecie,
                  name: changeInputName,
                },
              });
            }}
          >
            Consultar
          </button>
        </div>
      </Styles.ContainerNavigation>
      <Styles.ContainerCardsCharacters>
        {loading
          ? "loading..."
          : data?.characters?.results?.map((character) => (
              <Styles.LinkCardCharacter
                key={character.id}
                onClick={() => {
                  getCharacterInfo({
                    variables: {
                      identifier: character.id,
                    },
                  });
                }}
              >
                <CardCharacters character={character} />
              </Styles.LinkCardCharacter>
            ))}
      </Styles.ContainerCardsCharacters>
    </Styles.WrapperContent>
  );
};

export default SectionHomePage;
