import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Text from "./Text";

interface SearchInputProps {
  text: string | null;
  submitted: string | null;
  onChangeText: (query: string | null) => void;
  onChangeSubmittedText: (text: string | null) => void;
  placeholderText?: string;
}

export default function SearchInput(props: SearchInputProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.searchInputBackground,
          { width: props.submitted != null ? "85%" : "100%" },
        ]}
      >
        <View style={{ width: "100%", flexDirection: "row", flex: 1 }}>
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 6 }}
          />
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            autoComplete="off"
            autoCapitalize="none"
            placeholder={props.placeholderText}
            returnKeyType="search"
            onSubmitEditing={() => props.onChangeSubmittedText(props.text)}
            value={props.text ?? ""}
            onChangeText={props.onChangeText}
          />
        </View>
        {props.text != null && props.text.length > 0 && (
          <TouchableOpacity
            onPress={() => props.onChangeText(null)}
            style={{ paddingRight: 6, paddingLeft: 6 }}
          >
            <Text style={{ fontSize: 18 }}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
      {props.submitted != null && (
        <TouchableOpacity
          onPress={() => {
            props.onChangeText(null);
            props.onChangeSubmittedText(null);
            Keyboard.dismiss();
          }}
          style={styles.cancelButton}
        >
          <Text style={{ padding: 8 }}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  searchInputBackground: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#5c5c5c",
    borderRadius: 15,
    alignItems: "center",
  },
  textInput: {
    fontSize: 20,
    marginLeft: 10,
    flex: 1,
    color: "white",
  },
  cancelButton: {
    marginLeft: 12,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
  },
});
