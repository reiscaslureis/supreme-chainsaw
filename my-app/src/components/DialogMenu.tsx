import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

export function DialogMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const openDialog = () => {
    setIsVisible(true);
  };

  const closeDialog = () => {
    setIsVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={openDialog}>
        <Text>Open Dialog Menu</Text>
      </TouchableOpacity>
      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeDialog}
      >
        <View>
          {/* Add your dialog menu content here */}
          <Text>This is the dialog menu</Text>
          <TouchableOpacity onPress={closeDialog}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
