import React, { useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import profile from '../assets/img/profile.png';
// Tab ICons...
import home from '../assets/img/home.png';
import search from '../assets/img/search.png';
import notifications from '../assets/img/bell.png';
import settings from '../assets/img/settings.png';
import logout from '../assets/img/logout.png';
import myInfo from '../assets/img/myInfo.png';
import ToS from '../assets/img/ToS.png';
import liveCampagin from '../assets/img/liveCampagin.png';
import information from '../assets/img/information.png';
import event from '../assets/img/event.png';
import registerInfo from '../assets/img/registerInfo.png';
import campaginReview from '../assets/img/campaginReview.png';
import allCampagin from '../assets/img/allCampagin.png';
import myQnA from '../assets/img/myQnA.png';
import pointShop from '../assets/img/pointShop.png';
import reportLog from '../assets/img/reportLog.png';
import managePayment from '../assets/img/managePayment.png';
import userCenter from '../assets/img/userCenter.png';
import camapginCount from '../assets/img/campaginCount.png';
import AdEx from '../assets/img/AdEx.png';
import notice from '../assets/img/notice.png';
import shop from '../assets/img/shop.png';
import QnA from '../assets/img/QnA.png';
// Menu
import menu from '../assets/img/menu.png';
import close from '../assets/img/close.png';

// Photo
import photo from '../assets/img/photo.jpg';
import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from '../components/styles';
import Feed from './Feed';
import Article from './Article';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import { ScrollView } from 'react-native-gesture-handler';
import TabButton from '../components/TabButton';
import LogoutButton from '../components/LogoutButton';
import TitleMenuButton from '../components/TitleMenuButton';
import moveCamapginList from '../components/moveCampaginList';
import searchInput from '../components/searchInput';
import JoinButton from '../components/JoinButton';

const Drawer = createDrawerNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Welcome = ({ navigation, route }) => {
  const { name, email } = route.params;
  const [currentTab, setCurrentTab] = useState('Home');
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(true);
  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const [animatedViewRadius, setAnimatedViewRadius] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'flex-start' }}>
      <StatusBar style="dark" />

      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#C4E1C5', width: windowWidth }} />
        <View style={{ flex: 5, backgroundColor: '#ffffff', width: windowWidth, alignItems: 'flex-end' }}>
          <View
            style={{
              backgroundColor: '#FFF1D7',
              width: windowWidth / 1.4,
              height: windowHeight / 1.4,
              borderRadius: 15,
              marginTop: 80,
              marginRight: 20,
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              {searchInput(currentTab, setCurrentTab, '통합검색', search, navigation, showMenu, windowWidth)}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              {TabButton(currentTab, setCurrentTab, 'My 활동정보', myInfo, navigation, windowWidth)}
              {TabButton(currentTab, setCurrentTab, '이용약관', ToS, navigation, windowWidth)}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              {TabButton(currentTab, setCurrentTab, 'My 실시간 캠페인', liveCampagin, navigation, windowWidth)}
              {TabButton(currentTab, setCurrentTab, '공지사항', information, navigation, windowWidth)}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              {TabButton(currentTab, setCurrentTab, 'My 가입 정보', registerInfo, navigation, windowWidth)}
              {TabButton(currentTab, setCurrentTab, '이벤트', event, navigation, windowWidth)}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              {TabButton(currentTab, setCurrentTab, 'My 캠페인 리뷰', campaginReview, navigation, windowWidth)}
              {TabButton(currentTab, setCurrentTab, '전체 캠페인', allCampagin, navigation, windowWidth)}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              {TabButton(currentTab, setCurrentTab, 'My 질의응답', myQnA, navigation, windowWidth)}
              {TabButton(currentTab, setCurrentTab, 'Point Shop', pointShop, navigation, windowWidth)}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              {TabButton(currentTab, setCurrentTab, 'My 신고내역', reportLog, navigation, windowWidth)}
              {TabButton(currentTab, setCurrentTab, '결제수단관리', managePayment, navigation, windowWidth)}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 5 }}>
              {TabButton(currentTab, setCurrentTab, '고객센터', userCenter, navigation, windowWidth)}
            </View>
          </View>
        </View>
        <View
          elevation={20}
          style={{
            position: 'absolute',
            width: windowWidth / 1.4,
            height: windowHeight / 6,
            backgroundColor: 'white',
            top: 60,
            left: 90,
            borderRadius: 15,
          }}
        >
          <View style={{ margin: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  margin: 'auto',
                  borderRadius: 50,
                  borderWidth: 2,
                  borderColor: '#E5E7EB',
                }}
                resizeMode="cover"
                source={require('../assets/img/img1.png')}
              />
              <Text style={{ fontSize: 25 }}>{name} 님 </Text>
              <View style={{ position: 'absolute', top: -20, right: 0 }}>
                {LogoutButton(currentTab, setCurrentTab, 'LogOut', logout, navigation, showMenu, setShowMenu)}
              </View>
            </View>

            <View
              style={{
                backgroundColor: '#C4E1C5',
                width: windowWidth / 1.6,
                height: windowHeight / 20,
                borderRadius: 10,
                marginTop: 25,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}
            >
              {TitleMenuButton(currentTab, setCurrentTab, 'Notice', notice)}
              {TitleMenuButton(currentTab, setCurrentTab, 'Shop', shop)}
              {TitleMenuButton(currentTab, setCurrentTab, 'QnA', QnA, navigation)}
            </View>
          </View>
        </View>
      </View>

      <Animated.View
        elevation={10}
        style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: animatedViewRadius,
          shadowOffset: { width: 1, height: 1 },
          shadowColor: 'black',
          shadowOpacity: 0.2,
          paddingVertical: 0,
          overflow: 'hidden',
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
            flex: 1,
            width: '100%',
          }}
        >
          <View style={{ alignItems: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => {
                // Do Actions Here....
                // Scaling the view...
                Animated.timing(scaleValue, {
                  toValue: !showMenu ? 1 : 0.9,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(offsetValue, {
                  // YOur Random Value...
                  toValue: showMenu ? -(windowWidth / 1.2) : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(closeButtonOffset, {
                  // YOur Random Value...
                  toValue: showMenu ? 0 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                setShowMenu(!showMenu);
                setAnimatedViewRadius(showMenu ? 25 : 0);
              }}
            >
              <Image
                source={showMenu ? menu : close}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: 'black',
                  marginTop: 50,
                  marginRight: 20,
                  justifyContent: 'flex-end',
                }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, alignItems: 'flex-start', marginTop: 25 }}>
              <Text style={{ fontSize: 30, marginLeft: 30 }} welcome={true}>
                {name} 활동가 님,
              </Text>
              <Text style={{ fontSize: 30, marginLeft: 30 }} welcome={true}>
                안녕하세요!
              </Text>
            </View>
            <View style={{ flex: 0.5, alignItems: 'flex-start', marginTop: 20 }}>
              <Avatar resizeMode="cover" source={require('../assets/img/img1.png')} />
            </View>
          </View>
          <View style={{ backgroundColor: 'gray', height: windowHeight / 7 }}>
            <View
              style={{
                position: 'absolute',
                width: 50,
                height: 30,
                borderRadius: 10,
                backgroundColor: '#D9D9D9',
                top: 0,
                left: 0,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
              }}
            >
              <Text style={{ fontSize: 20 }}>ad</Text>
            </View>
          </View>
          <ScrollView>
            <WelcomeContainer>
              <View
                elevation={20}
                style={{
                  width: windowWidth / 1.1,
                  height: windowHeight / 6,
                  backgroundColor: 'white',
                  borderRadius: 25,
                  borderWidth: 1,
                }}
              >
                <View style={{ margin: 15 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={camapginCount} style={{ width: 52, height: 52 }}></Image>
                    <View>
                      <Text style={{ fontWeight: 'bold', fontSize: 17 }}>진행 중인 캠페인 횟수는 총 2회입니다.</Text>
                      <Text>진행 중 2회 | 진행 완료 1회 | 진행 가능 : 120개</Text>
                      <Text style={{ marginTop: 10 }}>포인트: 3,383점 총 봉사 시간 : 468시간</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                elevation={20}
                style={{
                  width: windowWidth / 1.1,
                  backgroundColor: 'white',
                  borderRadius: 25,
                  borderWidth: 1,
                  marginTop: 10,
                }}
              >
                <View style={{ margin: 15 }}>
                  {moveCamapginList(currentTab, setCurrentTab, '캠페인 전체 목록 바로 가기 >', navigation)}
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ flexDirection: 'row' }}>
                  <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                    <View
                      style={{
                        width: windowWidth / 3,
                        height: windowHeight / 4,
                        borderRadius: 15,
                        backgroundColor: 'skyblue',
                        margin: 10,
                      }}
                    />
                    <Text>제주쓰담</Text>
                    {JoinButton(currentTab, setCurrentTab, '지금신청', navigation, windowWidth)}
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <View
                      style={{
                        width: windowWidth / 3,
                        height: windowHeight / 4,
                        borderRadius: 15,
                        backgroundColor: 'skyblue',
                        margin: 10,
                      }}
                    />
                    <Text>제주쓰담</Text>
                    {JoinButton(currentTab, setCurrentTab, '지금신청', navigation, windowWidth)}
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <View
                      style={{
                        width: windowWidth / 3,
                        height: windowHeight / 4,
                        borderRadius: 15,
                        backgroundColor: 'skyblue',
                        margin: 10,
                      }}
                    />
                    <Text>제주쓰담</Text>
                    {JoinButton(currentTab, setCurrentTab, '지금신청', navigation, windowWidth)}
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <View
                      style={{
                        width: windowWidth / 3,
                        height: windowHeight / 4,
                        borderRadius: 15,
                        backgroundColor: 'skyblue',
                        margin: 10,
                      }}
                    />
                    <Text>제주쓰담</Text>
                    {JoinButton(currentTab, setCurrentTab, '지금신청', navigation, windowWidth)}
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <View
                      style={{
                        width: windowWidth / 3,
                        height: windowHeight / 4,
                        borderRadius: 15,
                        backgroundColor: 'skyblue',
                        margin: 10,
                      }}
                    />
                    <Text>제주쓰담</Text>
                    {JoinButton(currentTab, setCurrentTab, '지금신청', navigation, windowWidth)}
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <View
                      style={{
                        width: windowWidth / 3,
                        height: windowHeight / 4,
                        borderRadius: 15,
                        backgroundColor: 'skyblue',
                        margin: 10,
                      }}
                    />
                    <Text>제주쓰담</Text>
                    {JoinButton(currentTab, setCurrentTab, '지금신청', navigation, windowWidth)}
                  </View>
                </ScrollView>
              </View>
            </WelcomeContainer>
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Welcome;
