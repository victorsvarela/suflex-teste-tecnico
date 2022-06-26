import { createContext } from "react";
import { useLazyQuery } from "@apollo/client";

import { FilteredC } from "../../Services/queries/queries";

export const CharactersContext = createContext([]);

export const CharactersProvider = ({ children }) => {
  const [newFiltered, { loading, error, data }] = useLazyQuery(FilteredC);

  return (
    <CharactersContext.Provider
      value={{
        newFiltered,
        loading,
        error,
        data,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
