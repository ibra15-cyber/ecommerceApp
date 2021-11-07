import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Login(props) {
  const navigation = props.navigation;
  return (
    <View
      style={{
        backgroundColor: "#e7aeb4",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <ImageBackground source={{
          uri: "https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }} resizeMode='cover' style={{flex: 1, justifyContent:'center', width: "100vw",
        height: "100vh"}}/>
      <View style={{flex: 1}}> 
      <View>
      <Text style={{fontFamily:"Urbanist", fontSize: 30, marginBottom: 10, paddingLeft: 90}}>SIGN IN</Text>
        <TextInput
          style={{
            borderWidth: 0.7,
            paddingHorizontal: 60,
            flex: 1,
            minWidth: "40%",
            marginBottom: 10,
            padding: 15,
          }}
          placeholder="Enter your username"
        />
      {/* </View> */}
      {/* <View style={{ marginTop: 10,}}> */}
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            borderWidth: 0.7,
            paddingHorizontal: 60,
            flex: 1,
            minWidth: "40%",
            marginBottom: 10,
            padding: 15,
          }}
          placeholder="Enter your password"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Products");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#008080",
        }}
      >
        <Entypo name="login" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white", alignItems: 'center' }}>LOGIN</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}