import { AccountIcon, UserGroupIcon, UserIcon } from '@/components/Icon'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: '#6c63ff', headerShown: false }}
    >
      <Tabs.Screen
        name="users"
        options={{
          title: 'Friends',
          tabBarIcon: ({ color }) => <UserIcon fill={color} fontSize={20} />,
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: 'Groups',
          tabBarIcon: ({ color }) => (
            <UserGroupIcon fill={color} fontSize={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <AccountIcon fill={color} fontSize={20} />,
        }}
      />
    </Tabs>
  )
}
