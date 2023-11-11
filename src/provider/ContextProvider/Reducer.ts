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
    default:
      return state;
  }
};

export default reducer;
