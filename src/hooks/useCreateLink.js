import { gql, useMutation } from "@apollo/client";
import { GET_LINKS } from "./useLinks";

const ADD_LINK = gql`
  mutation createLink($url: String!, $slug: String) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

export const useCreateLink = () => {
  const [createLink, { data }] = useMutation(ADD_LINK, {
    refetchQueries: [GET_LINKS]
  });
  return {
    createLink,
    data
  };
};
