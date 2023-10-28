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
    default:
      return state;
  }
};

export default reducer;
