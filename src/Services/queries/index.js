import { gql } from "@apollo/client";

export const Filtered = (name, species) => gql`
    query {
        characters(filter: { species: ${species}, name: ${name} }) {
            info {
                count
            }
            results {
                characters {
                    id
                    image
                    name
                    species
                    status
                }
            }
        }
    }
`;

export const CharacterInfo = (id) => gql`
    query {
        charactersByIds(ids: [${id}]) {
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
