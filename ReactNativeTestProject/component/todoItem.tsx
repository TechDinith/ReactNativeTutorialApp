import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Modal, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  btnColor,
  itemStyles,
  modalStyles,
  placeHolderColor,
} from "../styles/styles";
import { useSelector } from "react-redux";

export default function TodoItem({
  item,
  pressDeleteHandler,
  pressEditHandler,
  editText,
  updateHandler,
  closeHandler,
  modalVisible,
}: any) {
  const [text, setText] = useState("");

  const mode = useSelector((state: any) => state.todoSlice.mode);

  const changeHandler = (val: string) => {
    setText(val);
  };

  return (
    <>
      <View
        style={mode === "dark" ? itemStyles.itemDark : itemStyles.itemLight}
      >
        <TouchableOpacity onPress={() => pressDeleteHandler(item.key)}>
          <MaterialIcons
            name="delete"
            size={18}
            color={mode === "dark" ? btnColor.dark : btnColor.light}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressEditHandler(item.key)}>
          <MaterialIcons
            name="edit"
            size={18}
            color={mode === "dark" ? btnColor.dark : btnColor.light}
          />
        </TouchableOpacity>

        <Text
          style={
            mode === "dark" ? itemStyles.itemTextDark : itemStyles.itemTextLight
          }
        >
          {item.text}
        </Text>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={
            mode === "dark"
              ? modalStyles.centeredViewDark
              : modalStyles.centeredViewLight
          }
        >
          <View
            style={
              mode === "dark"
                ? modalStyles.modalViewDark
                : modalStyles.modalViewLight
            }
          >
            <TextInput
              autoCapitalize="words"
              style={
                mode === "dark" ? itemStyles.inputDark : itemStyles.inputLight
              }
              onChangeText={changeHandler}
              placeholderTextColor={
                mode === "dark" ? placeHolderColor.dark : placeHolderColor.light
              }
              defaultValue={editText}
              multiline
            />
            <TouchableOpacity onPress={() => updateHandler(text, item.key)}>
              <MaterialIcons
                name="check"
                size={18}
                color={mode === "dark" ? "#7FFFD4" : "green"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => closeHandler(item.key)}>
              <MaterialIcons
                name="close"
                size={18}
                color={mode === "dark" ? "#FF3131" : "red"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
