declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: number
        API_URL: string
        VERIFY_TOKEN: string
        ACCESS_TOKEN: string
        TOKEN_ACCESS_API: string
        NAME_TEMPLATE_MESSAGE: string
        PHONE_NUMBER_IDENTIFICATION: string
      }
    }
}

export {}