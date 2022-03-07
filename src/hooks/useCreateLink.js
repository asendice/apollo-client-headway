import { gql, useMutation } from "@apollo/client";

const ADD_LINK = gql`
  mutation createLink($url: String!, $slug: String) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

export const useCreateLink = () => {
  const [createLink, { data }] = useMutation(ADD_LINK);
  return {
    createLink,
    data
  };
};
