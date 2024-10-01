//custom hooks
import { useGlobalContext } from "../hooks/useGlobalContext";

function ChangeTheme() {
  const { colors, dispatch } = useGlobalContext();
  const changeNavBg = (color) => {
    dispatch({ type: "CHANGE_NAV_BG", payload: color });
  };
  return (
    <div className="my-container">
      <div className="flex justify-end">
        {colors.map((color) => {
          return (
            <span
              onClick={() => changeNavBg(color)}
              key={color}
              style={{ backgroundColor: color }}
              className="mt-5 text-xs flex p-2 rounded-md  cursor-pointer select-none mr-2 justify-end"
            >
              {color}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ChangeTheme;
