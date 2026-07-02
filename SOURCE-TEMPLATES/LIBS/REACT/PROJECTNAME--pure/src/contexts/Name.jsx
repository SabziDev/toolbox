/* eslint-disable @eslint-react/no-unstable-context-value */

/*
<NameContextProvider>
  
</NameContextProvider>;

const { VALUE, setValue } = useContext(NameContext);
*/

import { createContext, useState } from "react";

const NameContext = createContext("DEFAULTVALUE");
NameContext.displayName = "NameContext";

const NameContextProvider = ({ children }) => {
  const [VALUE, setValue] = useState("DEFAULTVALUE");

  // codes...

  return <NameContext value={{ VALUE, setValue }}>{children}</NameContext>;
};

export { NameContextProvider };
export default NameContext;
