import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from "expo-router";

const welcome = () => {
  return (
    <SafeAreaView className=' flex h-full items-center justify-between bg-white '>
       <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-in");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default welcome