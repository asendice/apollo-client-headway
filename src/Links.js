import { useQuery, gql } from "@apollo/client";

const GET_LINKS = gql`
  query {
    allLinks {
      url
      slug
    }
  }
`;

function Links() {
  const { loading, error, data } = useQuery(GET_LINKS);

  if (loading) return <p> loading... </p>;
  if (error) return <p> Erorr... </p>;

  return (
    <div>
      {data.allLinks.map(({ url, slug }, index) => (
        <div key={index}>
          {url}
          {slug}
        </div>
      ))}
    </div>
  );
}

export default Links;
