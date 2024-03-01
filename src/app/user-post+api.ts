import { ExpoRequest, ExpoResponse } from 'expo-router/server'

export async function POST(req: ExpoRequest): Promise<ExpoResponse> {
    const { email, password } = await req.json()

    if (email === "pedro@email" && password === "1234") {
        return ExpoResponse.json({
            email,
            name: 'Pedro Silva'
        })
    }

    return new ExpoResponse('ihhh não deu', {
        status: 404
    })
}