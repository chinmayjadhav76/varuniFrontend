import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, Image, ScrollView} from 'react-native';
import { useWindowDimensions } from 'react-native';
import { NativeModules, Platform } from 'react-native';
import WeatherWidget from '../Components/Weather/WeatherWidget';
import Greeting from "../Components/Greeting";
import SprayCycleCard from '../Components/Cards/SprayCycleCard';
import { COLORS } from '../constants/theme';
import UploadDocuments from '../Components/Cards/UploadDocuments';

export default function HomeScreen() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const {StatusBarManager} = NativeModules;
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
      fontSize : 20,
      fontWeight: "500",
    },
    sectionTitleSection : {
      width : windowWidth * 0.9,
      padding : 8,
      marginVertical : 16,
    },
    banner : {
      flexDirection : 'row',
      maxWidth : windowWidth * 0.9,
      justifyContent : 'space-between',
      alignItems : "center",
      marginVertical : 6,
      gap : 6
    }
  });
  return (
      <SafeAreaView style = {styles.container}>
        <ScrollView style = {{paddingHorizontal : 8}}>
        <StatusBar style="auto" />
        <Greeting name = "Chinmay"/>
        <View style = {styles.sectionTitleSection}><Text style = {styles.sectionHeader}>Current Weather</Text></View>
        <View><WeatherWidget></WeatherWidget></View>
        <View style = {styles.sectionTitleSection}><Text style = {styles.sectionHeader}>Today's Spray Cycle</Text></View>
        <View>
        <SprayCycleCard type = {'fertiliser'} spray = {{name : 'Lorem Ipsum', totalSprays : "2", quantityLitre : "1", quantityAcre : "3"}} count = {1}/>
        <SprayCycleCard type = {'fertiliser'} spray = {{name : 'Lorem Ipsum', totalSprays : "2", quantityLitre : "1", quantityAcre : "3"}} count = {2}/>
        <SprayCycleCard type = {'pesticide'} spray = {{name : 'Lorem Ipsum', totalSprays : "2", quantityLitre : "1", quantityAcre : "3"}} count = {3}/>
        <SprayCycleCard type = {'pesticide'} spray = {{name : 'Lorem Ipsum', totalSprays : "2", quantityLitre : "1", quantityAcre : "3"}} count = {4}/>
        </View>
        <View>
          <View style = {styles.banner}>
            <UploadDocuments text = {'Upload your petiole and soil reports to get more insights'} icon = {null} count = {1} textBtn={'upload'}/>
            <Image source={require('../assets/HomeScreenImages/uploadReports.png')}/>
          </View>
          <View style = {styles.banner}>
            <UploadDocuments text = {'Upload pictures of your plants and get health reports'} icon = {null} count = {2} textBtn={'upload'}/>
            <Image source={require('../assets/HomeScreenImages/diseaseDetection.png')}/>
          </View>
          <View style = {styles.banner}>
            <UploadDocuments text = {'Get insights on crop and its yield and other aids'} icon = {null} count = {3} textBtn={'recieve'}/>
            <Image source={require('../assets/HomeScreenImages/insightsImage.png')}/>
          </View>
        </View>
        </ScrollView>
      </SafeAreaView>
  );
}

