
import React from 'react';
import { Platform, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Doctor from '../../../screens/Doctor';

const Stack = createStackNavigator();

function DoctorStack({ navigation }){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Doctor'
                component={Doctor}
                options={{
                    headerTitle:() => <Text >Doctor</Text>,
                    headerLeft: () => 
                        <Icon
                            style={{ margin: 15}} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            name="menu"
                            size={32}
                            color='#fff'
                        />,
                    headerTitleAlign:'center'
                }}
            />
        </Stack.Navigator>
    )
}

export default DoctorStack;