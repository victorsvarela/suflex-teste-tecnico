import { createContext, useState, useEffect } from "react";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";

import { CharacterInfo, FilteredC } from "../../Services/queries/queries";

export const CharacterContext = createContext([]);

export const CharacterProvider = ({ children }) => {
  const [getCharacterInfo, { loading, error, data }] =
    useLazyQuery(CharacterInfo);

  return (
    <CharacterContext.Provider
      value={{
        getCharacterInfo,
        data,
        loading,
        error,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
