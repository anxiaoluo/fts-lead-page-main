/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_TARGET_DATE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
