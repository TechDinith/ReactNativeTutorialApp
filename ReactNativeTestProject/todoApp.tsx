import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Provider, useSelector } from "react-redux";
import AddTodo from "./component/addTodo";
import Header from "./component/header";
import TodoItem from "./component/todoItem";
import { appStyles } from "./styles/styles";
import store from "./_redux/store";

export default function TodoApp() {
  //todo: refactor this code after this done still no update
  const [todos, setTodos] = useState<any>([]);

  const [editText, setEditText] = useState("");
  const mode = useSelector((state: any) => state.todoSlice.mode);
  const [modalVisible, setModalVisible] = useState(false);

  const pressDeleteHandler = (key: string) => {
    setTodos([...todos.filter((todo: any) => todo.key != key)]);
  };

  const pressEditHandler = (key: string) => {
    setEditText(
      todos
        .filter((todo: any) => todo.key === key)
        .map((todo: any) => todo.text)
    );

    setModalVisible(true);
  };

  const submitHandler = (text: string) => {
    if (text != "") {
      setTodos([{ text: text, key: Math.random().toString() }, ...todos]);
    } else {
      Alert.alert("OOPS!", "Todos can't be Empty!", [
        { text: "Understood", onPress: () => console.log("Alert Closed!") },
      ]);
    }
  };

  const updateHandler = (textVal: string, key: string) => {
    setTodos([
      ...todos.filter((todo: any) => todo.key != key),
      { text: textVal, key: key },
    ]);
    setModalVisible(false);
  };

  const closeHandler = () => {
    setModalVisible(false);
  };

  return (
    <Provider store={store}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={appStyles.container}>
          <Header />
          <View
            style={
              mode === "dark" ? appStyles.content_dark : appStyles.content_light
            }
          >
            <AddTodo submitHandler={submitHandler} />
            <View style={appStyles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem
                    item={item}
                    pressDeleteHandler={pressDeleteHandler}
                    pressEditHandler={pressEditHandler}
                    editText={editText[0]}
                    updateHandler={updateHandler}
                    closeHandler={closeHandler}
                    modalVisible={modalVisible}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
}
