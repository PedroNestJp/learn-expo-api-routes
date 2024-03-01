import { ExpoResponse } from 'expo-router/server'

export async function GET(): Promise<ExpoResponse> {
    return ExpoResponse.json({
        message: "Testando",
    })
}