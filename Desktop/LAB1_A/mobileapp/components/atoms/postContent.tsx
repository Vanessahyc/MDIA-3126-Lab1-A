import { Text, View } from "react-native";

export default function PostContent( {postContentText}) { 
    return(
        <View>
            <Text
                style={{
                    color:"#1d1d1d",
                    paddingTop: 16,
                    fontSize: 18,
                    textAlign: "center",
                }}
            >
                {postContentText}    
            </Text>
        </View>
    ) 
}