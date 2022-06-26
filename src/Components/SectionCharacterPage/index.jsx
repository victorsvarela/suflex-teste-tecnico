import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";

import * as Styles from "./styles";

import RickAndMortyLogo from "./../../assets/images/Rick-And-Morty-Logo.png";
import { ContainerLogo, Logo } from "../Navbar/styles";
import { useContext, useEffect, useState } from "react";
import { CharacterContext } from "../../Providers/Character";

const SectionCharacterPage = ({ id }) => {
  const history = useHistory();
  const useContextCharacter = useContext(CharacterContext);
  const [dataCharacter, setDataCharacter] = useState([]);

  //   console.log(useContextCharacter.data.charactersByIds[0]);
  //   console.log(dataCharacter);

  useEffect(() => {
    useContextCharacter.getCharacterInfo({
      variables: {
        identifier: id,
      },
    });
  }, [id]);

  useEffect(() => {
    setDataCharacter(useContextCharacter?.data?.charactersByIds[0]);
  }, [useContextCharacter?.data]);

  console.log(dataCharacter);

  return (
    <Styles.WrapperContent>
      <Styles.WrapperNavigation>
        <ContainerLogo>
          <Logo
            src={RickAndMortyLogo}
            alt="icon rick and morty"
            onClick={() => history.push("/")}
          />
        </ContainerLogo>
      </Styles.WrapperNavigation>

      <Styles.ContainerCardCharacter>
        <Styles.CardCharacter>
          <Styles.CardCharacterImage src={dataCharacter?.image} />
        </Styles.CardCharacter>
        <Styles.InfosCharacter>
          <p>Nome: {dataCharacter?.name}</p>
          <p>Status: {dataCharacter?.status}</p>
          <p>Espécie: {dataCharacter?.species}</p>
          <p>Qnt. Episódios: {dataCharacter?.episode?.length}</p>
          <p>Data de Criação: {dataCharacter?.created}</p>
        </Styles.InfosCharacter>
      </Styles.ContainerCardCharacter>
    </Styles.WrapperContent>
  );
};

export default SectionCharacterPage;
