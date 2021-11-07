import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Button, ImageBackground } from "react-native";
import { MaterialCommunityIcons, Entypo} from "@expo/vector-icons";

// import UserForm from '../components/UserForm';

// import { useMutation, gql} from '@apollo/client';

// import * as SecureStore from 'expo-secure-store';

// import Loading from '../components/Loading';


// const SignUp = (props) => {
//     return(
//         <UserForm />
//     );
// }
// SignUp.navigationOptions = { 
//     title: 'Register'
// }
// export default SignUp;


// const SIGNUP_USER = gql`
//     mutation signUp($email: String!, $username: String!, $password: String!){
//             signUp(email: $email, username: $username, password: $password)
// }`;

// const SignUp = (props) => {
//     const [SignUp, { loading, error}] = useMutation(SIGNUP_USER, {});
//     return(
//         <UserForm />
//     );
// };


// const SignUp = (props) => {
//     const storeToken = (token) => {
//         SecureStore.setItemAsync("token, token").then(props.navigation.navigation('App'));
//     }
//     const [signUp, { loading, error}] = useMutation(SIGNUP_USER, {onCompleted: data => {
//         storeToken(data.signUp);
//     }});
//     return(
//         <UserForm />
//     );
// };


// if(loading) return <Loading />;
//     return(
//         <React.Fragment>
//             {error && <Text>Error singin in!</Text>}
//             <UserForm action={signUp} formType="signUp" navigation={props.navigation}/>
//         </React.Fragment>
//     )



export default function Register(props) {
  const navigation = props.navigation;
  return (
    <View 
      style={{backgroundColor: "#e0deda",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center", 
    }}>
      <ImageBackground source={{
          uri: "https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }} resizeMode='cover' style={{flex: 1, justifyContent:'center', width: "100vw",
        height: "100vh"}}/> 
      {/* <Image source={require('../assets/bb.png')} 
            style={{width: 200, height: 200, marginBottom: 10, 
              // transform: [{rotate: "-15deg" }]
            }}
            /> */}
      <View>
        <Text style={{fontFamily:"Urbanist", fontSize: 30, marginBottom: 10, paddingLeft: 50}}>CREATE AN ACCOUNT</Text>
        z<TextInput 
          placeholder="name"
          style={{backgroundColor: '', padding: 15, paddingHorizontal: 60, borderWidth: 0.7, marginBottom: 20}}
        />
        <TextInput 
          placeholder="last name"
          style={{backgroundColor: '', padding: 15, paddingHorizontal: 60, borderWidth: 0.7,marginBottom: 20 }}
        />
         
        <TextInput 
          placeholder="username"
          style={{backgroundColor: '', padding: 15, paddingHorizontal: 60, borderWidth: 0.7,marginBottom: 20 }}
        />

        <TextInput 
          placeholder="email or mobile number"
          style={{backgroundColor: '', padding: 15, paddingHorizontal: 60, borderWidth: 0.7,marginBottom: 20 }}
        />

        <TextInput 
            secureTextEntry='true'
            placeholder="password"
        style={{backgroundColor: '', padding: 15, paddingHorizontal: 60, borderWidth: 0.7, marginBottom: 20 }}
        />

        <TextInput 
            secureTextEntry='true'
            placeholder="confirm password"
            
        style={{backgroundColor: '', padding: 15, paddingHorizontal: 60, borderWidth: 0.7, marginBottom: 10 }}/>
      <Text>
            By creating an account, I consent to the processing of my personal</Text>
            <Text>data in accordance with the <b>PRIVACY POLICY</b>
      </Text>
      </View>
      

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#c19fa4",
        }}
      >
        <MaterialCommunityIcons name="account" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>SIGNUP</Text>
      </TouchableOpacity> 

      <View style={{marginTop: 10, marginBottom: 10}}>
        <Text style={{color: "#d8a483", fontWeight: "bold"}}>Or if you already  have an account</Text>
      </View>
      
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 30,
          flexDirection: "row",
          backgroundColor: "#008080",
        }}
      > 
        <Entypo name="login" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white", justifyContent: "center" }}>LOGIN</Text>
      </TouchableOpacity>




    </View>
  );
};