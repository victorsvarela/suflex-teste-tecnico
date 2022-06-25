import { CharactersProvider } from "./Characters";

const Providers = ({ children }) => {
  return (
    <>
      <CharactersProvider>{children}</CharactersProvider>
    </>
  );
};

export default Providers;
