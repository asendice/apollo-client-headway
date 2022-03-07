import { useLinks } from "./hooks/useLinks";
function Links() {
  const { data, loading, error } = useLinks();

  if (loading) return <p> loading... </p>;
  if (error) return <p> Erorr... </p>;
  const copyOfLinks = [...data.allLinks];
  const sortedLinks = copyOfLinks.sort((a, b) => b.id - a.id);
  return (
    <div>
      {sortedLinks.map(({ url, slug, id }) => {
        const shortURL = `https://hdwy.link/${slug}`;
        return (
          <div key={id}>
            <a href="#">{url} </a> ---&gt; <a href="#">{shortURL}</a>
          </div>
        );
      })}
    </div>
  );
}

export default Links;
