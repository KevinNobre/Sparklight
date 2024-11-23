import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getAparelhos, addAparelho, updateAparelho, deleteAparelho } from "../../services/AparelhosService";


type Device = {
  aparelhoId: number | null; 
  usuarioId: number;
  nome: string;
  potencia: string; 
  tempo: string; 
  periodo: string;
};

const ConsumoScreen: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>([]); // Lista de aparelhos
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState<Device>({
    aparelhoId: null,
    usuarioId: 6, 
    nome: "",
    potencia: "",
    tempo: "",
    periodo: "",
  });


  const fetchDevices = async () => {
    try {
      setLoading(true);
      const data: Device[] = await getAparelhos(); // Tipagem esperada da API
      setDevices(data);
    } catch (error) {
      console.error("Erro ao buscar aparelhos:", error);
      Alert.alert("Erro", "Não foi possível carregar os aparelhos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  // Atualizar estado dos inputs do formulário
  const handleInputChange = (field: keyof Device, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  // Submeter o formulário (Adicionar ou Atualizar)
  const handleSubmit = async () => {
    const { aparelhoId, nome, potencia, tempo, periodo, usuarioId } = formData;

    if (!nome || !potencia || !tempo || !periodo) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    const potenciaValue = parseFloat(potencia);
    const tempoValue = parseFloat(tempo);

    if (isNaN(potenciaValue) || isNaN(tempoValue)) {
      Alert.alert("Erro", "Potência e tempo devem ser números válidos.");
      return;
    }

    try {
      if (aparelhoId) {
    
        await updateAparelho(aparelhoId, { usuarioId, nome, potencia: potenciaValue, tempo: tempoValue, periodo });
        Alert.alert("Sucesso", "Aparelho atualizado com sucesso!");
      } else {
  
        await addAparelho({ usuarioId, nome, potencia: potenciaValue, tempo: tempoValue, periodo });
        Alert.alert("Sucesso", "Aparelho adicionado com sucesso!");
      }
      setModalVisible(false);
      fetchDevices(); 
    } catch (error) {
      console.error("Erro ao salvar aparelho:", error);
      Alert.alert("Erro", "Não foi possível salvar o aparelho.");
    }
  };

  const handleDelete = async (aparelhoId: number) => {
    try {
      await deleteAparelho(aparelhoId);
      Alert.alert("Sucesso", "Aparelho excluído com sucesso!");
      fetchDevices(); 
    } catch (error) {
      console.error("Erro ao excluir aparelho:", error);
      Alert.alert("Erro", "Não foi possível excluir o aparelho.");
    }
  };

  // Abrir modal para edição
  const openModal = (device: Device | null = null) => {
    setFormData(
      device
        ? {
            aparelhoId: device.aparelhoId,
            usuarioId: device.usuarioId,
            nome: device.nome,
            potencia: device.potencia.toString(),
            tempo: device.tempo.toString(),
            periodo: device.periodo,
          }
        : {
            aparelhoId: null,
            usuarioId: 5,
            nome: "",
            potencia: "",
            tempo: "",
            periodo: "",
          }
    );
    setModalVisible(true);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={styles.title}>Informações de Consumo</Text>
          <TouchableOpacity onPress={() => openModal()}>
            <Ionicons name="add-circle-outline" size={24} color="#0066FF" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={devices}
          keyExtractor={(item) => item.aparelhoId ? item.aparelhoId.toString() : '0'} 
          renderItem={({ item }) => (
            <View style={styles.deviceItem}>
              <Text style={styles.deviceName}>{item.nome}</Text>
              <Text style={styles.deviceDetails}>
                {item.potencia} kWh | {item.tempo} h/dia
              </Text>
              <View style={styles.actions}>
                <TouchableOpacity onPress={() => openModal(item)}>
                  <Ionicons name="create-outline" size={20} color="#0066FF" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item.aparelhoId!)}> {/* Garantir que aparelhoId é válido */}
                  <Ionicons name="trash-outline" size={20} color="#FF3B3B" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      {/* Modal de Adicionar/Editar */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {formData.aparelhoId ? "Editar Aparelho" : "Adicionar Aparelho"}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={formData.nome}
              onChangeText={(value) => handleInputChange("nome", value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Potência (kWh)"
              keyboardType="numeric"
              value={formData.potencia}
              onChangeText={(value) => handleInputChange("potencia", value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Tempo (h)"
              keyboardType="numeric"
              value={formData.tempo}
              onChangeText={(value) => handleInputChange("tempo", value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Período"
              value={formData.periodo}
              onChangeText={(value) => handleInputChange("periodo", value)}
            />
            <Button title="Salvar" onPress={handleSubmit} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 16,
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  addText: {
    marginLeft: 4,
    color: "#0066FF",
    fontSize: 14,
  },
  deviceItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },
  deviceName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  deviceDetails: {
    fontSize: 14,
    color: "#555",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    fontSize: 14,
    color: "#333",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ConsumoScreen;

  