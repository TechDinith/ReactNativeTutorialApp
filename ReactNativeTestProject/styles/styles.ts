import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content_dark: {
    flex: 1,
    padding: 40,
    backgroundColor: "#333",
  },
  content_light: {
    flex: 1,
    padding: 40,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

export const headerStyles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export const itemStyles = StyleSheet.create({
  itemDark: {
    padding: 15,
    marginTop: 16,
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    backgroundColor: "#36454F",

    flexDirection: "row",
  },
  itemTextDark: {
    marginLeft: 10,
    color: "white",
  },
  itemLight: {
    padding: 15,
    marginTop: 16,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    backgroundColor: "white",

    flexDirection: "row",
  },
  itemTextLight: {
    marginLeft: 10,
    color: "black",
  },
  inputDark: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "white",
  },
  inputLight: {
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    color: "black",
  },
});

export const btnColor = {
  dark: "white",
  light: "black",
};

export const addStyles = StyleSheet.create({
  inputDark: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "white",
  },
  inputLight: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    color: "black",
  },
});

export const placeHolderColor = {
  dark: "#BEC3C6",
  light: "black",
};

export const modalStyles = StyleSheet.create({
  centeredViewLight: {
    flex: 1,
    justifyContent: "center",
    alignItems: "baseline",
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 55,
  },
  modalViewLight: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 20,
    marginStart: 20,
  },
  centeredViewDark: {
    flex: 1,
    justifyContent: "center",
    alignItems: "baseline",
    flexDirection: "row",
    backgroundColor: "#333",
    marginTop: 55,
  },
  modalViewDark: {
    flex: 1,
    marginEnd: 20,
    marginStart: 20,
    flexDirection: "row",
    marginTop: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
