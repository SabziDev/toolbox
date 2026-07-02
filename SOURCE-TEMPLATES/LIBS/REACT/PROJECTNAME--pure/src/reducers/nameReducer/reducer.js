// const [STATE, dispatch] = useReducer(nameReducer, DEFAULT_VALUE);
// dispatch({
//   type: "TYPE",
//   payload: "DATA",
// });

import { TYPE_NAME } from "./action";

const nameReducer = (STATE, action) => {
  switch (action.type) {
    case TYPE_NAME: {
      return {
        ...STATE,
        NAME: action.payload,
      };
    }

    default: {
      return STATE;
    }
  }
};

export default nameReducer;
