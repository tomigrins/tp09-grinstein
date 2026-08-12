import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { getFotos } from './app/service/api';

import Feed from './app/screen/Feed';
import PubliAmpliadaScreen from './app/screen/PubliAmpliadaScreen';
import Perfil from './app/screen/Perfil';

const Tab = createBottomTabNavigator();

export default function App() {
  const [Fotos, setFotos] = useState([]);
  const [cantLikes, setCantLikes] = useState(1000);
  const [liked, setLiked] = useState(false);
  const [publiAbierta, setpubliAbierta] = useState(false);

  useEffect(() => {
    getFotos().then((data) => setFotos(data)).catch(() => {});
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Feed') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Perfil') {
                iconName = focused ? 'person' : 'person-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen 
            name="Feed" 
            options={{ title: 'Feed' }}
            children={() => (
              <Feed 
                Fotos={Fotos} 
                cantLikes={cantLikes} 
                setCantLikes={setCantLikes} 
                publiAbierta={publiAbierta} 
                setpubliAbierta={setpubliAbierta} 
                liked={liked} 
                setLiked={setLiked} 
              />
            )}
          />
          <Tab.Screen 
            name="Perfil" 
            options={{ title: 'Perfil' }}
            children={() => <Perfil fotos={Fotos} />}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
 