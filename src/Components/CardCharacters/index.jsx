import * as Styles from "./styles";

const CardCharacters = ({ character }) => {
  return (
    <Styles.ContainerCard>
      <Styles.IconAlive status={character?.status}>
        <p>{character?.status}</p>
      </Styles.IconAlive>
      <img src={character?.image} alt={`${character?.name} person`} />

      <p>{character?.name}</p>
    </Styles.ContainerCard>
  );
};

export default CardCharacters;
