import { Action, InitialState } from "@/utils/Types";

const reducer = (state: InitialState, actions: Action) => {
  switch (actions.type) {
    case "RECENT_SEARCH_TOGGLE_ON":
      return { ...state, recentSearchToggle: true };
    case "RECENT_SEARCH_TOGGLE_OFF":
      return { ...state, recentSearchToggle: false };
    case "NOTIFICATION_TOGGLE_ON":
      return { ...state, notificationToggle: true };
    case "NOTIFICATION_TOGGLE_OFF":
      return { ...state, notificationToggle: false };
    case "PROFILE_TOGGLE_ON":
      return { ...state, profileToggle: true };
    case "PROFILE_TOGGLE_OFF":
      return { ...state, profileToggle: false };
    case "LOCATION_TOGGLE_ON":
      return { ...state, locationToggle: true };
    case "LOCATION_TOGGLE_OFF":
      return { ...state, locationToggle: false };
    case "ACTIVE_PRODUCT_TAB":
      return { ...state, activeProductTab: actions.payload };
    case "REVIEW_MODAL_TOGGLE_ON":
      return { ...state, reviewModalToggle: true };
    case "REVIEW_MODAL_TOGGLE_OFF":
      return { ...state, reviewModalToggle: false };
    case "SET_SLIDE_PER_VIEW":
      let slide;
      if (actions.payload >= 1200) slide = 4.5;
      if (actions.payload < 1200 && actions.payload >= 1000) slide = 4;
      if (actions.payload < 1000 && actions.payload >= 850) slide = 3.5;
      if (actions.payload < 850 && actions.payload >= 750) slide = 3;
      if (actions.payload < 750 && actions.payload >= 650) slide = 2.5;
      if (actions.payload < 650 && actions.payload >= 500) slide = 2;
      if (actions.payload < 500 && actions.payload >= 450) slide = 1.5;
      if (actions.payload < 450 && actions.payload >= 400) slide = 1.2;
      if (actions.payload < 400) slide = 1.1;
      return { ...state, slidePerView: slide };
    default:
      return state;
  }
};

export default reducer;
