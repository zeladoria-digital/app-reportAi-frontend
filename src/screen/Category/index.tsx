import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from './styles';
import { useReport } from '../../contexts/reportContext'; // Ajuste o caminho se precisar
import { useEffect } from 'react'; // O useEffect executa coisas assim que a tela abre

const CATEGORIES = [
  { id: 'fossa', name: 'Fossa cheia', color: '#F59E0B', icon: 'water', highlight: true },
  { id: 'vazamento', name: 'Vazamento', color: '#3B82F6', icon: 'water-outline', highlight: false },
  { id: 'buraco', name: 'Buraco na via', color: '#F97316', icon: 'alert-circle', highlight: false },
  { id: 'iluminacao', name: 'Iluminação', color: '#FBBF24', icon: 'light-up', highlight: false },
  { id: 'lixo', name: 'Lixo acumulado', color: '#22C55E', icon: 'trash-bin', highlight: false },
  { id: 'arvore', name: 'Árvore caída', color: '#10B981', icon: 'leaf', highlight: false },
  { id: 'perigo', name: 'Perigo', color: '#EF4444', icon: 'warning', highlight: false },
  { id: 'outro', name: 'Outro', color: '#6B7280', icon: 'help-circle', highlight: false },
];

export function Category() {
  const router = useRouter();

const handleSelectCategory = (category) => {
    // 1. Guarda o nome do problema (ex: 'Fossa cheia') no cofre global
    salvarCategoria(category.name); 

    // 2. Vai para a próxima tela livre e leve
    router.push('/(app)/location');
  };
  // Puxamos a variável 'report' que tem todos os dados do cofre
const { report, salvarCategoria } = useReport(); // Pegamos a chave de salvar!
  // O useEffect vai "gritar" no seu terminal assim que a tela de Categoria abrir
  useEffect(() => {
    console.log("TELA DE CATEGORIA ABRIU!");
    console.log("O QUE TEM NO COFRE AGORA?", report);
  }, [report]);

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#1E293B" />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { marginLeft: 12 }]}>
            Categoria
          </Text>
        </View>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Passo 2 de 4</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
      </View>

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Photo Preview */}
        <View style={styles.photoPreview} />

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Qual é o problema?</Text>

        {/* Categories Grid */}
        <View style={styles.categoriesGrid}>
          {CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryCard,
                category.highlight && styles.categoryCardHighlight,
              ]}
              onPress={() => handleSelectCategory(category)}
            >
              {category.highlight && (
                <View style={styles.highlightBadge}>
                  <Text style={styles.highlightText}>Destaque</Text>
                </View>
              )}

              <View style={[styles.categoryIcon, { backgroundColor: category.color + '20' }]}>
                <Ionicons 
                  name={category.icon} 
                  size={32} 
                  color={category.color} 
                />
              </View>

              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
