import React, { createContext, useState, useContext } from 'react';

// 1. O CONTRATO DOS DADOS: O que vai estar guardado no cofre
interface ReportData {
  fotoUri: string | null;
  categoria: string | null;
  latitude: number | null;
  longitude: number | null;
  descricao: string;
  dataHora: string | null; 
}

// 2. O CONTRATO DAS FUNÇÕES: O que as telas podem acionar
interface ReportContextType {
  report: ReportData;
  salvarFoto: (uri: string) => void;
  salvarCategoria: (cat: string) => void;
  salvarLocalizacao: (lat: number, lng: number) => void;
  salvarDescricao: (desc: string) => void;
  salvarDataHora: (data: string) => void; // <--- ADICIONE ESTA LINHA
  limparReport: () => void;
}

// 3. A CRIAÇÃO DO CONTEXTO REAL
const ReportContext = createContext<ReportContextType | undefined>(undefined);

// 4. O PROVEDOR (O Gerente do Cofre)
export function ReportProvider({ children }: { children: React.ReactNode }) {
  // O useState global que guarda todas as informações juntas
  const [report, setReport] = useState<ReportData>({
    fotoUri: null,
    categoria: null,
    latitude: null,
    longitude: null,
    descricao: '',
    dataHora: null,
  });

  const salvarDataHora = (data: string) => {
    setReport((estadoAnterior) => ({ ...estadoAnterior, dataHora: data }));
  };

  // As funções que atualizam cada pedaço do cofre separadamente
  const salvarFoto = (uri: string) => {
    setReport((estadoAnterior) => ({ ...estadoAnterior, fotoUri: uri }));
  };

  const salvarCategoria = (cat: string) => {
    setReport((estadoAnterior) => ({ ...estadoAnterior, categoria: cat }));
  };

  const salvarLocalizacao = (lat: number, lng: number) => {
    setReport((estadoAnterior) => ({ ...estadoAnterior, latitude: lat, longitude: lng }));
  };

  const salvarDescricao = (desc: string) => {
    setReport((estadoAnterior) => ({ ...estadoAnterior, descricao: desc }));
  };

  const limparReport = () => {
    setReport({ fotoUri: null, categoria: null, latitude: null, longitude: null, descricao: '', dataHora: null });
  };

  return (
    // Ligamos a energia: Tudo que estiver dentro do Provider terá acesso a esses valores
    <ReportContext.Provider value={{ report, salvarFoto, salvarCategoria, salvarLocalizacao, salvarDescricao, limparReport, salvarDataHora }}>
      {children}
    </ReportContext.Provider>
  );
}

// 5. O HOOK PERSONALIZADO (A Chave do Cofre)
export function useReport() {
  const context = useContext(ReportContext);
  if (context === undefined) {
    throw new Error('useReport deve ser usado dentro de um ReportProvider');
  }
  return context;
}