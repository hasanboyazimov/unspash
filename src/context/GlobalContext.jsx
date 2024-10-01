import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_NAV_BG":
      return { ...state, navBgColor: payload };
    case "ADD_IMAGES":
      return { ...state, images: [...state.images, ...payload] };
    case "ADD_LIKED_IMAGE":
      return { ...state, likedImages: [...state.likedImages, payload] };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    colors: ["#A5B68D", "#E5D9F2", "#D2E0FB"],
    navBgColor: null,
    images: [],
    likedImages: [],
  });

  useEffect(() => {
    localStorage.setItem("my-splash", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
