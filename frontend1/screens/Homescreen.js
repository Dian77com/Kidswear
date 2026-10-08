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
  Linking,
} from "react-native";

const HEADER_HEIGHT = 70;

// Vendosi kontaktet reale këtu.
const CONTACT_EMAIL = "";
const CONTACT_PHONE = ""; // Me prefiks, p.sh. +383...
const CONTACT_ADDRESS = "";
const CONTACT_INSTAGRAM = ""; // Linku i plotë
const CONTACT_FACEBOOK = ""; // Linku i plotë

const categories = [
  {
    name: "Bebe",
    age: "0–2 vjeç",
    image: require("../assets/bebe2.png"),
  },
  {
    name: "Vajza",
    age: "2–12 vjeç",
    image: require("../assets/vajza.png"),
  },
  {
    name: "Djem",
    age: "2–12 vjeç",
    image: require("../assets/boy.png"),
  },
];

const products = [
  { id: 1, name: "Cardigan trikotazh", price: 34 },
  { id: 2, name: "Bluzë me vija", price: 28 },
  { id: 3, name: "Fustan me volane", price: 42 },
  { id: 4, name: "Pantallona të rehatshme", price: 32 },
];

function openContact(url) {
  Linking.openURL(url).catch((error) => {
    console.warn("Kontakti nuk mund të hapet:", error);
  });
}

function CategoryCard({ category, mobile }) {
  const hover = useRef(new Animated.Value(0)).current;

  function animateHover(value) {
    Animated.spring(hover, {
      toValue: value,
      friction: 8,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View
      style={[
        styles.categoryCard,
        {
          width: mobile ? "100%" : "31.5%",
          transform: [
            {
              translateY: hover.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -6],
              }),
            },
            {
              scale: hover.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.02],
              }),
            },
          ],
        },
      ]}
    >
      <Pressable
        onHoverIn={() => animateHover(1)}
        onHoverOut={() => animateHover(0)}
        style={styles.categoryContent}
      >
        <Image
          source={category.image}
          style={styles.categoryImage}
          resizeMode="cover"
          accessibilityLabel={category.name}
        />

        <View style={styles.categoryInfo}>
          <View>
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.age}>{category.age}</Text>
          </View>

          <Ionicons name="arrow-forward" size={22} color="#49382B" />
        </View>
      </Pressable>
    </Animated.View>
  );
}

function ProductCard({ product, mobile }) {
  const hover = useRef(new Animated.Value(0)).current;

  function animateHover(value) {
    Animated.spring(hover, {
      toValue: value,
      friction: 8,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }

  return (
    <Animated.View
      style={{
        width: mobile ? "47%" : "23%",
        transform: [
          {
            translateY: hover.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -6],
            }),
          },
          {
            scale: hover.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 1.02],
            }),
          },
        ],
      }}
    >
      <Pressable
        onHoverIn={() => animateHover(1)}
        onHoverOut={() => animateHover(0)}
      >
        <View style={styles.productPlaceholder}>
          <Text style={styles.placeholderText}>Foto e produktit</Text>
        </View>

        <Text style={styles.productName}>{product.name}</Text>

        <Text style={styles.price}>
          €{product.price.toFixed(2)}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

function ContactRow({ icon, label, value, url }) {
  const content = (
    <>
      <View style={styles.contactIcon}>
        <Ionicons name={icon} size={22} color="#49382B" />
      </View>

      <View style={styles.contactDetails}>
        <Text style={styles.contactLabel}>{label}</Text>
        <Text style={styles.contactValue}>{value}</Text>
      </View>

      {url ? (
        <Ionicons name="arrow-forward" size={18} color="#49382B" />
      ) : null}
    </>
  );

  if (!url) {
    return <View style={styles.contactRow}>{content}</View>;
  }

  return (
    <Pressable
      accessibilityRole="link"
      accessibilityLabel={`${label}: ${value}`}
      onPress={() => openContact(url)}
      style={({ pressed }) => [
        styles.contactRow,
        pressed && styles.contactRowPressed,
      ]}
    >
      {content}
    </Pressable>
  );
}

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const mobile = width < 700;

  const scrollRef = useRef(null);
  const collectionY = useRef(0);
  const buttonScale = useRef(new Animated.Value(1)).current;

  const whatsappNumber = CONTACT_PHONE.replace(/\D/g, "");
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : undefined;

  function goToTop() {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

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
        <ImageBackground
          source={require("../assets/design7.png")}
          style={[styles.hero, mobile && styles.heroMobile]}
          resizeMode="cover"
        >
          <View style={[styles.heroText, mobile && styles.heroTextMobile]}>
            <Text style={[styles.title, mobile && styles.titleMobile]}>
              Stil i vogël.{"\n"}Gëzim i madh.
            </Text>

            <Text style={[styles.subtitle, mobile && styles.subtitleMobile]}>
              Veshje të rehatshme për çdo aventurë.
            </Text>

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
                <Text style={styles.buttonText}>Bli tani</Text>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
              </Pressable>
            </Animated.View>
          </View>
        </ImageBackground>

        <View style={styles.section}>
          <View style={styles.grid}>
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                category={category}
                mobile={mobile}
              />
            ))}
          </View>
        </View>

        <View
          style={styles.section}
          onLayout={(event) => {
            collectionY.current = event.nativeEvent.layout.y;
          }}
        >
          <Text style={styles.sectionTitle}>Koleksioni i ri</Text>

          <View style={styles.grid}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                mobile={mobile}
              />
            ))}
          </View>
        </View>

        <View style={styles.contactSection}>
          <View
            style={[
              styles.contactContainer,
              mobile && styles.contactContainerMobile,
            ]}
          >
            <View
              style={[
                styles.contactIntro,
                mobile && styles.contactIntroMobile,
              ]}
            >
              <Text style={styles.contactEyebrow}>JEMI KËTU PËR TY</Text>
              <Text style={styles.contactTitle}>Na kontakto</Text>

              <Text style={styles.contactDescription}>
                Ke pyetje për madhësitë, produktet apo porosinë? Na shkruaj
                dhe të ndihmojmë të zgjedhësh për të vegjlit e tu.
              </Text>

              {whatsappUrl ? (
                <Pressable
                  accessibilityRole="link"
                  accessibilityLabel="Na shkruaj në WhatsApp"
                  onPress={() => openContact(whatsappUrl)}
                  style={({ pressed }) => [
                    styles.whatsappButton,
                    pressed && styles.buttonPressed,
                  ]}
                >
                  <Ionicons
                    name="logo-whatsapp"
                    size={22}
                    color="#FFFFFF"
                  />
                  <Text style={styles.buttonText}>
                    Na shkruaj në WhatsApp
                  </Text>
                </Pressable>
              ) : null}
            </View>

            <View
              style={[
                styles.contactCard,
                mobile && styles.contactCardMobile,
              ]}
            >
              <ContactRow
                icon="mail-outline"
                label="Email"
                value={CONTACT_EMAIL || "Emaili do të shtohet së shpejti"}
                url={
                  CONTACT_EMAIL
                    ? `mailto:${CONTACT_EMAIL.trim()}`
                    : undefined
                }
              />

              <ContactRow
                icon="call-outline"
                label="Telefon"
                value={CONTACT_PHONE || "Numri do të shtohet së shpejti"}
                url={
                  CONTACT_PHONE
                    ? `tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`
                    : undefined
                }
              />

              <ContactRow
                icon="logo-instagram"
                label="Instagram"
                value={
                  CONTACT_INSTAGRAM
                    ? "Na ndiq në Instagram"
                    : "Profili do të shtohet së shpejti"
                }
                url={CONTACT_INSTAGRAM || undefined}
              />

              <ContactRow
                icon="logo-whatsapp"
                label="WhatsApp"
                value={CONTACT_PHONE || "Numri do të shtohet së shpejti"}
                url={whatsappUrl}
              />

              <ContactRow
                icon="logo-facebook"
                label="Facebook"
                value={
                  CONTACT_FACEBOOK
                    ? "Na ndiq në Facebook"
                    : "Faqja do të shtohet së shpejti"
                }
                url={CONTACT_FACEBOOK || undefined}
              />

              {CONTACT_ADDRESS ? (
                <ContactRow
                  icon="location-outline"
                  label="Adresa"
                  value={CONTACT_ADDRESS}
                />
              ) : null}
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerBrand}>KIDSWEAR</Text>

          <Text style={styles.footerText}>
            Veshje për të vegjlit, të zgjedhura me dashuri.
          </Text>

          <View style={styles.footerDivider} />

          <Text style={styles.copyright}>
            © {new Date().getFullYear()} KIDSWEAR. Të gjitha të drejtat
            e rezervuara.
          </Text>

          <Text style={styles.credit}>
            U punua nga{" "}
            <Text style={styles.creditBrand}>Tevuzo</Text>
          </Text>
        </View>
      </ScrollView>

      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="KIDSWEAR — kthehu në fillim"
            onPress={goToTop}
            style={styles.logoButton}
          >
            <Image
              source={require("../assets/logo.png")}
              style={styles.headerLogo}
              resizeMode="contain"
            />
          </Pressable>

          <Pressable
            style={styles.searchButton}
            accessibilityRole="button"
            accessibilityLabel="Kërko produkte"
            onPress={() => {
              // Shto këtu hapjen e kërkimit.
            }}
          >
            <Ionicons name="search-outline" size={24} color="#49382B" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
    backgroundColor: "rgba(250,247,241,0.96)",
    borderBottomWidth: 1,
    borderBottomColor: "#E8DED3",
    zIndex: 1000,
  },

  headerContent: {
    width: "100%",
    maxWidth: 1500,
    height: "100%",
    alignSelf: "center",
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logoButton: {
    width: 62,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
  },

  headerLogo: {
    width: 60,
    height: 60,
  },

  searchButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
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
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#49382B",
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 8,
  },

  buttonPressed: {
    backgroundColor: "#604936",
  },

  buttonText: {
    color: "#FFFFFF",
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
    backgroundColor: "#F4F1EC",
    borderRadius: 12,
    overflow: "hidden",
  },

  categoryContent: {
    width: "100%",
  },

  categoryImage: {
    width: "100%",
    height: 300,
  },

  categoryInfo: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    backgroundColor: "#F4F1EC",
    borderRadius: 8,
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
    color: "#49382B",
  },

  contactSection: {
    marginTop: 48,
    paddingHorizontal: 24,
    paddingVertical: 64,
    backgroundColor: "#F4F1EC",
  },

  contactContainer: {
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 40,
  },

  contactContainerMobile: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: 28,
  },

  contactIntro: {
    flex: 1,
    maxWidth: 540,
  },

  contactIntroMobile: {
    flex: 0,
    maxWidth: "100%",
  },

  contactEyebrow: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 2,
    color: "#9A7355",
    marginBottom: 12,
  },

  contactTitle: {
    fontFamily: "Georgia",
    fontSize: 42,
    color: "#49382B",
    marginBottom: 16,
  },

  contactDescription: {
    fontSize: 17,
    lineHeight: 28,
    color: "#655A50",
  },

  whatsappButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 24,
    paddingHorizontal: 22,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: "#49382B",
  },

  contactCard: {
    flex: 1,
    maxWidth: 460,
    padding: 12,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E8DED3",
    gap: 8,
  },

  contactCardMobile: {
    flex: 0,
    width: "100%",
    maxWidth: "100%",
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    padding: 16,
    borderRadius: 10,
  },

  contactRowPressed: {
    backgroundColor: "#F4F1EC",
  },

  contactIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#F4F1EC",
    alignItems: "center",
    justifyContent: "center",
  },

  contactDetails: {
    flex: 1,
  },

  contactLabel: {
    fontSize: 13,
    color: "#82766A",
    marginBottom: 5,
  },

  contactValue: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "500",
    color: "#49382B",
  },

  footer: {
    paddingHorizontal: 24,
    paddingVertical: 36,
    backgroundColor: "#49382B",
    alignItems: "center",
  },

  footerBrand: {
    fontFamily: "Georgia",
    fontSize: 28,
    letterSpacing: 3,
    color: "#FFFFFF",
    marginBottom: 12,
  },

  footerText: {
    color: "#E7DACE",
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
  },

  footerDivider: {
    width: "100%",
    maxWidth: 1200,
    height: 1,
    backgroundColor: "rgba(255,255,255,0.15)",
    marginVertical: 24,
  },

  copyright: {
    color: "#E7DACE",
    fontSize: 12,
    lineHeight: 20,
    textAlign: "center",
  },

  credit: {
    marginTop: 12,
    fontSize: 12,
    color: "#E7DACE",
    textAlign: "center",
  },

  creditBrand: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});