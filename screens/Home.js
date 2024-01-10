import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, icons, images } from '../constants'
import { Image } from 'expo-image'
import { bestProducts, exclusiveProducts, keywordsData, latestProducts } from '../constants/data'
import SubHeader from '../components/SubHeader'
import { LinearGradient } from 'expo-linear-gradient'
import RatingStars from '../components/RatingStars'
import { ScrollView } from 'react-native-virtualized-view'


const Home = ({ navigation }) => {
  /**
   * Render Header
   */

  const renderHeader = () => {
    return (
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <Image
          source={images.logo}
          contentFit='contain'
          style={{
            width: 40,
            height: 24
          }}
        />

        <TouchableOpacity>
          <Image
            source={images.avatar}
            contentFit='contain'
            style={{
              height: 48,
              width: 48,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: COLORS.white
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  /**
   * Render content
   */

  const renderContent = () => {
    const [search, setSearch] = useState("");
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const handleKeywordPress = (id) => {
      setSelectedKeywords((prevSelectedKeywords) => {
        if (prevSelectedKeywords.includes(id)) {
          // Remove keyword from the selection if already selected
          return prevSelectedKeywords.filter((keywordId) => keywordId !== id);
        } else {
          // Add keyword to the selection if not already selected
          return [...prevSelectedKeywords, id];
        }
      });
    };
    const KeywordItem = ({ item, onPress, selected }) => {
      const itemStyle = {
        ...{
          padding: 14,
          marginHorizontal: 5,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }
      };

      return (
        <TouchableOpacity style={itemStyle} onPress={() => onPress(item.id)}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "bold",
              color: selected ? COLORS.primary : "rgba(255,255,255,.33)"
            }}>{item.keyword}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <View style={{
          height: 55,
          justifyContent: 'center',
          alignItems: "center",
          width: "100%",
          backgroundColor: "rgba(30,31,34,.85)",
          flexDirection: "row",
          borderRadius: 15,
          marginVertical: 16,
          paddingHorizontal: 8
        }}>
          <TouchableOpacity
            onPress={() => console.log("Search")}
          >
            <Image
              source={icons.search}
              contentFit='contain'
              style={{
                height: 24,
                width: 24,
                tintColor: "rgba(104,104,104,.85)"
              }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find your coffee..."
            placeholderTextColor={"rgba(104,104,104,.85)"}
            value={search}
            onChangeText={(text) => setSearch(text)}
            style={{
              fontSize: 14,
              flex: 1,
              marginHorizontal: 8
            }}
          />
        </View>
        <FlatList
          data={keywordsData}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <KeywordItem
              item={item}
              onPress={handleKeywordPress}
              selected={selectedKeywords.includes(item.id)}
            />
          )}
        />

        <SubHeader title="Exclusive Offer" />
        <FlatList
          data={exclusiveProducts}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail")}
            >
              <LinearGradient
                colors={["rgba(56,55,55,1)", "rgba(17,16,16,1)", "rgba(0,0,0,1)"]}
                style={{
                  width: 360,
                  height: 168,
                  borderRadius: SIZES.radius,
                  marginHorizontal: 8,
                  paddingHorizontal: 8,
                  paddingVertical: 8,
                  flexDirection: "row"
                }}
              >
                <Image
                  source={item.image}
                  contentFit='cover'
                  style={{
                    width: 140,
                    height: "100%",
                    borderRadius: SIZES.radius,
                    marginRight: 8
                  }}
                />

                <View>
                  <Text style={{
                    fontSize: 22,
                    fontFamily: "semiBold",
                    color: COLORS.white
                  }}>{item.name}</Text>
                  <Text style={{
                    fontSize: 15,
                    fontFamily: "semiBold",
                    color: "rgba(255,255,255,.4)"
                  }}>{item.tag}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{
                      fontSize: 18,
                      fontFamily: "bold",
                      color: COLORS.primary
                    }}>$</Text>
                    <Text style={{
                      fontSize: 18,
                      fontFamily: "bold",
                      color: COLORS.white
                    }}>{item.price}</Text>
                  </View>

                  <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 12
                  }}>
                    <View style={{
                      flexDirection: "row",
                      marginRight: 18
                    }}>
                      <RatingStars review={item.rating} />
                      <Text style={{
                        fontSize: 18,
                        fontFamily: "bold",
                        fontSize: 12,
                        color: COLORS.white
                      }}>{item.rating}</Text>
                    </View>

                    <View style={{
                      flexDirection: "row"
                    }}>
                      <TouchableOpacity
                        style={{
                          height: 29,
                          width: 29,
                          borderRadius: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: COLORS.primary,
                          marginRight: 6
                        }}
                      >
                        <Image
                          source={icons.heartOutline}
                          contentFit='contain'
                          style={{
                            height: 12,
                            width: 12,
                            tintColor: COLORS.white
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          height: 29,
                          width: 29,
                          borderRadius: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: COLORS.primary
                        }}
                      >
                        <Image
                          source={icons.bag}
                          contentFit='contain'
                          style={{
                            height: 12,
                            width: 12,
                            tintColor: COLORS.white
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
        <SubHeader title="Best Selling" />
        <FlatList
          data={bestProducts}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity>
              <LinearGradient
                colors={["rgba(56,55,55,1)", "rgba(17,16,16,1)", "rgba(0,0,0,1)"]}
                style={{
                  width: 168,
                  height: 260,
                  borderRadius: SIZES.radius,
                  marginHorizontal: 8,
                  padding: 6
                }}
              >
                <Image
                  source={item.image}
                  contentFit='cover'
                  style={{
                    width: "100%",
                    height: 156,
                    borderRadius: SIZES.radius
                  }}
                />
                <View>
                  <Text style={{
                    fontSize: 15,
                    fontFamily: "semiBold",
                    color: COLORS.white
                  }}>{item.name}</Text>
                  <Text style={{
                    fontSize: 12,
                    fontFamily: "regular",
                    color: "rgba(255,255,255,.50)"
                  }}>{item.tag}</Text>

                  <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10
                  }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{
                        fontSize: 16,
                        fontFamily: "bold",
                        color: COLORS.primary
                      }}>$</Text>
                      <Text style={{
                        fontSize: 16,
                        fontFamily: "bold",
                        color: COLORS.white
                      }}>{item.price}</Text>
                    </View>
                    <View style={{
                      flexDirection: "row"
                    }}>
                      <TouchableOpacity
                        style={{
                          height: 29,
                          width: 29,
                          borderRadius: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: COLORS.primary,
                          marginRight: 6
                        }}
                      >
                        <Image
                          source={icons.heartOutline}
                          contentFit='contain'
                          style={{
                            height: 12,
                            width: 12,
                            tintColor: COLORS.white
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          height: 29,
                          width: 29,
                          borderRadius: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: COLORS.primary
                        }}
                      >
                        <Image
                          source={icons.bag}
                          contentFit='contain'
                          style={{
                            height: 12,
                            width: 12,
                            tintColor: COLORS.white
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
        <SubHeader title="Latest Item" />
        <FlatList
          data={latestProducts}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity>
              <LinearGradient
                colors={["rgba(56,55,55,1)", "rgba(17,16,16,1)", "rgba(0,0,0,1)"]}
                style={{
                  width: 168,
                  height: 260,
                  borderRadius: SIZES.radius,
                  marginHorizontal: 8,
                  padding: 6
                }}
              >
                <Image
                  source={item.image}
                  contentFit='cover'
                  style={{
                    width: "100%",
                    height: 156,
                    borderRadius: SIZES.radius
                  }}
                />
                <View>
                  <Text style={{
                    fontSize: 15,
                    fontFamily: "semiBold",
                    color: COLORS.white
                  }}>{item.name}</Text>
                  <Text style={{
                    fontSize: 12,
                    fontFamily: "regular",
                    color: "rgba(255,255,255,.50)"
                  }}>{item.tag}</Text>

                  <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10
                  }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{
                        fontSize: 16,
                        fontFamily: "bold",
                        color: COLORS.primary
                      }}>$</Text>
                      <Text style={{
                        fontSize: 16,
                        fontFamily: "bold",
                        color: COLORS.white
                      }}>{item.price}</Text>
                    </View>
                    <View style={{
                      flexDirection: "row"
                    }}>
                      <TouchableOpacity
                        style={{
                          height: 29,
                          width: 29,
                          borderRadius: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: COLORS.primary,
                          marginRight: 6
                        }}
                      >
                        <Image
                          source={icons.heartOutline}
                          contentFit='contain'
                          style={{
                            height: 12,
                            width: 12,
                            tintColor: COLORS.white
                          }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          height: 29,
                          width: 29,
                          borderRadius: 10,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: COLORS.primary
                        }}
                      >
                        <Image
                          source={icons.bag}
                          contentFit='contain'
                          style={{
                            height: 12,
                            width: 12,
                            tintColor: COLORS.white
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.black, padding: 16 }}>
        {renderHeader()}
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home