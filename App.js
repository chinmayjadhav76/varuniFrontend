import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, Image, ScrollView} from 'react-native';
import { useWindowDimensions } from 'react-native';
import { NativeModules, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import DocumentScreen from './Screens/DocumentScreen';
import { COLORS } from './constants/theme';
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomTabBar from './CustomeTabBar';
import CameraScreen from './Screens/DiseaseDetection';

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const {StatusBarManager} = NativeModules;
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    tabBarShowLabel : false,
    headerShown : false,
    tabBarActiveBackgroundColor : "#7BD350",
    tabBarActiveTintColor : "#fff",
    tabBarHideOnKeyboard : true,
    tabBarStyle : {
      position : "absolute",
      bottom : windowHeight * 0.015,
      elevation : 1,
      right : windowWidth * 0.15,
      left : windowWidth*0.15,
      height : 50,
      borderRadius : windowWidth * 0.05
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop : StatusBarManager.HEIGHT,
      paddingVertical : windowHeight * 0.03,
    },
    sectionHeader : {
      fontSize : 16,
      fontWeight: "500",
    },
    sectionTitleSection : {
      width : windowWidth * 0.9,
      padding : 8
    }
  });
  //#E1F8DC
  // {return(
  //   <View style = {{
  //     height : 50,
  //     width : 100,
  //     borderRadius : 15,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   }}>
  //     <Ionicons name = "home"  size = {20} color = {color}/>
  //   </View>
  // )}
  return (
    <SafeAreaView style={{flex : 1, backgroundColor : "#FFF"}}>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} >
          <Tab.Screen name = "Home" component={HomeScreen} options={{headerShown: false}}/>
          <Tab.Screen name = "Documents" component={DocumentScreen} options={{headerShown: false}}/>
          <Tab.Screen name = "Settings" component={SettingsScreen} options={{headerShown: false}}/>
          <Tab.Screen name = "Camera" component={CameraScreen} options={{headerShown: false}}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

