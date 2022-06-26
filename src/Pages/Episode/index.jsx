import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CharacterContext } from "../../Providers/Character";

const EpisodePage = () => {
  const { id } = useParams();
  const useContextCharacter = useContext(CharacterContext);

  useEffect(() => {
    useContextCharacter.getCharacterInfo({
      variables: {
        identifier: id,
      },
    });
  }, []);

  console.log(useContextCharacter);

  return <div>episode page {id}</div>;
};

export default EpisodePage;
