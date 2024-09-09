import { StyleSheet, Text, View } from 'react-native';

export default function SettingScreen({ route }) {
    const { user } = route.params;
    return (
        <View style={styles.container}>
            <Text>Manage your privacy settings {user}.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
