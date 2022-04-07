import React, { useState } from "react";
import { Button, Switch, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addStyles, placeHolderColor } from "../styles/styles";
import { modeRed } from "../_redux/todoSlice";

export default function AddTodo({ submitHandler }: any) {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.todoSlice.mode);

  const [text, setText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    mode === "dark" ? dispatch(modeRed("light")) : dispatch(modeRed("dark"));
  };

  const changeHandler = (val: string) => {
    setText(val);
  };

  return (
    <View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#333" : "white"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TextInput
        autoCapitalize="words"
        style={mode === "dark" ? addStyles.inputDark : addStyles.inputLight}
        placeholder="New Todo..."
        onChangeText={changeHandler}
        placeholderTextColor={
          mode === "dark" ? placeHolderColor.dark : placeHolderColor.light
        }
        multiline
      />
      <Button
        onPress={() => submitHandler(text)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
}
