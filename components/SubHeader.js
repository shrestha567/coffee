import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from "../constants"

const SubHeader = ({ title, onPress }) => {
  return (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 16
    }}>
      <Text style={{
        ...FONTS.h4,
        color: COLORS.white
      }}>{title}</Text>
      <TouchableOpacity
        onPress={onPress}
      >
        <Text style={{
          ...FONTS.h4,
          color: "rgba(255,255,255,.33)" 
        }}>See more</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SubHeader