import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  //1
  // const [name, setName] = useState("Fred");
  // const [inputValue, setInputValue] = useState("");

  // const clickHandler = () => {
  //   setName("No-One");
  // };

  //2
  const [people, setPeople] = useState([
    {
      name: "fred",
      id: "1",
    },
    {
      name: "dead",
      id: "2",
    },
    {
      name: "zed",
      id: "3",
    },
    {
      name: "blood",
      id: "4",
    },
    {
      name: "fred",
      id: "5",
    },
    {
      name: "dead",
      id: "6",
    },
    {
      name: "zed",
      id: "7",
    },
    {
      name: "blood",
      id: "8",
    },
  ]);

  const pressHandler = (id: string) => {
    console.log("id", id);

    //oneway
    // setPeople((oldPeople) => {
    //   return oldPeople.filter(
    //     (person: { name: string; id: string }) => person.id != id
    //   );
    // });
    //anothorway
    setPeople([...people.filter((person: any) => person.id != id)]);
    console.log("people", people);
  };
  return (
    <View style={styles.container}>
      {/* 1 */}
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

      {/* 2 */}
      {/* <ScrollView>
        {people.map((item, id) => (
          <View key={id + 1}>
            <Text style={styles.item}>
              {item.name} {id + 1}
            </Text>
          </View>
        ))}
      </ScrollView> */}

      {/* 3 */}
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //1
    // alignItems: "center",
    // justifyContent: "center",

    // 2
    padding: 40,
    paddingHorizontal: 20,
  },
  //1
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

  //2
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,

    // 3
    marginHorizontal: 10,
  },
});
