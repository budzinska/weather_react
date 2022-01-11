export default function SearchBar(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="search"
        placeholder="Enter the city"
        onChange={props.onChange}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
