/* eslint-disable prettier/prettier */
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function MenuInferior() {
    return (
        <>
            <View className="flex-col items-center justify-center">
                    <MaterialCommunityIcons
                        name="store-settings"
                        size={34}
                        color="blue"
                    />
                </View>
                <View className="flex-col items-center justify-center">
                    <Octicons name="search" size={30} color="blue" />
                </View>
                <View className="flex-col items-center justify-center">
                    <FontAwesome6 name="fire" size={38} color="red" />
                </View>
                <View className="flex-col items-center justify-center">
                    <FontAwesome5 name="shopping-cart" size={30} color="blue" />
                </View>
                <View className="flex-col items-center justify-center">
                    <Ionicons name="person-sharp" size={30} color="blue" />
                </View>
        
        </>
    );
}

export default MenuInferior;
