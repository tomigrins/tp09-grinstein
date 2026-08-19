import { View, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFotos } from './app/service/api';
import { useState, useEffect } from 'react';

import Feed from './app/screen/Feed';
import Perfil from './app/screen/Perfil';

const Stack = createNativeStackNavigator();

export default function App() {
  const [Fotos, setFotos] = useState([]);
  const [cantLikes, setCantLikes] = useState(1000);
  const [liked, setLiked] = useState(false);
  const [publiAbierta, setpubliAbierta] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFotos()
      .then((data) => {
        setFotos(data);
      })
      .catch(() => {
        setFotos([]);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.splash}>
        <Image
          source={require('./assets/igLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Feed"
            options={{ title: 'Feed' }}
          >
            {() => (
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
          </Stack.Screen>

          <Stack.Screen
            name="Perfil"
            options={{ title: 'Perfil' }}
          >
            {() => <Perfil fotos={Fotos} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  logo: {
    width: 200,
    height: 200,
  },
});