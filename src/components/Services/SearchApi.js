const SearchApi = (search, page) => {
    const API_KEY = "21847768-5e5b2f7eaa86d5895d80eb462";
    const URL = "https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=";

    return (
        fetch(`${URL}${API_KEY}&q=${search}&page=${page}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`Search request ${search} not found`),
          );
        }));
}

export default SearchApi;