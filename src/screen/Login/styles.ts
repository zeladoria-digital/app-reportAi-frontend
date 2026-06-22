import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerPrincipal: {
    flexGrow: 1,
    backgroundColor: '#F8FAFC',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  iconeContainer: {
    backgroundColor: '#3b82f6',
    padding: 24,
    borderRadius: 20,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
  },
  cardBranco: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    padding: 24,
    borderRadius: 16,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#475569',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  inputError: {
    borderColor: '#EF4444',
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#1E293B',
  },
  erroText: {
    color: '#EF4444',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  erroGeral: {
    backgroundColor: '#FEE2E2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  erroGeralText: {
    color: '#EF4444',
    fontSize: 14,
    textAlign: 'center',
  },
  esqueciSenhaContainer: {
    alignItems: 'flex-end',
    marginBottom: 24,
    marginTop: -8,
  },
  esqueciSenhaText: {
    color: '#3b82f6',
    fontSize: 14,
    fontWeight: '600',
  },
  botaoPrimario: {
    backgroundColor: '#3b82f6',
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  botaoDesabilitado: {
    backgroundColor: '#93C5FD',
  },
  textoBotaoPrimario: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cadastroContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  cadastroText: {
    color: '#64748B',
    fontSize: 14,
  },
  cadastroLink: {
    color: '#3b82f6',
    fontSize: 14,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start', // ← força à esquerda
    marginBottom: 16,
    marginLeft: -8, // ← ajuste fino se necessário
    gap: 4,
  },
  textoBotaoVoltar: {
    color: '#3b82f6',
    fontSize: 14,
    fontWeight: '600',
  },
  
})