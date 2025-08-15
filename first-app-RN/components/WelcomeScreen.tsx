import { View , Text} from "react-native";

export default function WelcomeScreen(){
    return (
        <View>
            <View>
                <Text
                style={{
                    fontSize:25, 

                }}
                >
                    Welcome to Little Lemon
                </Text>
            </View>
            <View>
                <Text>
                    Little Lemon is a charming neighborhood bistro that
                    serves simple food and classic cocktails in a lively 
                    but casual environment. We would love to hear more about 
                    your experience with us!
                </Text>
            </View>
        </View>
        
    )
}