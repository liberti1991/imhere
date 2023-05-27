import { StyleSheet } from "react-native";

export const ParticipantStyles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  name: {
    color: "#fff",
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },

  btn: {
    width: 46,
    height: 46,
    backgroundColor: "#e23c44",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: 34,
  },
});
