import { useLinks } from "./hooks/useLinks";
function Links() {
  const { data, loading, error } = useLinks();

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
