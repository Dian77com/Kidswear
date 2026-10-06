import { useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

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

  function goToCollection() {
    scrollRef.current?.scrollTo({
      y: collectionY.current,
      animated: true,
    });
  }

  return (
    <ScrollView ref={scrollRef} style={styles.page}>
      {/* HEADER */}
      <View style={[styles.header, mobile && styles.headerMobile]}>
        <Image
          source={require("../assets/bebe.jpg")}
          style={styles.logo}
          resizeMode="contain"
          accessibilityLabel="Kidswear"
        />

        <View style={styles.menu}>
          {categories.map((category) => (
            <Text key={category.name} style={styles.menuText}>
              {category.name}
            </Text>
          ))}
        </View>
      </View>

      {/* FOTOJA DHE TITULLI KRYESOR */}
      <ImageBackground
        source={require("../assets/bebe.jpg")}
        style={[styles.hero, mobile && styles.heroMobile]}
        resizeMode="cover"
      >
        <View style={styles.heroText}>
          <Text style={[styles.title, mobile && styles.titleMobile]}>
            Stil i vogël.{"\n"}Gëzim i madh.
          </Text>

          <Text style={styles.subtitle}>
            Veshje të rehatshme për çdo aventurë.
          </Text>

          <Pressable
            onPress={goToCollection}
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>Bli tani →</Text>
          </Pressable>
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
                <Text style={styles.age}>{category.age}</Text>
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
        <Text style={styles.sectionTitle}>Koleksioni i ri</Text>

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

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          KIDSWEAR · Veshje për të vegjlit
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingVertical: 18,
  },
  headerMobile: {
    paddingHorizontal: 20,
  },
  logo: {
    width: 110,
    height: 110,
  },
  menu: {
    flexDirection: "row",
    gap: 20,
  },
  menuText: {
    fontSize: 16,
    color: "#242424",
  },
  hero: {
    minHeight: 520,
    justifyContent: "center",
    width:"100%",
  },
  heroMobile: {
    minHeight: 420,
  },
  heroText: {
    maxWidth: 480,
    margin: 24,
    padding: 24,
    backgroundColor: "rgba(250,247,241,0.85)",
  },
  title: {
    fontFamily: "Georgia",
    fontSize: 56,
    lineHeight: 64,
    color: "#202020",
  },
  titleMobile: {
    fontSize: 36,
    lineHeight: 44,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 26,
    color: "#333333",
    marginTop: 18,
    marginBottom: 28,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#252525",
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 17,
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