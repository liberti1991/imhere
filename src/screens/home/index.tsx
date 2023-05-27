import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "Rodrigo",
    "Vini",
    "Diego",
    "Biro",
    "Ana",
    "João",
    "Indara",
    "Bia",
    "Isa",
    "Matheus",
    "Miro",
    "Arthur",
    "Leo",
    "Paloma",
  ];

  const [participantName, setParticipantName] = useState<string>("");

  const handleParticipantAdd = () => {
    console.log("oi");
  };

  const handleParticipantRemove = (name: string) => {
    console.log(`Você clicou em remover o participante ${name}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.eventName}>Lista de Participantes!</Text>
      <Text style={styles.eventDate}>Sábado, 27 de Maio de 2023 </Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.btn} onPress={handleParticipantAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
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
