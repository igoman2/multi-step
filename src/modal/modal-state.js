export const modalState = {
  currentScreen: null,
  currentScreens: [],
  currentScreenID: null,
  onClose: () => {}, // noop
  next(key, context) {
    return [
      key,
      context.currentScreens.find(
        (screen) => screen.props?.screen === key.toString()
      )
    ];
  },
  style: {
    base: {
      header: [
        "p-4",
        "border-b",
        "border-gray-200",
        "flex",
        "items-center",
        "justify-between"
      ],
      title: ["text-gray-900", "text-xl", "font-bold"],
      copy: ["font-medium", "text-gray-90", "dark:text-white", "text-center"],
      close: [
        "relative",
        "bg-gray-100",
        "text-gray-900",
        "font-semibold",
        "dark:bg-gray-800",
        "dark:text-gray-200",
        "rounded-2xl",
        "flex",
        "items-center",
        "px-4",
        "py-2",
        "disabled:opacity-40",
        "disabled:cursor-not-allowed"
      ],
      next: [
        "border-2",
        "border-transparent",
        "dark:border-white",
        "bg-black",
        "text-white",
        "font-medium",
        "flex",
        "items-center",
        "px-4",
        "py-2",
        "rounded-2xl",
        "disabled:opacity-40",
        "disabled:cursor-not-allowed"
      ]
    }
  }
};

export default function reducer(state, action) {
  switch (action.type) {
    case "SETSCREEN": {
      console.log("SETSCREEN", action);
      const newState = {
        ...state,
        currentScreen: action.data.currentScreen,
        currentScreenID: action.data.currentScreenID
      };
      return newState;
    }
    case "SETSCREENS": {
      return { ...state, currentScreens: [...action.data.currentScreens] };
    }
    case "NEXT": {
      const newState = {
        ...state,
        currentScreen: action.data.currentScreen,
        currentScreenID: action.data.currentScreenID
      };
      return newState;
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}
