import { createContext, useContext, useEffect, useState } from "react";

interface filterContextData {
  filterInputValue: string;
  setFilterValues: (values: string) => void;
}

interface FilterProviderProps {
  children: React.ReactNode;
}

const filterContext = createContext({
  filterInputValue: "Surrou",
  setFilterValues: () => {},
} as filterContextData);

export function FilterProvider({ children }: FilterProviderProps) {
  const [filterInputValue, setFilterInputValue] = useState("");

  useEffect(() => {
    console.log(filterInputValue);
  }, [filterInputValue]);

  function setFilterValues(values: string) {
    setFilterInputValue(values);
  }

  return (
    <filterContext.Provider
      value={{
        filterInputValue,
        setFilterValues,
      }}
    >
      {children}
    </filterContext.Provider>
  );
}

export const useFilterContext = () => useContext(filterContext);
