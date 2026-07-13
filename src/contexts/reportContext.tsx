import React, { createContext, useState, useContext } from 'react';
interface ReportData {
    fotoUri: string | null;
    categoria: string | null;
    latitude: number | null;
    longitude: number | null;
    descricao: string;
    dataHora: string | null;
}
interface ReportContextType {
    report: ReportData;
    salvarFoto: (uri: string) => void;
    salvarCategoria: (cat: string) => void;
    salvarLocalizacao: (lat: number, lng: number) => void;
    salvarDescricao: (desc: string) => void;
    salvarDataHora: (data: string) => void;
    limparReport: () => void;
}
const ReportContext = createContext<ReportContextType | undefined>(undefined);
export function ReportProvider({ children }: {
    children: React.ReactNode;
}) {
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
    return (<ReportContext.Provider value={{ report, salvarFoto, salvarCategoria, salvarLocalizacao, salvarDescricao, limparReport, salvarDataHora }}>
      {children}
    </ReportContext.Provider>);
}
export function useReport() {
    const context = useContext(ReportContext);
    if (context === undefined) {
        throw new Error('useReport deve ser usado dentro de um ReportProvider');
    }
    return context;
}
