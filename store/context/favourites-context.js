import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFav: (id) => {},
  removeFav: (id) => {},
});

export default function FavouritesContextProvider({ children }) {
  const [favMealIds, setFavMealIds] = useState([]);

  function addFav(id) {
    setFavMealIds((prevIds) => [...prevIds, id]);
  }

  function removeFav(id) {
    setFavMealIds((currentIds) =>
      currentIds.filter((filterId) => filterId !== id)
    );
  }

  const value = {
    ids: favMealIds,
    addFav,
    removeFav,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}
