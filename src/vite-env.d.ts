/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_GOOGLE_SEARCH_API_KEY?: string;
  VITE_GOOGLE_SEARCH_ENGINE_ID?: string;
  VITE_GEMINI_API_KEY?: string;
  DUCKDUCKGO_SEARCH_API_KEY?: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
