// Importa o provedor do NativeBase
import { NativeBaseProvider } from "native-base";
// Importa o componente de navegação
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  // Retorna a estrutura da tela principal
  return (
    // Envolve a aplicação no provedor de estado global e NativeBase
    <NativeBaseProvider>
        <AppNavigator /> {/* Adicione o navegador aqui */}
    </NativeBaseProvider>
  );
}