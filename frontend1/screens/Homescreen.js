import { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Animated,
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

const HEADER_HEIGHT = 70;

const categories = [
  {
    name: "Bebe",
    age: "0–2 vjeç",
    image: require("../assets/bebe.jpg"),
  },
  {
    name: "Vajza",
    age: "2–12 vjeç",
    image: require("../assets/bebe.jpg"),
  },
  {
    name: "Djem",
    age: "2–12 vjeç",
    image: require("../assets/bebe.jpg"),
  },
];

const products = [
  { id: 1, name: "Cardigan trikotazh", price: 34 },
  { id: 2, name: "Bluzë me vija", price: 28 },
  { id: 3, name: "Fustan me volane", price: 42 },
  { id: 4, name: "Pantallona të rehatshme", price: 32 },
];

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const mobile = width < 700;

  const scrollRef = useRef(null);
  const collectionY = useRef(0);
  const buttonScale = useRef(new Animated.Value(1)).current;

  function goToCollection() {
    scrollRef.current?.scrollTo({
      y: Math.max(0, collectionY.current - HEADER_HEIGHT),
      animated: true,
    });
  }

  function animateButton(value) {
    Animated.spring(buttonScale, {
      toValue: value,
      friction: 7,
      tension: 160,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={styles.page}>
      <ScrollView ref={scrollRef} style={styles.scroll}>
        {/* FOTOJA DHE TITULLI */}
        <ImageBackground
          source={require("../assets/design7.png")}
          style={[styles.hero, mobile && styles.heroMobile]}
          resizeMode="cover"
        >
          <View
            style={[
              styles.heroText,
              mobile && styles.heroTextMobile,
            ]}
          >
            <Text
              style={[
                styles.title,
                mobile && styles.titleMobile,
              ]}
            >
              Stil i vogël.{"\n"}Gëzim i madh.
            </Text>

            <Text
              style={[
                styles.subtitle,
                mobile && styles.subtitleMobile,
              ]}
            >
              Veshje të rehatshme për çdo aventurë.
            </Text>

            {/* RRITET GJATË SHTYPJES */}
            <Animated.View
              style={[
                styles.buttonWrapper,
                { transform: [{ scale: buttonScale }] },
              ]}
            >
              <Pressable
                onPress={goToCollection}
                onPressIn={() => animateButton(1.06)}
                onPressOut={() => animateButton(1)}
                accessibilityRole="button"
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.buttonPressed,
                ]}
              >
                <Text style={styles.buttonText}>
                  Bli tani →
                </Text>
              </Pressable>
            </Animated.View>
          </View>
        </ImageBackground>

        {/* KATEGORITË */}
        <View style={styles.section}>
          <View style={styles.grid}>
            {categories.map((category) => (
              <View
                key={category.name}
                style={[
                  styles.categoryCard,
                  { width: mobile ? "100%" : "31.5%" },
                ]}
              >
                <Image
                  source={category.image}
                  style={styles.categoryImage}
                  resizeMode="cover"
                  accessibilityLabel={category.name}
                />

                <View style={styles.categoryInfo}>
                  <Text style={styles.categoryName}>
                    {category.name}
                  </Text>

                  <Text style={styles.age}>
                    {category.age}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* PRODUKTET */}
        <View
          style={styles.section}
          onLayout={(event) => {
            collectionY.current = event.nativeEvent.layout.y;
          }}
        >
          <Text style={styles.sectionTitle}>
            Koleksioni i ri
          </Text>

          <View style={styles.grid}>
            {products.map((product) => (
              <View
                key={product.id}
                style={{ width: mobile ? "47%" : "23%" }}
              >
                <View style={styles.productPlaceholder}>
                  <Text style={styles.placeholderText}>
                    Foto e produktit
                  </Text>
                </View>

                <Text style={styles.productName}>
                  {product.name}
                </Text>

                <Text style={styles.price}>
                  €{product.price.toFixed(2)}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            KIDSWEAR · Veshje për të vegjlit
          </Text>
        </View>
      </ScrollView>

      {/* HEADER-I QË QËNDRON NË EKRAN */}
      <View style={styles.header}>
        <Pressable
          style={styles.searchButton}
          accessibilityRole="button"
          accessibilityLabel="Kërko produkte"
          onPress={() => {
            // Këtu lidhet funksioni i kërkimit.
          }}
        >
          <Ionicons
            name="search-outline"
            size={24}
            color="#BLACK"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  scroll: {
    flex: 1,
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: "rgba(250,247,241,0.3)",
    zIndex: 1000,
    alignItems: "center",
    justifyContent: "center",
  },

  searchButton: {
    position: "absolute",
    right: 30,
    padding: 10,
  },

  hero: {
    height: 670,
    width: "100%",
    justifyContent: "center",
  },

  heroMobile: {
    height: 520,
  },

  heroText: {
    maxWidth: 640,
    marginLeft: 74,
    marginTop: 140,
    padding: 24,
  },

  heroTextMobile: {
    marginLeft: 0,
    marginTop: 100,
    paddingHorizontal: 24,
  },

  title: {
    fontFamily: "Georgia",
    fontSize: 66,
    lineHeight: 70,
    color: "#202020",
  },

  titleMobile: {
    fontSize: 36,
    lineHeight: 44,
  },

  subtitle: {
    fontSize: 32,
    lineHeight: 40,
    color: "#333333",
    marginTop: 18,
    marginBottom: 28,
  },

  subtitleMobile: {
    fontSize: 20,
    lineHeight: 28,
  },

  buttonWrapper: {
    alignSelf: "flex-start",
  },

  button: {
    backgroundColor: "#49382B",
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 8,
  },

  buttonPressed: {
    backgroundColor: "#604936",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "600",
  },

  section: {
    width: "100%",
    maxWidth: 1500,
    alignSelf: "center",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 24,
  },

  categoryCard: {
    backgroundColor: "#f4f1ec",
  },

  categoryImage: {
    width: "100%",
    aspectRatio: 1.15,
  },

  categoryInfo: {
    padding: 18,
  },

  categoryName: {
    fontFamily: "Georgia",
    fontSize: 28,
    color: "#202020",
  },

  age: {
    marginTop: 6,
    fontSize: 15,
    color: "#666666",
  },

  sectionTitle: {
    fontFamily: "Georgia",
    fontSize: 36,
    marginBottom: 22,
    color: "#202020",
  },

  productPlaceholder: {
    aspectRatio: 1,
    backgroundColor: "#f4f1ec",
    alignItems: "center",
    justifyContent: "center",
  },

  placeholderText: {
    color: "#777777",
  },

  productName: {
    fontSize: 15,
    marginTop: 12,
    color: "#333333",
  },

  price: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 6,
  },

  footer: {
    padding: 30,
    marginTop: 30,
    backgroundColor: "#f4f1ec",
    alignItems: "center",
  },

  footerText: {
    color: "#555555",
    textAlign: "center",
  },
});