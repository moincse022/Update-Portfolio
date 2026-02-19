import { Sun, Moon } from "lucide-react";
import { useCallback, useEffect } from "react";
import useResource from "../hooks/useResource";

export default function ThemeToggle() {
  const { themeMode, setThemeMode } = useResource();

  const setThemeModeFunc = useCallback(
    (mode) => {
      document.documentElement.dataset.mode = mode;
      localStorage.setItem("theme-mode", mode);
      setThemeMode(mode);
    },
    [setThemeMode]
  );

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const userTheme = localStorage.getItem("theme-mode");

    setThemeModeFunc(userTheme || systemTheme);
  }, [setThemeModeFunc]);

  return (
    <label
      htmlFor="Toggle1"
      className="slidel z-30 inline-flex items-center space-x-4 cursor-pointer text-gray-800 dark:text-gray-100 focus:ring hover:ring focus:ri hover:ri rounded-full"
    >
      <span className="relative">
        <input
          id="Toggle1"
          type="checkbox"
          className="hidden peer"
          checked={themeMode === "light"}
          onChange={() => {
            setThemeModeFunc(themeMode === "light" ? "dark" : "light");
          }}
        />
        <div className="w-11 h-6 flex justify-center items-center gap-1 rounded-full shadow-inner bg-gray-600 peer-checked:bg-primary dark:bg-gray-400">
          <Moon className="origin-center icon-motion rotate-12 w-4 h-4 text-white" />
          <Sun className="origin-center sun w-4 h-4 text-black" />
        </div>
        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100 dark:bg-gray-800"></div>
      </span>
    </label>
  );
}
