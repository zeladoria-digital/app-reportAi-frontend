import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import api from '@/src/services/api'; // <-- Adicionamos a importação da API
import { styles } from "./styles";

// Apenas para ilustrar a linha do tempo (como o backend ainda não manda o histórico detalhado, deixamos mockado por enquanto)
const DADOS_TIMELINE = [
  { id: '1', title: 'Reporte enviado', date: 'Hoje' },
  { id: '2', title: 'Em análise', date: 'Aguardando' },
];

const STATUS_CONFIG = {
  resolved: { icon: 'checkmark-circle-outline', color: '#10B981', label: 'Resolvido' },
  in_progress: { icon: 'time-outline', color: '#3B82F6', label: 'Em andamento' },
  pending: { icon: 'alert-circle-outline', color: '#F59E0B', label: 'Pendente' },
  rejected: { icon: 'close-circle-outline', color: '#EF4444', label: 'Recusado' },
};

export function DetalhesDenuncia() {
    const { idDaDenuncia } = useLocalSearchParams();
    
    // Nossos novos estados para controlar a API
    const [denuncia, setDenuncia] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Buscando a denúncia real no banco
    useEffect(() => {
        const buscarDetalhes = async () => {
            try {
                setIsLoading(true);
                // Faz a requisição enviando o ID na URL
                const response = await api.get(`/complaints/${idDaDenuncia}`);
                const item = response.data;

                // Formatando a data
                const dataObj = new Date(item.createdAt);
                const dataFormatada = dataObj.toLocaleDateString('pt-BR');

                // Salvando no estado com a mesma estrutura que a tela espera
                setDenuncia({
                    id: item.id,
                    title: item.category || 'Sem categoria',
                    location: item.neighborhood || 'Local não informado',
                    date: `Reportado em ${dataFormatada}`,
                    description: item.description || 'Sem descrição informada.',
                    status: item.status,
                    photoUrl: item.photoUrl
                });

            } catch (error) {
                console.error("Erro ao buscar detalhes:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (idDaDenuncia) {
            buscarDetalhes();
        }
    }, [idDaDenuncia]);

    // Tela de carregamento enquanto busca do banco
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#3B82F6" />
                <Text style={{ marginTop: 10 }}>Carregando detalhes...</Text>
            </View>
        );
    }

    // Trava de Segurança
    if (!denuncia) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Denúncia não encontrada!</Text>
                <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 20 }}>
                    <Text style={{ color: '#3B82F6' }}>Voltar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // O mesmo "fallback" de segurança que criamos na outra tela!
    const statusAtual = STATUS_CONFIG[denuncia.status as keyof typeof STATUS_CONFIG] || {
        icon: 'help-circle-outline', color: '#64748B', label: denuncia.status || 'Desconhecido'
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* --- BLOCO 1: HEADER E IMAGEM --- */}
            <View style={styles.headerContainer}>
                {/* Alterado para usar a foto real do banco, se não tiver, usa a padrão */}
                <Image 
                    source={{ uri: denuncia.photoUrl || 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800' }} 
                    style={styles.imagemCapa}
                    resizeMode="cover"
                />
               
               {/* O RESTANTE DO SEU CÓDIGO JSX CONTINUA EXATAMENTE IGUAL DAQUI PARA BAIXO */}

                <View style={styles.topButtonsContainer}>
                    <TouchableOpacity style={styles.iconButton} onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="share-social" size={20} color="#ffffff" />
                    </TouchableOpacity>
                </View>

                {/* SELO DINÂMICO! Mudamos a cor de fundo usando um array de estilos */}
                <View style={[styles.statusBadge, { backgroundColor: statusAtual.color }]}>
                    <Ionicons name={statusAtual.icon as any} size={20} color="#FFFFFF" />
                    <Text style={styles.statusText}>{statusAtual.label}</Text>
                </View>
            </View>

            {/* CAIXA BRANCA PRINCIPAL QUE ABRAÇA O RESTO DA TELA */}
            <View style={styles.contentContainer}>
                
                {/* --- BLOCO 2: INFORMAÇÕES PRINCIPAIS DINÂMICAS --- */}
                <View style={styles.infoBlock}>
                    <Text style={styles.tituloSecao}>{denuncia.title}</Text>
                    
                    <View style={styles.linhaInfo}>
                        <Ionicons name="location-outline" size={18} color="#64748B" />
                        <Text style={styles.textoInfo}>{denuncia.location}</Text>
                    </View>

                    <View style={styles.linhaInfo}>
                        <Ionicons name="calendar-outline" size={18} color="#64748B" />
                        <Text style={styles.textoInfo}>{denuncia.date}</Text>
                    </View>

                    <View style={styles.linhaInfo}>
                        <Ionicons name="eye-outline" size={18} color="#64748B" />
                        <Text style={styles.textoInfo}>ID: #RPT-2026-000{denuncia.id}</Text>
                    </View>
                </View>

                {/* --- BLOCO 3: DESCRIÇÃO DINÂMICA --- */}
                <View style={styles.descriptionBlock}>
                    <Text style={styles.subtituloSecao}>Descrição</Text>
                    
                    <Text style={styles.textoDescricao}>
                        {denuncia.description}
                    </Text>

                    <View style={styles.tagsContainer}>
                        <View style={styles.tagBadge}>
                            <Text style={styles.tagText}>#urgente</Text>
                        </View>
                        <View style={styles.tagBadge}>
                            <Text style={styles.tagText}>#risco</Text>
                        </View>
                    </View>
                </View>

                {/* --- BLOCO 4: GAMIFICAÇÃO --- */}
                <View style={styles.gamificationCard}>
                    <Text style={styles.trophyIcon}>🏆</Text>
                    <View style={styles.gamificationTextContainer}>
                        <Text style={styles.gamificationTitle}>+50 pontos ganhos!</Text>
                        <Text style={styles.gamificationSubtitle}>Obrigado por contribuir com a cidade</Text>
                    </View>
                </View>

                {/* --- BLOCO 5: LINHA DO TEMPO DINÂMICA --- */}
                <View style={styles.timelineBlock}>
                    <Text style={styles.subtituloSecao}>Linha do tempo</Text>
                    
                    {DADOS_TIMELINE.map((item, index) => {
                        const isLastItem = index === DADOS_TIMELINE.length - 1;

                        return (
                            <View key={item.id} style={styles.timelineItem}>
                                <View style={styles.timelineProgress}>
                                    <View style={styles.timelineDot}>
                                        <Ionicons name="checkmark" size={16} color="#FFFFFF" />
                                    </View>
                                    {!isLastItem ? <View style={styles.timelineLine}></View> : null}
                                </View>

                                <View style={styles.timelineContent}>
                                    <Text style={styles.timelineTitle}>{item.title}</Text>
                                    <Text style={styles.timelineDate}>{item.date}</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>

            {/* FECHAMENTO DA CAIXA BRANCA PRINCIPAL */}
            </View>

        </ScrollView>
    );
}