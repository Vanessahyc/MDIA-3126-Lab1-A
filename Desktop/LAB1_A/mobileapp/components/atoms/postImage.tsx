import { Image, View } from "react-native";

export default function PostImage( {addPostImage} ) {
    return(
        <View>
            <Image 
                source={{ uri: addPostImage}} 
                style={{
                    width: 400,
                    height: 400, 
                    borderRadius: 14,
                }}
            />        
        </View>
    ) 
}