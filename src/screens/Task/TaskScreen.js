import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { timeFomat } from "../../const";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TaskScreen = ({ route }) => {
    const task = route?.params?.pram;

    return (
        <LayoutAuth>
            {/* title and desc */}
            <View className="flex-row justify-between items-start">
                <View className="flex-1 p-2">
                    <Text
                        numberOfLines={3}
                        className="text-xl font-semibold text-text-color"
                    >
                        {task?.name || "Task"}
                    </Text>
                    <Text
                        numberOfLines={2}
                        className="mt-2 text-sm  text-gray-500 font-normal"
                    >
                        {task?.desc || "Task"}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Feather name="edit" size={24} color="#4b5563" />
                </TouchableOpacity>
            </View>
            {/* Task infomation */}
            <View className="mt-5">
                <TaskInfoItem
                    icon={
                        <MaterialIcons
                            name="alarm-on"
                            size={24}
                            color="#4b5563"
                        />
                    }
                    title="Task Time :"
                    data={{ lable: timeFomat(task?.time?.end) }}
                />
                <TaskInfoItem
                    icon={<Feather name="tag" size={24} color="#4b5563" />}
                    title="Task Category : "
                    data={{
                        lable: task?.categrory?.title || "Learn",
                        icon: (
                            <Feather
                                name="pen-tool"
                                size={20}
                                color="#4b5563"
                            />
                        ),
                    }}
                />
                <TaskInfoItem
                    icon={
                        <MaterialIcons
                            name="outlined-flag"
                            size={24}
                            color="#4b5563"
                        />
                    }
                    title="Task Priority :"
                    data={{
                        lable: task.priority || 6,
                    }}
                />
                {/* delete */}
                <TouchableOpacity className="flex-row justify-between items-center my-3">
                    <View className="flex-row justify-start items-center gap-x-2">
                        <MaterialCommunityIcons
                            name="delete-sweep-outline"
                            size={24}
                            color="#ef4444"
                        />
                        <Text className="text-base font-normal text-[#ef4444]">
                            Delete Task
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </LayoutAuth>
    );
};

const TaskInfoItem = ({
    icon,
    title,
    data = { icon: "", lable: "" },
    onPress = () => {},
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex-row justify-between items-center my-3"
        >
            <View className="flex-row justify-start items-center gap-x-2">
                {icon}
                <Text className="text-base font-normal text-text-color">
                    {title}
                </Text>
            </View>
            <View className="flex-row justify-center items-center bg-gray-100 gap-x-1 py-2 px-3 rounded-lg">
                {data.icon}
                <Text className="text-sm font-normal text-gray-600">
                    {data.lable}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default TaskScreen;
