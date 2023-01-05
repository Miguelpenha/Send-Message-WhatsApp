declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: number
        API_URL: string
        ACCESS_TOKEN: string
        NAME_TEMPLATE_MESSAGE: string
        PHONE_NUMBER_IDENTIFICATION: string
      }
    }
}

export {}