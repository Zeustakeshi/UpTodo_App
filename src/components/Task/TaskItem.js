import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { timeFomat } from "../../const";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
    addCompletedTask,
    addUnCompleteTask,
} from "../../redux/slice/tasksSlice";

const TaskItem = ({ data, allowPress = true }) => {
    const { name, time, categrory, priority, isCompleted } = data;
    const dispacth = useDispatch();
    const handlePress = () => {
        if (!allowPress) return;
        if (isCompleted) {
            dispacth(addUnCompleteTask({ ...data, isCompleted: false }));
        } else {
            dispacth(addCompletedTask({ ...data, isCompleted: true }));
        }
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            className={`flex-1 ${isCompleted && "opacity-50"}`}
        >
            <View className="p-3 flex-row justify-start items-center bg-gray-50 mb-3 rounded-lg">
                {/* icon circle */}
                {isCompleted ? (
                    <FontAwesome5
                        name="check-circle"
                        size={24}
                        color="#8875FF"
                    />
                ) : (
                    <Entypo name="circle" size={24} color="#8875FF" />
                )}
                <View className="ml-3 items-start flex-1 gap-y-2">
                    <Text className="text-base font-medium" numberOfLines={1}>
                        {name}
                    </Text>
                    <View className="flex-row justify-between items-center w-full">
                        {/* time */}
                        <Text className="text-xs font-normal text-gray-500">
                            {timeFomat(time.end)}
                        </Text>
                        <View className="flex-1 flex-row justify-end items-center gap-x-2">
                            {/* categrory */}
                            <View className=" overflow-hidden flex-row justify-between items-center gap-x-1 px-1 pr-2 py-1 bg-[#809CFF] rounded-md">
                                <FontAwesome5
                                    name="home"
                                    size={10}
                                    color={"#fff"}
                                />
                                <Text
                                    numberOfLines={1}
                                    className="max-w-[50px] text-[10px] text-gray-200"
                                >
                                    {categrory.title}
                                </Text>
                            </View>
                            {/* priority */}
                            <View className="flex-row justify-center items-center gap-x-1 px-1 pr-2 py-1 border border-primary2 rounded-lg">
                                <MaterialIcons
                                    name="outlined-flag"
                                    size={14}
                                    color="#2A2B4B"
                                />
                                <Text className="text-[10px]">{priority}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default TaskItem;