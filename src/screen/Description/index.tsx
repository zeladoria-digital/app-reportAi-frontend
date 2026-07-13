import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { styles } from './styles';
import { useReport } from '../../contexts/reportContext';
const SUGGESTED_TAGS = ['urgente', 'risco', 'pedestres', 'acessibilidade', 'animal'];
export function Description() {
    const router = useRouter();
    const { salvarDescricao } = useReport();
    const [description, setDescription] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [customTag, setCustomTag] = useState('');
    const handleToggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        }
        else {
            setSelectedTags([...selectedTags, tag]);
        }
    };
    const handleAddCustomTag = () => {
        if (customTag.trim() && !selectedTags.includes(customTag.trim())) {
            setSelectedTags([...selectedTags, customTag.trim()]);
            setCustomTag('');
        }
    };
    const handleContinue = () => {
        let textoFinal = description;
        if (selectedTags.length > 0) {
            const tagsString = selectedTags.map(tag => `#${tag}`).join(' ');
            textoFinal = `${description}\nTags: ${tagsString}`;
        }
        salvarDescricao(textoFinal);
        router.push('/(app)/confirmation');
    };
    return (<>
      
      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#1E293B"/>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { marginLeft: 12 }]}>
            Descrição
          </Text>
        </View>
      </View>

      
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Passo 4 de 4 (Opcional)</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill}/>
        </View>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.sectionTitle}>Adicione mais detalhes</Text>
        <Text style={styles.sectionSubtitle}>
          Quanto mais informações, melhor!
        </Text>

        
        <View style={styles.section}>
          <Text style={styles.descriptionLabel}>Descrição do problema</Text>
          <TextInput style={styles.textarea} placeholder="Ex: Buraco grande no meio da pista, está causando risco para motos e bicicletas..." multiline numberOfLines={6} maxLength={500} value={description} onChangeText={setDescription} placeholderTextColor="#9CA3AF"/>
          <Text style={styles.charCount}>
            {description.length}/500 caracteres
          </Text>
        </View>

        
        <View style={styles.section}>
          <Text style={styles.descriptionLabel}>Tags (opcional)</Text>

          <View style={styles.tagsContainer}>
            {SUGGESTED_TAGS.map((tag) => (<TouchableOpacity key={tag} style={[
                styles.tagChip,
                selectedTags.includes(tag) && styles.tagChipSelected,
            ]} onPress={() => handleToggleTag(tag)}>
                <Text style={[
                styles.tagText,
                selectedTags.includes(tag) && styles.tagTextSelected,
            ]}>
                  #{tag}
                </Text>
              </TouchableOpacity>))}
          </View>

          <TextInput style={styles.customTagInput} placeholder="Adicionar tag personalizada..." value={customTag} onChangeText={setCustomTag} onSubmitEditing={handleAddCustomTag} placeholderTextColor="#9CA3AF"/>
        </View>

        
        <View style={styles.tipBox}>
          <Text style={styles.tipText}>
            Dica: Você pode pular essa etapa e enviar direto. Mas detalhes ajudam muito!
          </Text>
        </View>

        
        <TouchableOpacity style={styles.primaryButton} onPress={handleContinue}>
          <Text style={styles.primaryButtonText}>Revisar e Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={handleContinue}>
          <Text style={styles.secondaryButtonText}>
            Pular e enviar direto
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>);
}
