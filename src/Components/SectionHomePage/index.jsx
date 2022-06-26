import { useContext, useEffect, useState } from "react";

import { CharactersContext } from "../../Providers/Characters";
import * as Styles from "./styles";
import CardCharacters from "../CardCharacters";

import Paginate from "../Paginate";
import Navbar from "../Navbar";
import LoadingResponseApi from "../LoadingResposeApi";
import { useHistory } from "react-router-dom";

const SectionHomePage = () => {
  const useContextCharacters = useContext(CharactersContext);
  const history = useHistory();

  const currentPagination = JSON.parse(
    sessionStorage.getItem("@RickAndMorty:currentPagination")
  );

  const [changeInputName, setChangeInputName] = useState("");
  const [selectCurrentSpecie, setSelectCurrentSpecie] = useState("");

  const [pageOffset, setPageOffset] = useState(
    currentPagination ? currentPagination : 1
  );
  const [pageCount, setPageCount] = useState();

  useEffect(() => {
    useContextCharacters.newFiltered({
      variables: {
        page: pageOffset,
        species: selectCurrentSpecie,
        name: changeInputName,
      },
    });
    sessionStorage.setItem(
      "@RickAndMorty:currentPagination",
      JSON.stringify(pageOffset)
    );
  }, [, pageOffset, selectCurrentSpecie]);

  useEffect(() => {
    setPageCount(useContextCharacters.data?.characters.info.pages);
  }, [useContextCharacters.data?.characters.info.pages]);

  return (
    <Styles.WrapperContent>
      <Navbar
        changeInputName={changeInputName}
        setChangeInputName={setChangeInputName}
        selectCurrentSpecie={selectCurrentSpecie}
        setSelectCurrentSpecie={setSelectCurrentSpecie}
        newFiltered={useContextCharacters.newFiltered}
      />
      <Styles.ContainerPaginate style={{ padding: "20px 0", display: "flex" }}>
        <Paginate
          pageCount={pageCount}
          setPageOffset={setPageOffset}
          pageOffset={pageOffset}
        />
      </Styles.ContainerPaginate>
      <Styles.ContainerCardsCharacters>
        {useContextCharacters.loading ? (
          <LoadingResponseApi />
        ) : (
          useContextCharacters.data?.characters?.results?.map((character) => (
            // <Styles.LinkCardCharacter
            //   key={character.id}
            //   onClick={() => {
            //     history.push(`/character/${character.id}`);
            //   }}
            // >
            <CardCharacters key={character.id} character={character} />
            // </Styles.LinkCardCharacter>
          ))
        )}
      </Styles.ContainerCardsCharacters>
      <Styles.ContainerPaginate>
        <Paginate
          pageCount={pageCount}
          setPageOffset={setPageOffset}
          pageOffset={pageOffset}
        />
      </Styles.ContainerPaginate>
    </Styles.WrapperContent>
  );
};

export default SectionHomePage;
