import { Text, View } from "react-native";
import Post from "@/components/molecules/Post";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Post
        postNameText="BLACKPINK"
        postContentText="BLACKPINK is finally gracing the stages and our ears, with a highly anticipated comeback, and their makeup looks that have always been quite the hot topic. Fortunately, you don't need a glam team to recreate some of their striking eye makeup especially now that masks will be drawing all attention to our eyes."
        addPostImage="https://cdn.dribbble.com/users/1217289/screenshots/15069428/media/706516fba6aafc27a8a2d7999a5d192e.jpg?resize=400x0"
      />
    </View>
  );
}
