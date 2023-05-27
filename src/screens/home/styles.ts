import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 10,
  },

  eventName: {
    color: "#fdf1fe",
    fontSize: 24,
    marginTop: 40,
    fontWeight: "bold",
  },

  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    marginVertical: 30,
  },

  input: {
    flex: 1,
    height: 46,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    paddingHorizontal: 16,
    fontSize: 16,
  },

  btn: {
    width: 46,
    height: 46,
    backgroundColor: "#31cf67",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: 34,
  },

  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
