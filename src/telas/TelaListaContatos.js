import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function TelaListaContatos({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>
                    Lista de Contatos
                </Text>
                <TouchableOpacity
                    style={styles.botaoMais}
                    onPress={() => navigation.navigate('TelaCadastroContato')}
                >
                    <Ionicons
                        name="add-circle-outline"
                        size={35}
                        color="#fff"
                    />
                </TouchableOpacity>
            </View>

            {/* Contato 1 */}
            <View style={styles.contato}>
                <Ionicons
                    name="person-circle-outline"
                    size={50}
                    color="#007AFF"
                />
                <View style={styles.informacoes}>
                    <Text style={styles.nome}>Marcos Andrade</Text>
                    <Text style={styles.nome}>81 988553424</Text>
                </View>
            </View>
            <View style={styles.linha} />

            {/* Contato 2 */}
            <View style={styles.contato}>
                <Ionicons
                    name="person-circle-outline"
                    size={50}
                    color="#007AFF"
                />
                <View style={styles.informacoes}>
                    <Text style={styles.nome}>Patrícia Tavares</Text>
                    <Text style={styles.nome}>81 998765332</Text>
                </View>
            </View>
            <View style={styles.linha} />

            {/* Contato 3 */}
            <View style={styles.contato}>
                <Ionicons
                    name="person-circle-outline"
                    size={50}
                    color="#007AFF"
                />
                <View style={styles.informacoes}>
                    <Text style={styles.nome}>Rodrigo Antunes</Text>
                    <Text style={styles.nome}>81 987765525</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    cabecalho: {
        height: 60,
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#addd',
        position: 'relative',
    },

    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    botaoMais: {
        position: 'absolute',
        right: 15,
    },

    contato: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 18,
    },

    informacoes: {
        marginLeft: 15,
    },

    nome: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    telefone: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },

    linha: {
        height: 1,
        backgroundColor: '#ddd',
        marginHorizontal: 20,
    },
})
