import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { api } from '@/server/api'
import { useState } from 'react'
import { isAxiosError } from 'axios'

export default function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSigIn() {
        try {
            const req = await api.post('/user-post', {
                email, 
                password
            } )

            Alert.alert("O App diz:", 'Deu certo ✅ ' + req.data.name)
            
        } catch (error) {
            if(isAxiosError(error)){
                Alert.alert("A API diz: ", error.response?.data)
            }
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='email'
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='senha'
                secureTextEntry
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={styles.button}
            >
                <Text
                    style={styles.buttonText}
                    onPress={handleSigIn}>
                    Enviar
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        gap: 16,
    },
    input: {
        height: 50,
        width: "100%",
        backgroundColor: "#e3e3e3",
        borderRadius: 16,
        padding: 8,
        paddingLeft: 16

    },
    button: {
        height: 50,
        width: "100%",
        backgroundColor: "#cecece",
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold"

    }
})