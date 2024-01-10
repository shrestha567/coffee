import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, FONTS, icons, images } from '../constants'
import { Image } from 'expo-image'
import { ScrollView } from 'react-native-virtualized-view'

const Detail = ({ navigation }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = "A cappuccino is a coffee-based drink made primarily from espresso and milk. It is typically composed of one-third espresso, one-third steamed milk, and one-third milk foam. The name 'cappuccino' comes from the Capuchin friars";
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.black, padding: 16 }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          position: "absolute",
          width: SIZES.width - 64,
          right: 16,
          left: 16,
          top: 16,
          zIndex: 999
        }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              height: 40,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              borderRadius: 14
            }}>
            <Image
              source={icons.leftArrow}
              contentFit="contain"
              style={{
                height: 16,
                width: 16,
                tintColor: COLORS.white
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsFavourite(!isFavourite)}
            style={{
              height: 40,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              borderRadius: 14
            }}>
            <Image
              source={isFavourite ? icons.heart : icons.heartOutline}
              contentFit="contain"
              style={{
                height: 16,
                width: 16,
                tintColor: COLORS.white
              }}
            />
          </TouchableOpacity>
        </View>

        <Image
          source={images.product3}
          contentFit='cover'
          style={{
            height: 370,
            width: "100%",
            borderRadius: SIZES.radius
          }}
        />

        <View style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between"
        }}>
          <View>
            <Text style={{
              fontSize: 28,
              fontFamily: "semiBold",
              color: COLORS.white
            }}>Cappucino</Text>
            <Text style={{
              fontSize: 18,
              fontFamily: "light",
              color: "rgba(255,255,255,.51)"
            }}>With Oalt Milk</Text>
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center"
          }}>
            <Image
              source={icons.star}
              contentFit='contain'
              style={{
                height: 24,
                width: 24,
                tintColor: COLORS.primary,
                marginRight: 8
              }}
            />
            <Text style={{
              fontSize: 22,
              fontFamily: "bold",
              color: COLORS.white
            }}>4.5</Text>
          </View>
        </View>

        <Text style={{
          fontSize: 14,
          color: COLORS.white,
          fontFamily: 'regular'
        }}>
          {showFullDescription ? description : `${description.slice(0, 100)}...`}
        </Text>
        {description.length > 100 && (
          <TouchableOpacity onPress={toggleDescription}>
            <Text style={{
              color: COLORS.primary,
              fontSize: 14,
              fontFamily: 'semiBold'
            }}>
              {showFullDescription ? 'Read Less' : 'Read More'}
            </Text>
          </TouchableOpacity>
        )}

        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 22
        }}>
          <View>
            <View style={{
              flexDirection: "row",
            }}>
              <View style={styles.ingredientContainer}>
                <Image
                  source={icons.coffeeBeans}
                  contentFit='contain'
                  style={styles.ingredientIcon}
                />
                <Text style={styles.ingredientText}>Coffee</Text>
              </View>
              <View style={styles.ingredientContainer}>
                <Image
                  source={icons.drop}
                  contentFit='contain'
                  style={styles.ingredientIcon}
                />
                <Text style={styles.ingredientText}>Milk</Text>
              </View>
              <View style={styles.ingredientContainer}>
                <Text style={styles.ingredientText}>Medium Roasted</Text>
              </View>
            </View>
            <Text style={{
              fontSize: 14,
              fontFamily: "medium",
              color: "rgba(255,255,255,0.51)",
              marginVertical: 12
            }}>Price</Text>
            <View style={{
              flexDirection: "row"
            }}>
              <Text style={{
                fontSize: 24,
                fontFamily: "bold",
                color: COLORS.primary
              }}>$</Text>
              <Text style={{
                fontSize: 24,
                fontFamily: "bold",
                color: COLORS.white
              }}>4.20</Text>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>Size</Text>
            <View style={styles.sizeContainer}>
              <TouchableOpacity
                style={[styles.sizeButton, selectedSize === 'S' && styles.selectedButton]}
                onPress={() => handleSizeSelect('S')}
              >
                <Text style={styles.sizeText}>S</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.sizeButton, selectedSize === 'M' && styles.selectedButton]}
                onPress={() => handleSizeSelect('M')}
              >
                <Text style={styles.sizeText}>M</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.sizeButton, selectedSize === 'L' && styles.selectedButton]}
                onPress={() => handleSizeSelect('L')}
              >
                <Text style={styles.sizeText}>L</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </ScrollView>

      <View style={{
        position: "absolute",
        bottom: 0,
        height: 78,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start"
      }}>
        <TouchableOpacity
          style={{
            height: 58,
            borderRadius: 12,
            backgroundColor: COLORS.primary,
            width: SIZES.width - 32,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <Text style={{
            fontSize: 20,
            fontFamily: "regular",
            color: COLORS.white
          }}>Add To Cart</Text>
          <Image
            source={icons.bag}
            contentFit='contain'
            style={{
              height: 24,
              width: 24,
              tintColor: COLORS.white,
              marginLeft: 12
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  ingredientContainer: {
    height: 46,
    paddingHorizontal: 8,
    backgroundColor: "rgba(26,26,29,0.85)",
    borderRadius: 8,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12
  },
  ingredientIcon: {
    height: 22,
    width: 22,
    tintColor: COLORS.primary
  },
  ingredientText: {
    fontSize: 10,
    fontFamily: "regular",
    color: "rgba(255,255,255,.4)"
  },
  container: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    height: "auto",
    top: -50
  },
  title: {
    fontSize: 20,
    fontFamily: "medium",
    marginBottom: 6,
    color: COLORS.white
  },
  sizeContainer: {
    flexDirection: 'column',
  },
  sizeButton: {
    height: 46,
    width: 46,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 12,
    backgroundColor: "rgba(26,26,29,0.85)",
  },
  selectedButton: {
    backgroundColor: COLORS.primary,
  },
  sizeText: {
    fontSize: 12,
    color: COLORS.white
  },
  selectedSize: {
    marginTop: 10,
    fontSize: 18,
  },
})
export default Detail