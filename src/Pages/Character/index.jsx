import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionCharacterPage from "../../Components/SectionCharacterPage";
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

  return (
    <div>
      <SectionCharacterPage id={id} />
    </div>
  );
};

export default EpisodePage;
