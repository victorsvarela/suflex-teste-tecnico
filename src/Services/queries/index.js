import { gql } from "@apollo/client";

export const Filtered = (name, species) => gql`
  query {
    characters(filter: { species: ${species}, name: ${name} }) {
      info {
        count
      }
      results {
        characters {
          image
          name
          species
          status
        }
      }
    }
  }
`;
