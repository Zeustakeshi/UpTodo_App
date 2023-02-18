import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollView, Text } from "react-native";
import { View } from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import CountTime from "../../components/CountTime/CountTime";
import LayoutAuth from "../../components/Layout/LayoutAuth";
import CongratulationsModal from "../../components/Modals/CongratulationsModal";
import TaskItem from "../../components/Task/TaskItem";
import { setIsCompleteTask } from "../../redux/slice/tasks/tasksSlice";

const FocusMainScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const { tasks } = useSelector((state) => state.tasks);
    const [uncompleteTasks, setUncompleteTasks] = useState([]);

    const dispacth = useDispatch();
    useEffect(() => {
        setUncompleteTasks(
            tasks
                .filter((task) => !task.isCompleted)
                .sort((task1, task2) => task1.priority - task2.priority)
        );
    }, [tasks]);

    const handlePressTaskItem = (task) => {
        if (task.isCompleted) {
            dispacth(setIsCompleteTask({ id: task.id, value: false }));
        } else {
            dispacth(setIsCompleteTask({ id: task.id, value: true }));
        }
    };

    return (
        <LayoutAuth title="Focus">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="mb-20">
                    <CongratulationsModal
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                    ></CongratulationsModal>
                    <CountTime
                        defaultFocusTime={0.2}
                        defaultRelaxTime={0.2}
                        onTimeEnd={() => {
                            setModalVisible(true);
                        }}
                        desc={
                            <View className="my-5">
                                <Text className="text-gray-500 font-semibold text-center">
                                    While your focus mode is on, all of your
                                    notifications will be off
                                </Text>
                                <Text className="block text-center p-2 text-xs text-gray-400 leading-relaxed">
                                    The default focus time is 60 minutes, but
                                    you can change it at any time in the
                                    settings.
                                </Text>
                            </View>
                        }
                    ></CountTime>
                    {uncompleteTasks.length > 0 && (
                        <View className="">
                            <Text className="my-2 text-sm text-gray-400 font-bold ">
                                Your uncomplete tasks
                            </Text>
                            {uncompleteTasks?.map((task, index) => {
                                return (
                                    <TaskItem
                                        key={task.id}
                                        data={task}
                                        allowPress={true}
                                        onPress={() =>
                                            handlePressTaskItem(task)
                                        }
                                    />
                                );
                            })}
                        </View>
                    )}
                </View>
            </ScrollView>
        </LayoutAuth>
    );
};

export default FocusMainScreen;