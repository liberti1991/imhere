import { Text, TouchableOpacity, View } from "react-native";
import { IParticipant } from "./interfaces";
import { ParticipantStyles } from "./styles";

export function Participant({ name, onRemove }: IParticipant) {
  return (
    <View style={ParticipantStyles.container}>
      <Text style={ParticipantStyles.name}>{name}</Text>

      <TouchableOpacity style={ParticipantStyles.btn} onPress={onRemove}>
        <Text style={ParticipantStyles.btnText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
