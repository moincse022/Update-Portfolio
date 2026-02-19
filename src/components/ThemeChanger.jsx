import { useCallback, useEffect } from "react";
import colors from "tailwindcss/colors";
import useResource from "../hooks/useResource";

const colorsArray = [
  "lime",
  "blue",
  "red",
  "orange",
  "amber",
  "yellow",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const ThemeChanger = () => {
  const { themeMode, themeColor, setThemeColor } = useResource();
  const setThemeColorFunc = useCallback(
    (color) => {
      setThemeColor(color);
      document.documentElement.dataset.theme = color;
      localStorage.setItem("theme-color", `${color}`);
    },
    [setThemeColor]
  );

  useEffect(() => {
    const userThemeColor = localStorage.getItem("theme-color");
    setThemeColorFunc(userThemeColor || themeColor);
  }, [setThemeColorFunc, themeColor]);

  return (
    <div className="flex justify-center items-center flex-col space-y-2 p-2 bg-zinc-500/35 rounded">
      {colorsArray.map((color) => (
        <button
          key={color}
          type="button"
          onClick={() => setThemeColorFunc(color)}
          style={{
            backgroundColor:
              themeMode === "dark"
                ? colors[color]["400"]
                : colors[color]["600"],
          }}
          className="size-6 text-sm rounded shadow-md focus:ring hover:ring focus:ri hover:ri"
        />
      ))}
    </div>
  );
};

export default ThemeChanger;
