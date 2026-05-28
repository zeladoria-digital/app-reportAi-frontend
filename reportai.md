# Prompt Completo - ReportaAi: 10 Telas React Native

## 📱 Contexto do Projeto

**Nome do App:** ReportaAi - Monitoramento Cidadão de Problemas Urbanos  
**Município:** Currais Novos/RN  
**Plataforma:** React Native (Expo)  
**Autenticação:** Firebase Auth (Email/Senha e Google)  
**Navegação:** React Navigation v6 (Stack + Bottom Tabs)  
**Ícones:** @expo/vector-icons ou lucide-react-native  

---

## 🎯 Objetivo

Criar **10 telas completas** em React Native para o app ReportaAi. As telas de **Splash e Login já existem** e devem ser mantidas como estão.

### Telas a Criar:

1. **SignupScreen** - Cadastro de Conta
2. **HomeScreen** - Home Principal com estatísticas
3. **NewReportScreen** - Iniciar novo reporte
4. **CameraScreen** - Captura de foto (câmera nativa)
5. **CategoryScreen** - Seleção de categoria
6. **LocationScreen** - Confirmação GPS
7. **DescriptionScreen** - Descrição e tags (opcional)
8. **ConfirmationScreen**jb - Revisão e envio
9. **HistoryScreen** - Histórico de reportes
10. **ProfileScreen** - Perfil e configurações

---

## 🎨 Design System Unificado

### Paleta de Cores

```javascript
export const colors = {
  // Principais
  primary: '#2563eb',
  primaryDark: '#1d4ed8',
  primaryLight: '#3b82f6',
  
  // Status
  green: '#22c55e',
  greenDark: '#16a34a',
  greenLight: '#dcfce7',
  
  yellow: '#eab308',
  yellowLight: '#fef9c3',
  yellowDark: '#a16207',
  
  amber: '#f59e0b',
  amberDark: '#b45309',
  amberLight: '#fffbeb',
  
  red: '#ef4444',
  redLight: '#fee2e2',
  redDark: '#dc2626',
  
  blue: '#3b82f6',
  blueLight: '#dbeafe',
  
  purple: '#9333ea',
  purpleLight: '#f3e8ff',
  
  pink: '#ec4899',
  
  // Neutras
  white: '#ffffff',
  black: '#000000',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',
};

export const gradients = {
  primary: ['#2563eb', '#9333ea', '#ec4899'],
  green: ['#22c55e', '#16a34a'],
  background: ['#eff6ff', '#f3e8ff', '#fce7f3'],
};
```

### Tipografia

```javascript
export const typography = {
  h1: { fontSize: 32, fontWeight: '700', lineHeight: 40 },
  h2: { fontSize: 24, fontWeight: '700', lineHeight: 32 },
  h3: { fontSize: 20, fontWeight: '600', lineHeight: 28 },
  h4: { fontSize: 18, fontWeight: '600', lineHeight: 24 },
  
  bodyLarge: { fontSize: 18, fontWeight: '400', lineHeight: 28 },
  body: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
  bodySmall: { fontSize: 14, fontWeight: '400', lineHeight: 20 },
  
  caption: { fontSize: 12, fontWeight: '400', lineHeight: 16 },
  tiny: { fontSize: 10, fontWeight: '400', lineHeight: 14 },
};
```

### Espaçamentos e Bordas

```javascript
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 12,
  },
};
```

---

## 📐 Estrutura de Pastas

```
src/
├── screens/
│   ├── auth/
│   │   ├── SplashScreen.tsx          // ✅ Já existe
│   │   ├── LoginScreen.tsx           // ✅ Já existe
│   │   └── SignupScreen.tsx          // 🆕 Criar
│   ├── home/
│   │   └── HomeScreen.tsx            // 🆕 Criar
│   ├── report/
│   │   ├── NewReportScreen.tsx       // 🆕 Criar
│   │   ├── CameraScreen.tsx          // 🆕 Criar
│   │   ├── CategoryScreen.tsx        // 🆕 Criar
│   │   ├── LocationScreen.tsx        // 🆕 Criar
│   │   ├── DescriptionScreen.tsx     // 🆕 Criar
│   │   └── ConfirmationScreen.tsx    // 🆕 Criar
│   ├── history/
│   │   └── HistoryScreen.tsx         // 🆕 Criar
│   └── profile/
│       └── ProfileScreen.tsx         // 🆕 Criar
├── components/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   └── Badge.tsx
├── navigation/
│   ├── AuthStack.tsx
│   ├── MainStack.tsx
│   └── BottomTabs.tsx
├── services/
│   └── firebase.ts
├── contexts/
│   ├── AuthContext.tsx
│   └── ReportContext.tsx
├── theme/
│   ├── colors.ts
│   ├── typography.ts
│   └── spacing.ts
└── utils/
    ├── validation.ts
    └── masks.ts
```

---

## 🔐 TELA 1: SignupScreen (Cadastro de Conta)

**Caminho:** `src/screens/auth/SignupScreen.tsx`  
**Navegação:** Login → Signup

### Layout da Tela

```
┌────────────────────────────────────────┐
│ ← Voltar para Login                    │
│                                        │
│         [👤 Ícone]                     │
│      Criar Conta                       │
│   Junte-se à comunidade                │
│                                        │
│  ┌──────────────────────────────────┐ │
│  │ NOME COMPLETO *                  │ │
│  │ [👤] [_____________] [✓]         │ │
│  │                                  │ │
│  │ EMAIL *                          │ │
│  │ [✉️] [_____________] [✓]         │ │
│  │                                  │ │
│  │ TELEFONE (Opcional)              │ │
│  │ [📱] [(84) 99999-9999]           │ │
│  │                                  │ │
│  │ SENHA *                          │ │
│  │ [🔒] [_____________] [👁️]        │ │
│  │ Força: ████████░░░░ Forte        │ │
│  │                                  │ │
│  │ CONFIRMAR SENHA *                │ │
│  │ [🔒] [_____________] [👁️]        │ │
│  │                                  │ │
│  │ ☑️ Aceito os Termos de Uso       │ │
│  │                                  │ │
│  │    [Criar Conta]                 │ │
│  │                                  │ │
│  │  Já tem conta? Faça login        │ │
│  └──────────────────────────────────┘ │
└────────────────────────────────────────┘
```

### Implementação

#### Estado e Validações

```typescript
interface SignupForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

interface Validation {
  name: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

// Validações
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePassword = (password: string) => {
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return password.length >= 8 && hasUpper && hasLower && hasNumber;
};

const getPasswordStrength = (password: string) => {
  if (password.length === 0) return { label: '', width: 0, color: colors.gray300 };
  if (password.length < 6) return { label: 'Fraca', width: 33, color: colors.red };
  if (password.length < 8 || !validatePassword(password)) {
    return { label: 'Média', width: 66, color: colors.yellow };
  }
  return { label: 'Forte', width: 100, color: colors.green };
};

// Máscara de telefone
const formatPhone = (text: string) => {
  const cleaned = text.replace(/\D/g, '').slice(0, 11);
  if (cleaned.length <= 2) return cleaned;
  if (cleaned.length <= 7) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  }
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
};
```

#### Integração Firebase

```javascript
const handleSignup = async () => {
  try {
    setLoading(true);
    
    // 1. Criar conta
    const userCredential = await auth().createUserWithEmailAndPassword(
      formData.email,
      formData.password
    );
    
    // 2. Atualizar perfil
    await userCredential.user.updateProfile({
      displayName: formData.name,
    });
    
    // 3. Criar documento no Firestore
    await firestore().collection('users').doc(userCredential.user.uid).set({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      points: 0,
      reportsCount: 0,
      ranking: 0,
      createdAt: firestore.FieldValue.serverTimestamp(),
      acceptedTermsAt: firestore.FieldValue.serverTimestamp(),
    });
    
    // 4. Navegar
    navigation.replace('PrivacyTerms');
    
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('Erro', 'Email já cadastrado. Faça login.');
    } else {
      Alert.alert('Erro', 'Não foi possível criar sua conta.');
    }
  } finally {
    setLoading(false);
  }
};
```

---

## 🏠 TELA 2: HomeScreen (Home Principal)

**Caminho:** `src/screens/home/HomeScreen.tsx`  
**Navegação:** PrivacyTerms → Home (primeira vez) ou Login → Home

### Layout da Tela

```
┌────────────────────────────────────────┐
│ Olá, João! 👋               [🔔 3]    │
│ Vamos tornar a cidade melhor?         │
│                                        │
│ ┌────┐  ┌────┐  ┌────┐               │
│ │ 12 │  │ 8  │  │#12 │               │
│ │Rep.│  │Res.│  │Rnk │               │
│ └────┘  └────┘  └────┘               │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ 💰 Seus pontos                   │ │
│ │                                  │ │
│ │      1,247                [🏆]  │ │
│ │                                  │ │
│ │ 📈 Subiu 3 posições no ranking  │ │
│ └──────────────────────────────────┘ │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ 📸 Novo Reporte    [AO VIVO]    │ │
│ │ Tire uma foto do problema agora  │ │
│ └──────────────────────────────────┘ │
│                                        │
│ ┌──────────┐  ┌──────────┐          │
│ │ 📝       │  │ 🏆       │          │
│ │Histórico │  │ Ranking  │          │
│ │12 reportes│ │ #12      │          │
│ └──────────┘  └──────────┘          │
│                                        │
│ Atividade Recente                     │
│ ● Fossa cheia - Em andamento          │
│ ● Buraco - Em andamento                │
│ ● Lixo - Resolvido                     │
│                                        │
│ ┌────────────────────────────────┐   │
│ │ [Home] [📝] [🏆] [👤]         │   │
│ └────────────────────────────────┘   │
└────────────────────────────────────────┘
```

### Componentes Principais

#### 1. Header com Notificações

```jsx
<View style={styles.header}>
  <View>
    <Text style={styles.greeting}>Olá, João! 👋</Text>
    <Text style={styles.subtitle}>Vamos tornar a cidade melhor?</Text>
  </View>
  
  <TouchableOpacity 
    style={styles.notificationButton}
    onPress={() => navigation.navigate('Notifications')}
  >
    <Bell size={24} color={colors.gray700} />
    <View style={styles.badge}>
      <Text style={styles.badgeText}>3</Text>
    </View>
  </TouchableOpacity>
</View>
```

#### 2. Cards de Estatísticas

```jsx
<View style={styles.statsGrid}>
  <StatCard icon="map-pin" value="12" label="Reportes" color={colors.blue} />
  <StatCard icon="check-circle" value="8" label="Resolvidos" color={colors.green} />
  <StatCard icon="trophy" value="#12" label="Ranking" color={colors.yellow} />
</View>
```

#### 3. Card de Pontos (Gradiente)

```jsx
<LinearGradient
  colors={gradients.primary}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  style={styles.pointsCard}
>
  <View style={styles.decorativeCircle} />
  
  <View style={styles.pointsContent}>
    <Text style={styles.pointsLabel}>💰 Seus pontos</Text>
    <Text style={styles.pointsValue}>1,247</Text>
    
    <View style={styles.trendBadge}>
      <TrendingUp size={16} color={colors.white} />
      <Text style={styles.trendText}>
        Você subiu 3 posições no ranking!
      </Text>
    </View>
  </View>
</LinearGradient>
```

#### 4. Botão Novo Reporte (Destaque)

```jsx
<TouchableOpacity
  style={styles.newReportButton}
  onPress={() => navigation.navigate('NewReport')}
>
  <View style={styles.liveBadge}>
    <Text style={styles.liveBadgeText}>📸 AO VIVO</Text>
  </View>
  
  <Camera size={56} color={colors.white} />
  
  <View style={styles.newReportText}>
    <Text style={styles.newReportTitle}>Novo Reporte</Text>
    <Text style={styles.newReportSubtitle}>
      Tire uma foto do problema agora
    </Text>
  </View>
</TouchableOpacity>
```

#### 5. Bottom Tab Navigation

```jsx
<View style={styles.bottomTabs}>
  <TabButton icon="home" label="Início" active onPress={() => {}} />
  <TabButton icon="history" label="Histórico" onPress={() => navigation.navigate('History')} />
  <TabButton icon="trophy" label="Ranking" onPress={() => navigation.navigate('Gamification')} />
  <TabButton icon="user" label="Perfil" onPress={() => navigation.navigate('Profile')} />
</View>
```

---

## 📸 TELA 3: NewReportScreen (Novo Reporte)

**Caminho:** `src/screens/report/NewReportScreen.tsx`  
**Navegação:** Home → NewReport

### Layout da Tela

```
┌────────────────────────────────────────┐
│ ← Novo Reporte                         │
│   Passo 1 de 4                         │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ ⚠️ Apenas Fotos ao Vivo          │ │
│ │ Por segurança, só aceitamos      │ │
│ │ fotos tiradas agora. Galeria     │ │
│ │ desabilitada.                    │ │
│ └──────────────────────────────────┘ │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │                                  │ │
│ │         [📸 AO VIVO]            │ │
│ │                                  │ │
│ │         Abrir Câmera             │ │
│ │                                  │ │
│ │   Tire uma foto do problema      │ │
│ │                                  │ │
│ └──────────────────────────────────┘ │
│                                        │
│ 📸 Dicas para uma boa foto            │
│ ✓ Tire de dia, com boa iluminação     │
│ ✓ Foque no problema principal          │
│ ✓ Mantenha a câmera estável            │
│ ✓ Certifique-se que o local está visível│
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ 💡 Sua localização GPS será      │ │
│ │ capturada automaticamente         │ │
│ └──────────────────────────────────┘ │
└────────────────────────────────────────┘
```

### Implementação

```jsx
const handleOpenCamera = async () => {
  // Solicitar permissão
  const { status } = await Camera.requestCameraPermissionsAsync();
  
  if (status !== 'granted') {
    Alert.alert(
      'Permissão Necessária',
      'Precisamos de acesso à câmera para tirar fotos dos problemas.'
    );
    return;
  }
  
  // Navegar para tela da câmera
  navigation.navigate('Camera');
};
```

---

## 📷 TELA 4: CameraScreen (Captura de Foto)

**Caminho:** `src/screens/report/CameraScreen.tsx`  
**Navegação:** NewReport → Camera

### Layout da Tela

```
┌────────────────────────────────────────┐
│ ← [AO VIVO ●]                    [⚡]  │
│                                        │
│                                        │
│      ┌─                      ─┐       │
│      │                        │       │
│      │                        │       │
│      │    [CAMERA FEED]       │       │
│      │                        │       │
│      │                        │       │
│      └─                      ─┘       │
│                                        │
│                                        │
│  [Cancelar]    [  ⭕  ]      [Flash]  │
└────────────────────────────────────────┘
```

### Implementação

```jsx
import { Camera } from 'expo-camera';

export function CameraScreen({ navigation }) {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.auto);
  
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
        exif: true,
      });
      
      // Mostrar preview
      navigation.navigate('Category', { 
        photoUri: photo.uri,
        photoData: photo 
      });
    }
  };
  
  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
        flashMode={flashMode}
      >
        {/* Overlay com moldura */}
        <View style={styles.overlay}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <X size={32} color="white" />
            </TouchableOpacity>
            
            <View style={styles.liveBadge}>
              <View style={styles.liveIndicator} />
              <Text style={styles.liveText}>AO VIVO</Text>
            </View>
            
            <TouchableOpacity onPress={() => setFlashMode(
              flashMode === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
            )}>
              <Zap size={32} color="white" />
            </TouchableOpacity>
          </View>
          
          {/* Moldura de foco */}
          <View style={styles.focusFrame}>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </View>
          
          {/* Controles inferiores */}
          <View style={styles.controls}>
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.captureButton}
              onPress={takePicture}
            >
              <View style={styles.captureButtonInner} />
            </TouchableOpacity>
            
            <View style={{ width: 80 }} />
          </View>
        </View>
      </Camera>
    </View>
  );
}
```

---

## 🏷️ TELA 5: CategoryScreen (Seleção de Categoria)

**Caminho:** `src/screens/report/CategoryScreen.tsx`  
**Navegação:** Camera → Category

### Layout da Tela

```
┌────────────────────────────────────────┐
│ ← Categoria do Problema                │
│   Passo 2 de 4                         │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │   [PREVIEW DA FOTO]              │ │
│ │           📸 Foto OK              │ │
│ └──────────────────────────────────┘ │
│                                        │
│ Qual é o problema?                     │
│ Selecione a categoria                  │
│                                        │
│ ┌────────┐  ┌────────┐               │
│ │ [🚚]   │  │ [💧]   │               │
│ │ Fossa  │  │Vazament│               │
│ │ cheia⭐│  │   o    │               │
│ └────────┘  └────────┘               │
│                                        │
│ ┌────────┐  ┌────────┐               │
│ │ [🚧]   │  │ [💡]   │               │
│ │ Buraco │  │Iluminaç│               │
│ │        │  │   ão   │               │
│ └────────┘  └────────┘               │
│                                        │
│ ┌────────┐  ┌────────┐               │
│ │ [🗑️]   │  │ [🌳]   │               │
│ │  Lixo  │  │ Árvore │               │
│ │        │  │        │               │
│ └────────┘  └────────┘               │
│                                        │
│ ┌────────┐  ┌────────┐               │
│ │ [⚠️]   │  │ [...]  │               │
│ │ Perigo │  │ Outro  │               │
│ └────────┘  └────────┘               │
└────────────────────────────────────────┘
```

### Categorias

```javascript
const categories = [
  {
    id: 'fossa',
    name: 'Fossa cheia',
    icon: '🚚',
    color: colors.amber,
    highlight: true, // Badge "Destaque"
  },
  {
    id: 'vazamento',
    name: 'Vazamento',
    icon: '💧',
    color: colors.blue,
  },
  {
    id: 'buraco',
    name: 'Buraco na via',
    icon: '🚧',
    color: '#f97316', // orange
  },
  {
    id: 'iluminacao',
    name: 'Iluminação',
    icon: '💡',
    color: colors.yellow,
  },
  {
    id: 'lixo',
    name: 'Lixo acumulado',
    icon: '🗑️',
    color: colors.green,
  },
  {
    id: 'arvore',
    name: 'Árvore caída',
    icon: '🌳',
    color: '#10b981', // emerald
  },
  {
    id: 'perigo',
    name: 'Perigo',
    icon: '⚠️',
    color: colors.red,
  },
  {
    id: 'outro',
    name: 'Outro',
    icon: '...',
    color: colors.gray500,
  },
];
```

### Implementação

```jsx
<FlatList
  data={categories}
  numColumns={2}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryCard,
        item.highlight && styles.categoryHighlight
      ]}
      onPress={() => navigation.navigate('Location', {
        photoUri: route.params.photoUri,
        category: item
      })}
    >
      {item.highlight && (
        <View style={styles.highlightBadge}>
          <Text style={styles.highlightText}>Destaque</Text>
        </View>
      )}
      
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Text style={styles.iconEmoji}>{item.icon}</Text>
      </View>
      
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  )}
  keyExtractor={item => item.id}
/>
```

---

## 📍 TELA 6: LocationScreen (Confirmação GPS)

**Caminho:** `src/screens/report/LocationScreen.tsx`  
**Navegação:** Category → Location

### Layout da Tela

```
┌────────────────────────────────────────┐
│ ← Localização                          │
│   Passo 3 de 4                         │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │                                  │ │
│ │         [MAPA]                   │ │
│ │                                  │ │
│ │           📍                     │ │
│ │         (pulsando)               │ │
│ │                                  │ │
│ │                          [🧭]    │ │
│ │                                  │ │
│ └──────────────────────────────────┘ │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ ✅ Localização Confirmada        │ │
│ │                                  │ │
│ │ Rua das Flores, 123 - Centro     │ │
│ │ Lat: -23.5505° Long: -46.6333°   │ │
│ │                                  │ │
│ │ 📍 Usamos sua localização GPS    │ │
│ │ automaticamente                   │ │
│ │                                  │ │
│ │      [Continuar]                 │ │
│ │                                  │ │
│ │  Ajustar localização manualmente  │ │
│ └──────────────────────────────────┘ │
└────────────────────────────────────────┘
```

### Implementação

```jsx
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export function LocationScreen({ navigation, route }) {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  
  useEffect(() => {
    getCurrentLocation();
  }, []);
  
  const getCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos de acesso à localização.');
      return;
    }
    
    const currentLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    
    setLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    });
    
    // Reverter para endereço
    const [addressData] = await Location.reverseGeocodeAsync({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    });
    
    setAddress(`${addressData.street}, ${addressData.streetNumber} - ${addressData.subregion}`);
  };
  
  return (
    <View style={{ flex: 1 }}>
      {location && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            ...location,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker coordinate={location}>
            <View style={styles.markerContainer}>
              <View style={styles.markerPulse} />
              <MapPin size={32} color={colors.primary} />
            </View>
          </Marker>
        </MapView>
      )}
      
      {/* Card inferior */}
      <View style={styles.bottomCard}>
        <View style={styles.confirmationHeader}>
          <CheckCircle size={48} color={colors.green} />
          <View style={{ flex: 1 }}>
            <Text style={styles.confirmationTitle}>
              Localização Confirmada
            </Text>
            <Text style={styles.addressText}>{address}</Text>
            <Text style={styles.coordsText}>
              Lat: {location?.latitude.toFixed(4)}° Long: {location?.longitude.toFixed(4)}°
            </Text>
          </View>
        </View>
        
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            📍 Usamos sua localização GPS automaticamente para maior precisão
          </Text>
        </View>
        
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Description', {
            ...route.params,
            location: { ...location, address }
          })}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.adjustButton}>
          <Text style={styles.adjustButtonText}>
            Ajustar localização manualmente
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
```

---

## 📝 TELA 7: DescriptionScreen (Descrição e Tags)

**Caminho:** `src/screens/report/DescriptionScreen.tsx`  
**Navegação:** Location → Description

### Layout da Tela

```
┌────────────────────────────────────────┐
│ ← Descrição                            │
│   Passo 4 de 4 (Opcional)             │
│                                        │
│ Adicione mais detalhes                 │
│ Quanto mais informações, melhor!       │
│                                        │
│ Descrição do problema                  │
│ ┌──────────────────────────────────┐ │
│ │ Ex: Buraco grande no meio da     │ │
│ │ pista, causando risco para motos │ │
│ │ e bicicletas...                  │ │
│ │                                  │ │
│ │                                  │ │
│ └──────────────────────────────────┘ │
│ 0/500 caracteres                      │
│                                        │
│ Tags (opcional)                        │
│ [#urgente] [#risco] [#pedestres]      │
│ [#acessibilidade] [#animal]           │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ Adicionar tag personalizada...   │ │
│ └──────────────────────────────────┘ │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ 💡 Dica: Você pode pular essa    │ │
│ │ etapa e enviar direto. Mas       │ │
│ │ detalhes ajudam muito!           │ │
│ └──────────────────────────────────┘ │
│                                        │
│      [Revisar e Enviar]                │
│                                        │
│      Pular e enviar direto             │
└────────────────────────────────────────┘
```

### Implementação

```jsx
export function DescriptionScreen({ navigation, route }) {
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [customTag, setCustomTag] = useState('');
  
  const suggestedTags = [
    'urgente',
    'risco',
    'pedestres',
    'acessibilidade',
    'animal'
  ];
  
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  const addCustomTag = () => {
    if (customTag.trim() && !selectedTags.includes(customTag.trim())) {
      setSelectedTags([...selectedTags, customTag.trim()]);
      setCustomTag('');
    }
  };
  
  const handleContinue = () => {
    navigation.navigate('Confirmation', {
      ...route.params,
      description,
      tags: selectedTags
    });
  };
  
  return (
    <ScrollView style={styles.container}>
      {/* TextArea */}
      <View style={styles.section}>
        <Text style={styles.label}>Descrição do problema</Text>
        <TextInput
          style={styles.textarea}
          placeholder="Ex: Buraco grande no meio da pista, está causando risco para motos e bicicletas..."
          multiline
          numberOfLines={6}
          maxLength={500}
          value={description}
          onChangeText={setDescription}
          textAlignVertical="top"
        />
        <Text style={styles.charCount}>
          {description.length}/500 caracteres
        </Text>
      </View>
      
      {/* Tags */}
      <View style={styles.section}>
        <Text style={styles.label}>Tags (opcional)</Text>
        
        <View style={styles.tagsContainer}>
          {suggestedTags.map(tag => (
            <TouchableOpacity
              key={tag}
              style={[
                styles.tagChip,
                selectedTags.includes(tag) && styles.tagChipSelected
              ]}
              onPress={() => toggleTag(tag)}
            >
              <Text style={styles.tagText}>#{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <TextInput
          style={styles.customTagInput}
          placeholder="Adicionar tag personalizada..."
          value={customTag}
          onChangeText={setCustomTag}
          onSubmitEditing={addCustomTag}
        />
      </View>
      
      {/* Dica */}
      <View style={styles.tipBox}>
        <Text style={styles.tipText}>
          💡 <Text style={styles.tipBold}>Dica:</Text> Você pode pular essa etapa e enviar direto. Mas detalhes ajudam muito!
        </Text>
      </View>
      
      {/* Botões */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={handleContinue}
      >
        <Text style={styles.primaryButtonText}>Revisar e Enviar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={handleContinue}
      >
        <Text style={styles.secondaryButtonText}>
          Pular e enviar direto
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
```

---

## ✅ TELA 8: ConfirmationScreen (Revisão e Envio)

**Caminho:** `src/screens/report/ConfirmationScreen.tsx`  
**Navegação:** Description → Confirmation

### Layout da Tela

```
┌────────────────────────────────────────┐
│ ← Confirmar Reporte                    │
│                                        │
│ Revise seus dados                      │
│ Certifique-se de que tudo está correto│
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ 🖼️ Foto capturada     ✓ Ao vivo │ │
│ │ ┌────────────────────────────┐   │ │
│ │ │  [PREVIEW DA FOTO]         │   │ │
│ │ │      📸 Capturada agora    │   │ │
│ │ └────────────────────────────┘   │ │
│ └──────────────────────────────────┘ │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ 🏷️ Categoria                     │ │
│ │ [🚧] Buraco na via               │ │
│ └──────────────────────────────────┘ │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ 📍 Localização                   │ │
│ │ Rua das Flores, 123              │ │
│ │ Centro - São Paulo, SP           │ │
│ └──────────────────────────────────┘ │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ 📝 Descrição                     │ │
│ │ Buraco grande no meio da pista,  │ │
│ │ está causando risco para motos   │ │
│ │ e bicicletas.                    │ │
│ │                                  │ │
│ │ [#urgente] [#risco]              │ │
│ └──────────────────────────────────┘ │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ ✅ Reporte completo!             │ │
│ │ Você ganhará +50 pontos ao enviar│ │
│ └──────────────────────────────────┘ │
│                                        │
│      [📤 Enviar Reporte]               │
│                                        │
│      Voltar e editar                   │
└────────────────────────────────────────┘
```

### Implementação

```jsx
export function ConfirmationScreen({ navigation, route }) {
  const [loading, setLoading] = useState(false);
  const { photoUri, category, location, description, tags } = route.params;
  
  const handleSubmit = async () => {
    try {
      setLoading(true);
      
      // 1. Upload da foto para Firebase Storage
      const photoUrl = await uploadPhoto(photoUri);
      
      // 2. Criar reporte no Firestore
      const reportData = {
        userId: auth().currentUser.uid,
        photoUrl,
        category: category.name,
        categoryId: category.id,
        location: {
          address: location.address,
          coordinates: new firestore.GeoPoint(
            location.latitude,
            location.longitude
          ),
        },
        description: description || null,
        tags: tags || [],
        status: 'pending',
        points: 0,
        createdAt: firestore.FieldValue.serverTimestamp(),
      };
      
      await firestore().collection('reports').add(reportData);
      
      // 3. Atualizar pontos do usuário
      const userRef = firestore().collection('users').doc(auth().currentUser.uid);
      await userRef.update({
        points: firestore.FieldValue.increment(50),
        reportsCount: firestore.FieldValue.increment(1),
      });
      
      // 4. Mostrar sucesso e voltar para Home
      Alert.alert(
        'Sucesso! 🎉',
        'Seu reporte foi enviado com sucesso. Você ganhou +50 pontos!',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
            }
          }
        ]
      );
      
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível enviar o reporte. Tente novamente.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <ScrollView style={styles.container}>
      {/* Card de Foto */}
      <View style={styles.reviewCard}>
        <View style={styles.cardHeader}>
          <Image size={16} color={colors.gray600} />
          <Text style={styles.cardTitle}>Foto capturada</Text>
          <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>✓ Ao vivo</Text>
          </View>
        </View>
        
        <Image
          source={{ uri: photoUri }}
          style={styles.photoPreview}
          resizeMode="cover"
        />
      </View>
      
      {/* Card de Categoria */}
      <View style={styles.reviewCard}>
        <View style={styles.cardHeader}>
          <Tag size={16} color={colors.gray600} />
          <Text style={styles.cardTitle}>Categoria</Text>
        </View>
        
        <View style={styles.categoryDisplay}>
          <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
            <Text style={styles.categoryEmoji}>{category.icon}</Text>
          </View>
          <Text style={styles.categoryName}>{category.name}</Text>
        </View>
      </View>
      
      {/* Card de Localização */}
      <View style={styles.reviewCard}>
        <View style={styles.cardHeader}>
          <MapPin size={16} color={colors.gray600} />
          <Text style={styles.cardTitle}>Localização</Text>
        </View>
        
        <Text style={styles.addressPrimary}>{location.address}</Text>
        <Text style={styles.addressSecondary}>
          Centro - Currais Novos, RN
        </Text>
      </View>
      
      {/* Card de Descrição */}
      {description && (
        <View style={styles.reviewCard}>
          <View style={styles.cardHeader}>
            <FileText size={16} color={colors.gray600} />
            <Text style={styles.cardTitle}>Descrição</Text>
          </View>
          
          <Text style={styles.descriptionText}>{description}</Text>
          
          {tags.length > 0 && (
            <View style={styles.tagsDisplay}>
              {tags.map(tag => (
                <View key={tag} style={styles.tagBadge}>
                  <Text style={styles.tagBadgeText}>#{tag}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}
      
      {/* Banner de Sucesso */}
      <View style={styles.successBanner}>
        <CheckCircle size={24} color={colors.green} />
        <View style={{ flex: 1 }}>
          <Text style={styles.successTitle}>Reporte completo!</Text>
          <Text style={styles.successText}>
            Você ganhará <Text style={styles.successBold}>+50 pontos</Text> ao enviar este reporte
          </Text>
        </View>
      </View>
      
      {/* Botões */}
      <TouchableOpacity
        style={[styles.submitButton, loading && styles.submitButtonDisabled]}
        onPress={handleSubmit}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <>
            <Send size={20} color={colors.white} />
            <Text style={styles.submitButtonText}>Enviar Reporte</Text>
          </>
        )}
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar e editar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Função auxiliar para upload de foto
async function uploadPhoto(uri) {
  const filename = `reports/${auth().currentUser.uid}/${Date.now()}.jpg`;
  const reference = storage().ref(filename);
  
  await reference.putFile(uri);
  const url = await reference.getDownloadURL();
  
  return url;
}
```

---

## 📚 TELA 9: HistoryScreen (Histórico de Reportes)

**Caminho:** `src/screens/history/HistoryScreen.tsx`  
**Navegação:** Home → History (Bottom Tab)

### Layout da Tela

```
┌────────────────────────────────────────┐
│ ← Meu Histórico              [🔍] [⋮] │
│                                        │
│ ┌──────────────────────────────────┐ │
│ │ 🔍 Buscar reportes...            │ │
│ └──────────────────────────────────┘ │
│                                        │
│ Total: 4 reportes   [Todos][Resolvidos]│
│                                        │
│     │                                  │
│     ●── ┌────────────────────────┐   │
│     │   │ [img] Buraco na via    │   │
│     │   │ 📍 Rua das Flores      │   │
│     │   │ 🕐 05/05 • 14:30       │   │
│     │   │          [Resolvido] +50│   │
│     │   └────────────────────────┘   │
│     │                                  │
│     ●── ┌────────────────────────┐   │
│     │   │ [img] Lixo acumulado   │   │
│     │   │ 📍 Av. Principal       │   │
│     │   │ 🕐 03/05 • 10:15       │   │
│     │   │      [Em andamento]    │   │
│     │   └────────────────────────┘   │
│     │                                  │
│     ●── ┌────────────────────────┐   │
│     │   │ [img] Fossa cheia      │   │
│     │   │ 📍 Rua Central         │   │
│     │   │ 🕐 01/05 • 16:45       │   │
│     │   │          [Pendente]    │   │
│     │   └────────────────────────┘   │
│     │                                  │
│     ●── ┌────────────────────────┐   │
│         │ [img] Iluminação       │   │
│         │ 📍 Praça da Matriz     │   │
│         │ 🕐 28/04 • 09:20       │   │
│         │          [Recusado]    │   │
│         └────────────────────────┘   │
└────────────────────────────────────────┘
```

### Implementação

```jsx
export function HistoryScreen({ navigation }) {
  const [reports, setReports] = useState([]);
  const [filter, setFilter] = useState('all'); // all, resolved
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    loadReports();
  }, []);
  
  const loadReports = async () => {
    const userId = auth().currentUser.uid;
    
    const snapshot = await firestore()
      .collection('reports')
      .where('userId', '==', userId)
      .orderBy('createdAt', 'desc')
      .get();
    
    const reportsData = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    setReports(reportsData);
  };
  
  const statusConfig = {
    resolved: {
      icon: CheckCircle,
      color: colors.green,
      bgColor: colors.greenLight,
      label: 'Resolvido'
    },
    in_progress: {
      icon: Clock,
      color: colors.blue,
      bgColor: colors.blueLight,
      label: 'Em andamento'
    },
    pending: {
      icon: AlertCircle,
      color: colors.yellow,
      bgColor: colors.yellowLight,
      label: 'Pendente'
    },
    rejected: {
      icon: XCircle,
      color: colors.red,
      bgColor: colors.redLight,
      label: 'Recusado'
    }
  };
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color={colors.gray700} />
        </TouchableOpacity>
        
        <Text style={styles.title}>Meu Histórico</Text>
        
        <View style={styles.headerActions}>
          <TouchableOpacity>
            <Search size={20} color={colors.gray600} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Filter size={20} color={colors.gray600} />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Busca */}
      <View style={styles.searchContainer}>
        <Search size={20} color={colors.gray400} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar reportes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      {/* Filtros */}
      <View style={styles.filtersContainer}>
        <Text style={styles.totalText}>
          Total: <Text style={styles.totalBold}>{reports.length} reportes</Text>
        </Text>
        
        <View style={styles.filterButtons}>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]}
            onPress={() => setFilter('all')}
          >
            <Text style={[styles.filterText, filter === 'all' && styles.filterTextActive]}>
              Todos
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.filterButton, filter === 'resolved' && styles.filterButtonActive]}
            onPress={() => setFilter('resolved')}
          >
            <Text style={[styles.filterText, filter === 'resolved' && styles.filterTextActive]}>
              Resolvidos
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Timeline */}
      <ScrollView style={styles.timeline}>
        {/* Linha vertical */}
        <View style={styles.timelineLine} />
        
        {reports.map((report, index) => {
          const status = statusConfig[report.status];
          const StatusIcon = status.icon;
          
          return (
            <View key={report.id} style={styles.timelineItem}>
              {/* Dot */}
              <View style={[styles.timelineDot, { backgroundColor: status.bgColor }]}>
                <StatusIcon size={12} color={status.color} />
              </View>
              
              {/* Card */}
              <TouchableOpacity
                style={styles.reportCard}
                onPress={() => navigation.navigate('ReportDetail', { reportId: report.id })}
                activeOpacity={0.7}
              >
                <View style={styles.cardContent}>
                  {/* Imagem */}
                  <Image
                    source={{ uri: report.photoUrl }}
                    style={styles.reportImage}
                  />
                  
                  {/* Info */}
                  <View style={styles.reportInfo}>
                    <View style={styles.reportHeader}>
                      <Text style={styles.reportTitle}>{report.category}</Text>
                      
                      {report.status === 'resolved' && (
                        <View style={styles.pointsBadge}>
                          <Text style={styles.pointsText}>+{report.points} pts</Text>
                        </View>
                      )}
                    </View>
                    
                    <View style={styles.locationRow}>
                      <MapPin size={12} color={colors.gray400} />
                      <Text style={styles.locationText} numberOfLines={1}>
                        {report.location.address}
                      </Text>
                    </View>
                    
                    <View style={styles.reportFooter}>
                      <View style={styles.dateRow}>
                        <Clock size={12} color={colors.gray500} />
                        <Text style={styles.dateText}>
                          {formatDate(report.createdAt)} • {formatTime(report.createdAt)}
                        </Text>
                      </View>
                      
                      <View style={[styles.statusBadge, { backgroundColor: status.bgColor }]}>
                        <StatusIcon size={14} color={status.color} />
                        <Text style={[styles.statusText, { color: status.color }]}>
                          {status.label}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
```

---

## 👤 TELA 10: ProfileScreen (Perfil e Configurações)

**Caminho:** `src/screens/profile/ProfileScreen.tsx`  
**Navegação:** Home → Profile (Bottom Tab)

### Layout da Tela

```
┌────────────────────────────────────────┐
│ ← Meu Perfil                           │
│                                        │
│         👨‍💼                             │
│      João Oliveira                     │
│   joao.oliveira@email.com              │
│                                        │
│   12          1,247         #12        │
│ Reportes     Pontos       Ranking      │
│                                        │
├────────────────────────────────────────┤
│ Informações Pessoais                   │
├────────────────────────────────────────┤
│ 👤 Nome completo                    > │
│    João Oliveira                       │
├────────────────────────────────────────┤
│ ✉️ Email                             > │
│    joao.oliveira@email.com             │
├────────────────────────────────────────┤
│ 📍 Localização                       > │
│    São Paulo, SP                       │
├────────────────────────────────────────┤
│                                        │
├────────────────────────────────────────┤
│ Conquistas                             │
├────────────────────────────────────────┤
│ 🏆 Medalhas e Ranking               > │
│    4 medalhas conquistadas             │
├────────────────────────────────────────┤
│ 📊 Estatísticas                     > │
│    Ver métricas detalhadas             │
├────────────────────────────────────────┤
│                                        │
├────────────────────────────────────────┤
│ Configurações                          │
├────────────────────────────────────────┤
│ 🔔 Notificações                     > │
│    Gerenciar alertas                   │
├────────────────────────────────────────┤
│ 🛡️ Privacidade e LGPD               > │
│    Gerenciar seus dados                │
├────────────────────────────────────────┤
│ ❓ Ajuda e Suporte                  > │
│    Central de ajuda                    │
├────────────────────────────────────────┤
│                                        │
│      [🚪 Sair da Conta]                │
│                                        │
│   ReportaAi v1.0.0 • Prefeitura        │
└────────────────────────────────────────┘
```

### Implementação

```jsx
export function ProfileScreen({ navigation }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    loadUserData();
  }, []);
  
  const loadUserData = async () => {
    const userId = auth().currentUser.uid;
    const doc = await firestore().collection('users').doc(userId).get();
    setUser({ id: userId, ...doc.data() });
  };
  
  const handleLogout = () => {
    Alert.alert(
      'Sair da Conta',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: async () => {
            await auth().signOut();
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }
        }
      ]
    );
  };
  
  return (
    <ScrollView style={styles.container}>
      {/* Header com Gradiente */}
      <LinearGradient
        colors={[colors.primary, colors.purple]}
        style={styles.header}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} color={colors.white} />
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Meu Perfil</Text>
        
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarEmoji}>👨‍💼</Text>
        </View>
        
        <Text style={styles.userName}>{user?.name || 'Carregando...'}</Text>
        <Text style={styles.userEmail}>{user?.email}</Text>
        
        {/* Estatísticas */}
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user?.reportsCount || 0}</Text>
            <Text style={styles.statLabel}>Reportes</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{user?.points || 0}</Text>
            <Text style={styles.statLabel}>Pontos</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>#{user?.ranking || 0}</Text>
            <Text style={styles.statLabel}>Ranking</Text>
          </View>
        </View>
      </LinearGradient>
      
      {/* Seção: Informações Pessoais */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>
        
        <MenuItem
          icon={User}
          iconColor={colors.gray600}
          title="Nome completo"
          subtitle={user?.name}
          onPress={() => {}}
        />
        
        <MenuItem
          icon={Mail}
          iconColor={colors.gray600}
          title="Email"
          subtitle={user?.email}
          onPress={() => {}}
        />
        
        <MenuItem
          icon={MapPin}
          iconColor={colors.gray600}
          title="Localização"
          subtitle="São Paulo, SP"
          onPress={() => {}}
        />
      </View>
      
      {/* Seção: Conquistas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conquistas</Text>
        
        <MenuItem
          icon={Award}
          iconColor={colors.yellow}
          title="Medalhas e Ranking"
          subtitle="4 medalhas conquistadas"
          onPress={() => navigation.navigate('Gamification')}
        />
        
        <MenuItem
          icon={BarChart}
          iconColor={colors.blue}
          title="Estatísticas"
          subtitle="Ver métricas detalhadas"
          onPress={() => {}}
        />
      </View>
      
      {/* Seção: Configurações */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configurações</Text>
        
        <MenuItem
          icon={Bell}
          iconColor={colors.gray600}
          title="Notificações"
          subtitle="Gerenciar alertas"
          onPress={() => {}}
        />
        
        <MenuItem
          icon={Shield}
          iconColor={colors.gray600}
          title="Privacidade e LGPD"
          subtitle="Gerenciar seus dados"
          onPress={() => {}}
        />
        
        <MenuItem
          icon={HelpCircle}
          iconColor={colors.gray600}
          title="Ajuda e Suporte"
          subtitle="Central de ajuda"
          onPress={() => {}}
        />
      </View>
      
      {/* Botão de Logout */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <LogOut size={20} color={colors.red} />
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
      
      {/* Rodapé */}
      <Text style={styles.footer}>
        ReportaAi v1.0.0 • Prefeitura Municipal
      </Text>
    </ScrollView>
  );
}

// Componente MenuItem
function MenuItem({ icon: Icon, iconColor, title, subtitle, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Icon size={20} color={iconColor} />
      
      <View style={styles.menuItemContent}>
        <Text style={styles.menuItemTitle}>{title}</Text>
        {subtitle && (
          <Text style={styles.menuItemSubtitle}>{subtitle}</Text>
        )}
      </View>
      
      <ChevronRight size={20} color={colors.gray400} />
    </TouchableOpacity>
  );
}
```

---

## 🧭 Navegação Completa

### AuthStack (Não logado)

```javascript
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="PrivacyTerms" component={PrivacyTermsScreen} />
    </Stack.Navigator>
  );
}
```

### MainStack (Logado)

```javascript
export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={BottomTabs} />
      
      {/* Report Flow */}
      <Stack.Screen name="NewReport" component={NewReportScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Description" component={DescriptionScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      
      {/* Other screens */}
      <Stack.Screen name="ReportDetail" component={ReportDetailScreen} />
      <Stack.Screen name="Gamification" component={GamificationScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}
```

### Bottom Tabs

```javascript
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'History') iconName = 'history';
          else if (route.name === 'Ranking') iconName = 'trophy';
          else if (route.name === 'Profile') iconName = 'user';
          
          const Icon = iconMap[iconName];
          return <Icon size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray400,
        tabBarLabelStyle: { fontSize: 12 },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{ title: 'Histórico' }} />
      <Tab.Screen name="Ranking" component={GamificationScreen} options={{ title: 'Ranking' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
}
```

---

## 📦 Bibliotecas Necessárias

```bash
# Core
npm install react-native
npm install expo

# Navegação
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context

# Câmera e Localização
npm install expo-camera
npm install expo-location
npm install react-native-maps

# UI
npm install expo-linear-gradient
npm install lucide-react-native

# Firebase
npm install @react-native-firebase/app
npm install @react-native-firebase/auth
npm install @react-native-firebase/firestore
npm install @react-native-firebase/storage

# Utilitários
npm install react-native-gesture-handler
npm install react-native-reanimated
```

---

## 🔥 Configuração Firebase

### 1. Instalar Firebase

```bash
npm install @react-native-firebase/app
```

### 2. Configurar (ios/android)

Seguir documentação oficial do React Native Firebase.

### 3. Inicializar

```javascript
// src/services/firebase.ts
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export { auth, firestore, storage };
```

---

## ✅ Checklist de Implementação

### Telas
- [x] SignupScreen
- [x] HomeScreen
- [x] NewReportScreen
- [x] CameraScreen
- [x] CategoryScreen
- [x] LocationScreen
- [x] DescriptionScreen
- [x] ConfirmationScreen
- [x] HistoryScreen
- [x] ProfileScreen

### Funcionalidades
- [x] Validação de formulários em tempo real
- [x] Máscara de telefone brasileiro
- [x] Indicador de força de senha
- [x] Captura de foto via câmera nativa
- [x] Seleção de categoria com destaque
- [x] GPS automático com mapa
- [x] Tags customizáveis
- [x] Upload de foto para Firebase Storage
- [x] Criação de reporte no Firestore
- [x] Sistema de pontos
- [x] Timeline visual de histórico
- [x] Bottom Tab Navigation
- [x] Logout com confirmação

### Integrações
- [x] Firebase Auth (Email/Password)
- [x] Firebase Firestore
- [x] Firebase Storage
- [x] Expo Camera
- [x] Expo Location
- [x] React Native Maps

---

## 🎯 Próximos Passos (Opcional)

1. **PrivacyTermsScreen** - Termo LGPD obrigatório
2. **ReportDetailScreen** - Detalhe de um reporte com timeline
3. **GamificationScreen** - Ranking e medalhas
4. **NotificationsScreen** - Notificações do usuário
5. **Push Notifications** - Firebase Cloud Messaging
6. **Modo Offline** - AsyncStorage + sincronização

---

**Este prompt completo contém TODAS as especificações, código e configurações necessárias para implementar as 10 telas do ReportaAi em React Native. Siga o design system, integrações Firebase e fluxo de navegação especificados acima.** 🚀
