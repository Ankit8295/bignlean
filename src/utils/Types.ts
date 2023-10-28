export type InitialState = {
  recentSearchToggle: boolean;
  notificationToggle: boolean;
  profileToggle: boolean;
};

export type Action =
  | {
      type: "RECENT_SEARCH_TOGGLE_ON";
    }
  | {
      type: "RECENT_SEARCH_TOGGLE_OFF";
    }
  | {
      type: "NOTIFICATION_TOGGLE_ON";
    }
  | {
      type: "NOTIFICATION_TOGGLE_OFF";
    }
  | {
      type: "PROFILE_TOGGLE_ON";
    }
  | {
      type: "PROFILE_TOGGLE_OFF";
    };
