declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: number
        API_URL: string
        ACCESS_TOKEN: string
        TOKEN_ACCESS_API: string
        PHONE_NUMBER_IDENTIFICATION: string
      }
    }
}

export {}