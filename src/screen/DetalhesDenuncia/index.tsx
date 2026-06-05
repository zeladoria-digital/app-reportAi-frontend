import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const DADOS_TIMELINE = [
  { id: '1', title: 'Reporte enviado', date: '05/05/2026 14:30' },
  { id: '2', title: 'Em análise', date: '05/05/2026 15:00' },
  { id: '3', title: 'Aprovado', date: '06/05/2026 09:15' },
  { id: '4', title: 'Concluído', date: '08/05/2026 16:45' },
];

// O Dicionário de Status (Igual ao da tela de Histórico)
const STATUS_CONFIG = {
  resolved: { icon: 'checkmark-circle-outline', color: '#10B981', label: 'Resolvido' },
  in_progress: { icon: 'time-outline', color: '#3B82F6', label: 'Em andamento' },
  pending: { icon: 'alert-circle-outline', color: '#F59E0B', label: 'Pendente' },
  rejected: { icon: 'close-circle-outline', color: '#EF4444', label: 'Recusado' },
};

// Banco de Dados completo e com a propriedade 'status'
const BANCO_DE_DADOS_MOCK = [
  {
    id: '1',
    title: 'Buraco na via',
    location: 'Rua das Flores, 123 - Centro',
    date: 'Reportado em 05/05/2026',
    description: 'Buraco grande no meio da pista, está causando risco para motos e bicicletas.',
    status: 'resolved'
  },
  {
    id: '2',
    title: 'Lixo acumulado',
    location: 'Av. Principal, 456 - Bairro Novo',
    date: 'Reportado em 03/05/2026',
    description: 'Muito lixo acumulado na calçada, atraindo insetos e causando mau cheiro na vizinhança inteira.',
    status: 'in_progress'
  },
  {
    id: '3',
    title: 'Fossa cheia',
    location: 'Rua Central, 789 - Bairro Novo',
    date: 'Reportado em 01/05/2026',
    description: 'Fossa transbordando no meio da rua, situação de risco sanitário para as crianças.',
    status: 'pending'
  },
  {
    id: '4',
    title: 'Iluminação',
    location: 'Praça da Matriz - Centro',
    date: 'Reportado em 28/04/2026',
    description: 'Poste queimado há 3 semanas deixando a praça escura e perigosa.',
    status: 'rejected'
  }
];


export function DetalhesDenuncia() {

    // 1. Abrindo a mochila e pegando o ID que o Histórico mandou
    const { idDaDenuncia } = useLocalSearchParams();

    // 2. Buscando no Banco de Dados a denúncia que tem ESSE ID
    const denuncia = BANCO_DE_DADOS_MOCK.find(item => item.id === idDaDenuncia);

    // 3. Trava de Segurança
    if (!denuncia) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Denúncia não encontrada!</Text>
            </View>
        );
    }

const statusAtual = STATUS_CONFIG[denuncia.status as keyof typeof STATUS_CONFIG];

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* --- BLOCO 1: HEADER E IMAGEM --- */}
            <View style={styles.headerContainer}>
                <Image 
                    source={{ uri: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800' }} 
                    style={styles.imagemCapa}
                    resizeMode="cover"
                />

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