import { Text as ReactNativeText, TextProps } from "react-native";

export default function Text(props: TextProps): JSX.Element {
  return (
    <ReactNativeText {...props} style={[{ color: "white" }, props.style]}>
      {props.children}
    </ReactNativeText>
  );
}
