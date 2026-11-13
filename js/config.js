// Configuração pública do site Seg-Up.
// A chave "anon" do Supabase é pública por natureza: a proteção dos dados é feita
// pelas políticas RLS da tabela "leads" (somente inserção, sem leitura pública).
// Deixe em branco para o formulário funcionar só pelo WhatsApp.
window.SEGUP_CONFIG = {
  supabaseUrl: "",
  supabaseAnonKey: ""
};
