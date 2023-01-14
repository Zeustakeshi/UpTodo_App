import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import ModalPoup2 from "./ModalPoup2";
import { MaterialIcons } from "@expo/vector-icons";

const PriorityModal = ({ buttonShow = () => {} }) => {
    return (
        <ModalPoup2
            buttonShow={buttonShow}
            title={
                <Text className="p-3 text-center text-base font-normal">
                    Task Priority
                </Text>
            }
        >
            {(setModalVisible) => (
                <View className="flex-1 py-4 px-4">
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        className="flex-1  "
                    >
                        <View className=" flex-row justify-start  flex-wrap">
                            {new Array(12).fill(0).map((item, index) => {
                                return (
                                    <PriorityItem
                                        key={index}
                                        index={index + 1}
                                        isActive={index === 5}
                                    />
                                );
                            })}
                        </View>
                    </ScrollView>
                    <View className="mt-5 flex-row gap-x-5 justify-center items-center">
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            className="flex-1 h-[48px] rounded justify-center items-center "
                        >
                            <Text className="p-3 text-primary text-base font-normal">
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            className="flex-1 h-[48px] rounded justify-center items-center bg-primary2 "
                        >
                            <Text className="p-3 text-white text-base font-normal">
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ModalPoup2>
    );
};

const PriorityItem = ({ isActive, index }) => {
    return (
        <TouchableOpacity
            className={`justify-center items-center rounded-md p-2 m-4 w-[64px] h-[64px] ${
                isActive ? "bg-primary2" : "bg-gray-100"
            }`}
        >
            <MaterialIcons
                name="outlined-flag"
                size={30}
                color={isActive ? "white" : "#2A2B4B"}
            />
            <Text
                className={`font-medium mt-1 ${
                    isActive ? "text-white" : "text-text-color"
                }`}
            >
                {index}
            </Text>
        </TouchableOpacity>
    );
};

export default PriorityModal;