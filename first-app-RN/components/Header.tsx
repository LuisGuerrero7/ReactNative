import { View, Text } from 'react-native';

export default function Header() {
    return (
        <View 
            style={{
                flex: 0.15,
                backgroundColor: '#F4CE14',
                justifyContent: 'center',
                alignItems: 'center'
                }}>
            <Text 
                style={{
                    padding: 10,
                    fontSize: 30
                }}
                numberOfLines={3}>
                Welcome to 
            
            </Text>

            <Text style={{
                fontWeight:'bold',
                fontSize: 30
            }}>
                Little Lemon
            </Text>

        </View>
    )
}