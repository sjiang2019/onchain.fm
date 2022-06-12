import { useEffect, useState } from "react";
import Toast from "react-native-root-toast";

type ToastType = "success" | "error";

export interface ToastState {
  displayToast: (message: string, type: ToastType) => void;
}

export function useToast(duration?: number): ToastState {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<ToastType | null>(null);

  const displayToast = (toastMessage: string, toastType: ToastType) => {
    setMessage(toastMessage);
    setShowToast(true);
    setToastType(toastType);
  };

  useEffect(() => {
    if (showToast && message != null && toastType != null) {
      let toast = Toast.show(message, {
        shadow: false,
        backgroundColor: "white",
        containerStyle: {
          width: "100%",
          borderRadius: 10,
          borderTopColor: toastType === "success" ? "limegreen" : "red",
          borderTopWidth: 8,
        },
        position: -200,
        animation: true,
        hideOnPress: true,
        textColor: "#2d2d2d",
      });

      setTimeout(() => {
        Toast.hide(toast);
        setShowToast(false);
      }, duration ?? 700);
    }
  }, [showToast, message, toastType]);

  return {
    displayToast,
  };
}
