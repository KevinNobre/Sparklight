import axios from "axios";

interface ApiResponse {
  consumoMes: number;
  custoMes: number;
  _links: {
    self: {
      href: string;
    };
  };
}


export const fetchUserData = async (id: number): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(
      `http://localhost:8080/historicos/${id}/calculo`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    throw new Error("Erro ao buscar dados do usuário.");
  }
};
