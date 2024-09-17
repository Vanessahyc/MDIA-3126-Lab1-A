import React from "react";
import { Text, View } from "react-native";
import PostContent from "@/components/atoms/postContent";
import PostName from "@/components/atoms/postName";
import PostImage from "../atoms/postImage";

export default function Post( {postNameText,postContentText,addPostImage} ) {
  return (
    <View 
        style={{
            width: 500,
            height: 700,
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column",
            margin: 64,
            backgroundColor: "#FFC0CB", 
            borderRadius: 16,
        }}
    >
        <div>
            <PostImage addPostImage={addPostImage} />
        </div>
        <div
            style={{
                padding: 24,
            }}
        >
            <PostName postNameText={postNameText} />
            <PostContent postContentText={postContentText}/>
        </div>
    </View>
  );
}