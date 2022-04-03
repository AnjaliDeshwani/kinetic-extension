export const GoogleSearch = () => {
  return (
    <div className="search-section">
      <form
        method="get"
        action="https://www.google.com/search"
        className="search-form"
      >
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          name="q"
          size="31"
          placeholder="Google Search"
          className="search-text"
        />
      </form>
    </div>
  );
};
