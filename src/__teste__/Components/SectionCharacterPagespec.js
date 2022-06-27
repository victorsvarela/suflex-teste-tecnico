import { fireEvent, render, screen } from "@testing-library/react";

import { MockedProvider } from "@apollo/client/testing";

import CardCharacters from "../../Components/CardCharacters";
import SectionCharacterPage from "../../Components/SectionCharacterPage";
import { CharacterInfo } from "../../Services/queries/queries";

function createRepo(
  id,
  name,
  status,
  species,
  image,
  episode,
  created,
  typename
) {
  return {
    id: id,
    name: name,
    status: status,
    species: species,
    image: image,
    episode: episode,
    created: created,
    __typename: typename,
  };
}

const mocks = [
  {
    request: {
      query: CharacterInfo,
      variables: {
        identifier: 4,
      },
    },
    result: {
      data: {
        charactersByIds: [
          {
            id: "4",
            name: "Beth Smith",
            status: "Alive",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            episode: [
              { episode: "S01E06", __typename: "Episode" },
              { episode: "S01E07", __typename: "Episode" },
              { episode: "S01E08", __typename: "Episode" },
              { episode: "S01E09", __typename: "Episode" },
              { episode: "S01E10", __typename: "Episode" },
              { episode: "S01E11", __typename: "Episode" },
              { episode: "S02E01", __typename: "Episode" },
              { episode: "S02E03", __typename: "Episode" },
              { episode: "S02E04", __typename: "Episode" },
              { episode: "S02E05", __typename: "Episode" },
              { episode: "S02E07", __typename: "Episode" },
              { episode: "S02E08", __typename: "Episode" },
              { episode: "S02E09", __typename: "Episode" },
              { episode: "S02E10", __typename: "Episode" },
              { episode: "S03E01", __typename: "Episode" },
              { episode: "S03E02", __typename: "Episode" },
              { episode: "S03E03", __typename: "Episode" },
              { episode: "S03E04", __typename: "Episode" },
              { episode: "S03E05", __typename: "Episode" },
              { episode: "S03E06", __typename: "Episode" },
              { episode: "S03E07", __typename: "Episode" },
              { episode: "S03E08", __typename: "Episode" },
              { episode: "S03E09", __typename: "Episode" },
              { episode: "S03E10", __typename: "Episode" },
              { episode: "S04E01", __typename: "Episode" },
              { episode: "S04E02", __typename: "Episode" },
              { episode: "S04E03", __typename: "Episode" },
              { episode: "S04E04", __typename: "Episode" },
              { episode: "S04E05", __typename: "Episode" },
              { episode: "S04E07", __typename: "Episode" },
              { episode: "S04E08", __typename: "Episode" },
              { episode: "S04E09", __typename: "Episode" },
              { episode: "S04E10", __typename: "Episode" },
              { episode: "S05E01", __typename: "Episode" },
              { episode: "S05E02", __typename: "Episode" },
              { episode: "S05E03", __typename: "Episode" },
              { episode: "S05E04", __typename: "Episode" },
              { episode: "S05E05", __typename: "Episode" },
              { episode: "S05E06", __typename: "Episode" },
              { episode: "S05E07", __typename: "Episode" },
              { episode: "S05E08", __typename: "Episode" },
              { episode: "S05E10", __typename: "Episode" },
            ],
            created: "2017-11-04T19:22:43.665Z",
            __typename: "Character",
          },
        ],
      },
    },
  },
];

test("quando renderiza o card character", () => {
  const { container } = render(
    <MockedProvider mocks={mocks}>
      <SectionCharacterPage />
    </MockedProvider>
  );

  expect(container).toMatchSnapshot();
});
