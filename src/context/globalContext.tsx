import { createContext, useContext, useState } from "react";

const GlobalContext = createContext({
  showAssessmentOverview: false,
  toggleAssessmentOverview: () => {},
});
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [showAssessmentOverview, setShowAssessmentOverview] = useState(false);

  const toggleAssessmentOverview = () =>
    setShowAssessmentOverview((prev) => !prev);

  return (
    <GlobalContext.Provider
      value={{ showAssessmentOverview, toggleAssessmentOverview }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
