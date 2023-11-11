export type InitialState = {
  recentSearchToggle: boolean;
  notificationToggle: boolean;
  profileToggle: boolean;
  locationToggle: boolean;
  activeProductTab: string;
  reviewModalToggle: boolean;
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
    }
  | {
      type: "LOCATION_TOGGLE_ON";
    }
  | {
      type: "LOCATION_TOGGLE_OFF";
    }
  | {
      type: "ACTIVE_PRODUCT_TAB";
      payload: string;
    }
  | {
      type: "REVIEW_MODAL_TOGGLE_ON";
    }
  | {
      type: "REVIEW_MODAL_TOGGLE_OFF";
    };
