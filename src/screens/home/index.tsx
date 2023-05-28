import moment from "moment";
import "moment/locale/pt-br";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participant, setParticipant] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState<string>("");

  moment.locale("pt-br");
  const currentDate = moment().format("DD [de] MMMM [de] YYYY");

  const handleParticipantAdd = () => {
    if (participant.includes(participantName)) {
      return Alert.alert(
        "Participante Existe",
        "Já Existe um participante na lista com  esse nome"
      );
    }

    setParticipant([...participant, participantName]);
    setParticipantName("");
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "sim",
        onPress: () => setParticipant(participant.filter((el) => el !== name)),
      },
      { text: "Não", style: "cancel" },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Lista de Participantes!</Text>
      <Text style={styles.eventDate}>{currentDate} </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity style={styles.btn} onPress={handleParticipantAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* a flatList carrega os item conforme oque cabe na tela  diferente do ScrollView */}
      <FlatList
        data={participant}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença .
          </Text>
        )}
      />
    </View>
  );
}
