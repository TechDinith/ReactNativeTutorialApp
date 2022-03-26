import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  //states
  // const [name, setName] = useState("Fred");
  // const [inputValue, setInputValue] = useState("");

  //functions
  // const clickHandler = () => {
  //   setName("No-One");
  // };

  return (
    <View style={styles.container}>
      {/* <View>
        <Text>Hellow, {name}</Text>

        <TextInput
          multiline
          style={styles.input}
          placeholder={"e.g.Jhon Doe"}
          onChangeText={(value) => setInputValue(value)}
        />
        <Text>Your Input, {inputValue}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={clickHandler} title="Update Title" />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // buttonContainer: {
  //   marginTop: 20,
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: "black",
  //   padding: 8,
  //   margin: 10,
  //   width: 200,
  // },
});
