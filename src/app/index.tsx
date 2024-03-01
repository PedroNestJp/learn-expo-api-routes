import { View, Text, StyleSheet } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <Text> Hello Mundão </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})