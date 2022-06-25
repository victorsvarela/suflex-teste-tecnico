import { createContext, useState, useEffect } from "react";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";

import {
  CharacterInfo,
  Filtered,
  FilteredC,
} from "../../Services/queries/queries";

export const CharactersContext = createContext([]);

export const CharactersProvider = ({ children }) => {
  const [dataCharacters, setDataCharacters] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState("");
  const [errorCharacters, setErrorCharacters] = useState("");

  const [idCharacter, setIdCharacter] = useState(1);

  const { loadingF, errorF, dataF } = useQuery(Filtered());

  const [newFiltered, { loading, error, data }] = useLazyQuery(FilteredC);

  const [getCharacterInfo, { loading1, error1, data1 }] =
    useLazyQuery(CharacterInfo);

  return (
    <CharactersContext.Provider
      value={{
        loading,
        error,
        data,
        idCharacter,
        setErrorCharacters,
        getCharacterInfo,
        newFiltered,
        dataF,
        loading1,
        error1,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
