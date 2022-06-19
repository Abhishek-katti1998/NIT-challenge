const intialMedState = [];
const intialHealthState = [];
const initalFormState = {};
let initalLoadState = false;
let initalTokenState = "";
let initialPath = "";
export const medReducer = (state = intialMedState, action) => {
  // debugger;
  //   console.log("payload", action.payLoad);
  switch (action.type) {
    case "medicines":
      return action.payLoad.data;

    default:
      return state;
  }
};

export const healthReducer = (state = intialHealthState, action) => {
  switch (action.type) {
    case "health-care":
      return [...state, ...action.payLoad];

    default:
      return state;
  }
};

export const loadReducer = (state = initalLoadState, action) => {
  switch (action.type) {
    case "load":
      return action.payLoad;

    default:
      return state;
  }
};
export const tokenReducer = (state = initalTokenState, action) => {
  switch (action.type) {
    case "token":
      return action.payLoad;

    default:
      return state;
  }
};

export const pathReducer = (state = initialPath, action) => {
  switch (action.type) {
    case "path":
      return action.payLoad;

    default:
      return state;
  }
};

export const formikReducer = (state = initalFormState, action) => {
  switch (action.type) {
    case "formik":
      return action.payLoad;

    default:
      return state;
  }
};
