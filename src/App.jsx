import React from 'react';

//react navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Home from './components/screens/Home';
import Search from './components/screens/Search';
import Wishlist from './components/screens/Wishlist';
import Cart from './components/screens/Cart';
import ProductDetails from './components/screens/ProductDetails';
import AllProducts from './components/screens/AllProducts';

//components
import Header from './components/shared/Header';
import TabIcon from './components/shared/TabIcon';

//colors
import {textDark, textWhite} from './helpers/Constants';

//redux
import store from './redux/store';
import {Provider, useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeNested" component={Home} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
    </Stack.Navigator>
  );
}

function ButtonTabNavigator() {
  let inCartItems;
  try {
    inCartItems = useSelector(state =>
      state.items.items.filter(itm => itm.quantity),
    );
  } catch (err) {
    console.log(err);
  }
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        header: props => <Header {...props} />,
        tabBarShowLabel: false,
        tabBarBadgeStyle: {
          backgroundColor: textDark,
          top: 12,
          borderWidth: 1,
          borderColor: textWhite,
          fontSize: 10,
          fontWeight: 'bold',
          color: textWhite,
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          right: 10,
          left: 10,
          height: 65,
          borderRadius: 80,
          elevation: 1,
          borderWidth: 0,
        },
        style: {
          position: 'absolute',
          bottom: 40,
          right: 20,
          left: 20,
        },
        tabBarIcon: ({focused}) => <TabIcon route={route} focused={focused} />,
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={inCartItems?.length > 0 && {tabBarBadge: inCartItems.length}}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ButtonTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
