import { useQuery, gql } from "@apollo/client";

export const GET_LINKS = gql`
  query {
    allLinks {
      url
      slug
    }
  }
`;

export const useLinks = () => {
  const { loading, error, data } = useQuery(GET_LINKS);

  return {
    loading,
    error,
    data
  };
};
