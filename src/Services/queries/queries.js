import { gql } from "@apollo/client";

export const Filtered = (species = "", name = "") => gql`
  query {
    characters(filter: { species: "${species}", name: "${name}" }) {
      info {
        count
      }
      results {
        id
        name
        status
        image
        species
      }
    }
  }
`;

export const FilteredC = gql`
  query Filter($page: Int, $species: String, $name: String) {
    characters(page: $page, filter: { species: $species, name: $name }) {
      info {
        count
        pages
      }
      results {
        id
        name
        status
        image
        species
      }
    }
  }
`;

export const CharacterInfo = gql`
  query Info($identifier: [ID!]!) {
    charactersByIds(ids: $identifier) {
      id
      name
      status
      species
      image
      episode {
        episode
      }
      created
    }
  }
`;
