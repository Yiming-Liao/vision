import { Image, Text, View } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    )
}

const TabLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                        height: 84
                    }
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name='首頁'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='create'
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                name='發布'
                                focused={focused}
                            />
                        )
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name='個人'
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabLayout