import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient"
import { StatusBar } from "expo-status-bar"
import { Image } from "expo-image"
import { images, icons, COLORS, FONTS } from "../constants"
import GradientText from "../components/GradientText"

const Welcome = ({ navigation }) => {

  return (
    <LinearGradient
      colors={['#150801', '#512813']}
      style={{
        flex: 1,
        padding: 16
      }}
    >
      <StatusBar hidden />
      <Image
        source={images.logo}
        contentFit="contain"
        style={{
          width: 40,
          height: 24
        }}
      />
      <View style={{
        marginVertical: 22
      }}>
        <GradientText style={styles.title}>It's</GradientText>
        <GradientText style={styles.title}>Always</GradientText>
        <GradientText style={styles.title}>Coffee Time</GradientText>
      </View>
      <Image
        source={images.cover}
        contentFit="contain"
        style={{
          height: 265,
          width: "100%"
        }}
      />
      <LinearGradient
        colors={["rgba(255,255,255,0.1)", "rgba(217,217,217,.05)"]}
        style={{
          width: 140,
          height: 52,
          borderRadius: 15,
          position: "absolute",
          bottom: 32,
          left: 16
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={{
            width: "100%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <TouchableOpacity style={{
            height: 52,
            width: 52,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: "center",
            backgroundColor: COLORS.white
          }}>
            <Image
              source={icons.rightArrow}
              contentFit="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: COLORS.black
              }}
            />
          </TouchableOpacity>
          <Text style={{
            ...FONTS.body4,
            color: COLORS.white,
            marginLeft: 10
          }}>Explore</Text>
        </TouchableOpacity>
      </LinearGradient>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    fontFamily: 'anton'
  }
})

export default Welcome