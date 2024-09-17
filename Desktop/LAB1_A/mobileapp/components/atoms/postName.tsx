import { Text, View } from "react-native";

export default function PostName( {postNameText}) { 
    return(
        <View>
            <Text
                style={{
                    color:"#000",
                    fontSize: 36,
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                {postNameText}    
            </Text>
        </View>
    ) 
}