import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {useState} from "react";
import { Checkbox } from "expo-checkbox";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
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
import { VirtualViewMode } from "react-native";
const HEADER_HEIGHT = 70;

export default function Koleksioni({ndryshoFaqen}){
    const HEADER_HEIGHT = 70;

  
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

  var objects={
    "bebe":false,
    "djem":false,
    "vajza":false,
    "month03":false,
    "month36":false,
    "month612":false,
    "year12":false,
    "year24":false,
    "year46":false,
  }
  var colorobjects={
    "ngjyra1":false,
    "ngjyra2":false,
    "ngjyra3":false,
    "ngjyra4":false,
  }
  const[checkobjects,stateObjects]=useState(objects)
  const[cmimi,stateCmimi]=useState([4,100])
  const[border,stateBorder]=useState(colorobjects)

  const[hapur,setHapur]=useState(false);
  const[zgjedhja,setZgjedhja]=useState("zgjedh kategorin");


  const opsionet=["Me te rejat","Me te vjetrat","te gjitha"];
  const shopcarts={
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
  }
  const[shopclick,setShopclick]=useState(shopcarts);



  const products=[{
    id:1,foto:require("../assets/bebe2.png"),categoria:"Bebe",pershkrimi:"sete per bebja",price:34,
  
  },
  {
    id:2,foto:require("../assets/bebe2.png"),categoria:"Bebe",pershkrimi:"sete per bebja",price:34,
  
  },
  {
    id:3,foto:require("../assets/bebe2.png"),categoria:"Bebe",pershkrimi:"sete per bebja",price:34,
  },
  {
        id:4,foto:require("../assets/bebe2.png"),categoria:"Bebe",pershkrimi:"sete per bebja",price:34,

  }];







   
  return(
    <View style={styles.container}>
    
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
                
          <View style={styles.Bcategory}>
            <Pressable style={styles.pressable21} onPress={()=>ndryshoFaqen("home")}>
              <Ionicons name="home-outline" size={20} color="#49382B"   />
              <Text style={{fontSize:20,color:"#49382B",fontFamily:"Poppins_400Regular", marginTop:4}}>Ballina</Text>
            </Pressable>
            <Pressable style={styles.pressable22} >
              <Ionicons name="grid-outline" size={20} color="#49382B"  />
              <Text style={{fontSize:20,color:"#49382B",fontFamily:"Poppins_400Regular",}}>Koleksioni</Text>
            </Pressable>
            <Pressable style={styles.pressable23}>
              <Ionicons name="pricetag-outline" size={20} color="#49382B"  />
              <Text style={{fontSize:20,color:"#49382B",fontFamily:"Poppins_400Regular",}}>Ofertat</Text>
            </Pressable>
      
      
      
          </View>
          <Pressable
            style={styles.searchButton}
            accessibilityRole="button"
            accessibilityLabel="shop"
            onPress={() => {
            }}
            >
              <Ionicons name="cart-outline" size={24} color="#49382B" />
          </Pressable>

      
    
      
      
                  
      
        </View>
      </View>
      <ScrollView style={styles.scrollview}>
        <View style={styles.Route}>
          <Text style={styles.RouteT}>Ballina</Text>
          <Text style={styles.RouteT}>/Koleksioni</Text>

        </View>
        <View style={styles.Body}>
          <View style={styles.Koleksionet}>
            <Text style={styles.HeaderK}>
              Koleksionet
            </Text>
            <Text style={styles.TextK}>
              Zbulo veshje për të vegjlit e tu.
            </Text>
          </View>
          <View style={styles.categoryKoleksionet}>

            <ImageBackground
              source={require("../assets/bebe2.png")}
              style={styles.bebe}
              resizeMode="cover"
            >
              <View style={styles.Div}>
                <Text style={styles.Divtext}>
                  Bebe
                </Text>
                <Ionicons name="arrow-forward" size={24} color="#49382B" />


              </View>

            </ImageBackground>
            <ImageBackground
              source={require("../assets/vajza.png")}
              style={styles.bebe}
              resizeMode="cover"
            >
              <View style={styles.Div}>
                <Text style={styles.Divtext}>
                  Vajza
                </Text>
                <Ionicons name="arrow-forward" size={24} color="#49382B" />

              </View>

            </ImageBackground>
            <ImageBackground
              source={require("../assets/boy.png")}
              style={styles.bebe}
              resizeMode="cover"
            >
              <View style={styles.Div}>
                <Text style={styles.Divtext}>
                  Djem
                </Text>
                <Ionicons name="arrow-forward" size={24} color="#49382B" />

              </View>

            </ImageBackground>
          </View>
          <View style={styles.filterprodukts}>
            <View style={styles.Filter}>
              <View style={styles.Fheader}>
                <Text style={styles.Ftext}>Filtro Produktet</Text>
                <Pressable
                  onPress={() => {
                    stateObjects((vlerat) =>
                      Object.fromEntries(
                        Object.keys(vlerat).map((emri) => [emri, false])
                      )
                    );
                  }}
                  ><Text style={styles.Ftext2}>Pastro Filtrimet</Text></Pressable>
              </View>
              <View style={styles.Fkategory}>
                <Text style={styles.Ftext3}>Kategoria</Text>
                <View style={styles.checkboxs}>
                  <View style={styles.checkbox1}>
                    <Checkbox
                      color="#49382ba9"
                      value={checkobjects.bebe}
                      onValueChange={(vleraEre) =>
                        stateObjects((gjendjaMeparshme) => ({
                          ...gjendjaMeparshme,
                          bebe: vleraEre,
                        }))
                      }
                    />                    

                    <Text style={styles.chtext}>Bebe</Text>

                  </View>
                  <View style={styles.checkbox1}>
                    <Checkbox
                      color="#49382ba9"
                      value={checkobjects.vajza}
                      onValueChange={(vleraEre) =>
                        stateObjects((gjendjaMeparshme) => ({
                          ...gjendjaMeparshme,
                          vajza: vleraEre,
                        }))
                      }
                    /> 
                    <Text style={styles.chtext}>Vajza</Text>

                  </View>
                  <View style={styles.checkbox1}>
                    <Checkbox
                      color="#49382ba9"
                      value={checkobjects.djem}
                      onValueChange={(vleraEre) =>
                        stateObjects((gjendjaMeparshme) => ({
                          ...gjendjaMeparshme,
                          djem: vleraEre,
                        }))
                      }
                    /> 
                    <Text style={styles.chtext}>Djem</Text>

                  </View>

                </View>
                <View style={styles.line}/>

                <View style={styles.checkboxs}>
                  <Text style={styles.Ftext3}>Madhesia</Text>
                  <View style={styles.checkbox1}>
                    <Checkbox
                      color="#49382ba9"
                      value={checkobjects.month03}
                      onValueChange={(vleraEre) =>
                        stateObjects((gjendjaMeparshme) => ({
                          ...gjendjaMeparshme,
                          month03: vleraEre,
                        }))
                      }
                    /> 
                    <Text style={styles.chtext}>Month 0-3</Text>

                  </View>
                  <View style={styles.checkbox1}>
                    <Checkbox
                      color="#49382ba9"
                      value={checkobjects.month36}
                      onValueChange={(vleraEre) =>
                        stateObjects((gjendjaMeparshme) => ({
                          ...gjendjaMeparshme,
                          month36: vleraEre,
                        }))
                      }
                    /> 
                    <Text style={styles.chtext}>Month 3-6</Text>

                  </View>
                  <View style={styles.checkbox1}>
                    <Checkbox
                      color="#49382ba9"
                      value={checkobjects.month612}
                      onValueChange={(vleraEre) =>
                        stateObjects((gjendjaMeparshme) => ({
                          ...gjendjaMeparshme,
                          month612: vleraEre,
                        }))
                      }
                    /> 
                    <Text style={styles.chtext}>Month 6-12</Text>

                  </View>
                  <View style={styles.checkbox1}>
                    <Checkbox
                      color="#49382ba9"
                      value={checkobjects.year12}
                      onValueChange={(vleraEre) =>
                        stateObjects((gjendjaMeparshme) => ({
                          ...gjendjaMeparshme,
                          year12: vleraEre,
                        }))
                      }
                    /> 
                    <Text style={styles.chtext}>year 1-2</Text>

                  </View>
                  <View style={styles.checkbox1}>
                    <Checkbox
                      color="#49382ba9"
                      value={checkobjects.year24}
                      onValueChange={(vleraEre) =>
                        stateObjects((gjendjaMeparshme) => ({
                          ...gjendjaMeparshme,
                          year24: vleraEre,
                        }))
                      }
                    /> 
                    <Text style={styles.chtext}>year 2-4</Text>

                  </View>
                  <View style={styles.checkbox1}>
                    <Checkbox
                      color="#49382ba9"
                      value={checkobjects.year46}
                      onValueChange={(vleraEre) =>
                        stateObjects((gjendjaMeparshme) => ({
                          ...gjendjaMeparshme,
                          year46: vleraEre,
                        }))
                      }
                    /> 
                    <Text style={styles.chtext}>year 4-6</Text>

                  </View>
                  <View style={styles.line}/>
                  <View style={styles.PriceCategory}>
                    <Text style={styles.Ftext3}>Cmimi</Text>
                    <MultiSlider
                    containerStyle={{marginLeft:15}}
                    values={cmimi}
                    min={4}
                    max={100}
                    step={1}
                    sliderLength={250}
                    onValuesChange={stateCmimi}
                    selectedStyle={{backgroundColor:"#49382B",height:4,}}
                    markerStyle={{backgroundColor:"#49382B",width:17,height:17}}


                    />
                    <View style={styles.CmimiText}>
                      <Text style={{fontFamily:"Poppins_600SemiBold",color:"#49382B"}}>{cmimi[0]}€
                      </Text>
                      <Text style={{fontFamily:"Poppins_600SemiBold",color:"#49382B"}}>{cmimi[1]}€
                      </Text>

                    </View>





                  </View>
                  <View style={styles.line}/>
                  <View style={styles.Ngjyrat}>
                    <Text style={styles.Ftext3}>Ngjyrat</Text>
                    <View style={styles.Cngjyrat}>
                      <Pressable style={[styles.Pressable1N,{borderColor:border.ngjyra1?"#49382B":"#E8DED3",backgroundColor:"#D5BCA5"}]} onPress={()=>stateBorder((gjendjaMeparshme)=>({...gjendjaMeparshme,ngjyra1:!gjendjaMeparshme.ngjyra1,}))}></Pressable>
                      <Pressable style={[styles.Pressable1N,{borderColor:border.ngjyra2?"#49382B":"#E8DED3",backgroundColor:"#C8958A"}]} onPress={()=>stateBorder((gjendjaMeparshme)=>({...gjendjaMeparshme,ngjyra2:!gjendjaMeparshme.ngjyra2,}))}></Pressable>
                      <Pressable style={[styles.Pressable1N,{borderColor:border.ngjyra3?"#49382B":"#E8DED3",backgroundColor:"#85856E"}]} onPress={()=>stateBorder((gjendjaMeparshme)=>({...gjendjaMeparshme,ngjyra3:!gjendjaMeparshme.ngjyra3,}))}></Pressable>
                      <Pressable style={[styles.Pressable1N,{borderColor:border.ngjyra4?"#49382B":"#E8DED3",backgroundColor:"#FEFEFE"}]} onPress={()=>stateBorder((gjendjaMeparshme)=>({...gjendjaMeparshme,ngjyra4:!gjendjaMeparshme.ngjyra4,}))}></Pressable>

                    </View>
                  </View>

                  

                
              </View>
            </View>
            </View>
            <View style={styles.Produkts}>
              <View style={styles.FilterProdukts}>
                <Text style={{fontFamily:"Poppins_600SemiBold",color:"#49382B",fontSize:20,}}>12 produkte</Text>
                <Text style={{marginLeft:650,fontFamily:"Poppins_600SemiBold",color:"#49382B",marginTop:10}}>Rendit sipas:</Text>
                <View style={styles.dropdown}>
                  <Pressable
                  style={styles.buttonDr}
                  onPress={()=>setHapur((vlera)=>!vlera)}
                  >
                    <Text>{zgjedhja}</Text>
                    <Text>
                    {hapur?
                      <Ionicons name="chevron-up" size={20} color="#49382B"  /> :
                      <Ionicons name="chevron-down" size={20} color="#49382B" />}
                    </Text>
                  </Pressable>
                  {hapur && (
                    <View style={styles.lista}>
                      {opsionet.map((opsioni)=>(
                        <Pressable
                        key={opsioni}
                        style={styles.Opioni}
                        onPress={()=>{
                          setZgjedhja(opsioni);
                          setHapur(false);

                        }}>
                        <Text>{opsioni}</Text>
                        <View style={styles.Ln}></View>

                        </Pressable>
                        
                      ))}
                    </View>
                  )}
                </View>



              </View>
              <View style={styles.products}>
                {products.map((product)=>(
                  <View style={styles.producti} key={product.id}>
                    <ImageBackground source={product.foto} style={styles.imagebackround}imageStyle={{borderRadius:10,}}>
                        <Pressable  style={[{backgroundColor:shopclick[1]?"#49382b":"none"},styles.buttonShop]} onPress={()=>setShopclick(prev=>({...prev,[1]:!prev[1]}))} >
                          <Ionicons name="cart-outline" size={20} style={{color:shopclick[1]?"#white":"none"}  } onPress={()=>setShopclick(prev=>({...prev,[1]:!prev[1]}))} />  
                        </Pressable>
                    </ImageBackground>
                    <View style={styles.textProduct}>
                      <View style={styles.textProducts}>
                        <Text style={styles.categoriaT}>{product.categoria}</Text>
                        <Text style={styles.pershkrimiT}>{product.pershkrimi}</Text>
                        <Text style={styles.priceT}>{product.price}€</Text>
                      </View>
                      <View style={styles.shopButton}>


                      </View>

                    </View>


                  </View>
                ))}

              </View>



            </View>
          </View>
        </View>
      
      </ScrollView>
    </View>
    
)}
const styles =StyleSheet.create({
      header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: HEADER_HEIGHT,
        backgroundColor: "#FDF8F2",
        borderBottomWidth: 1,
        borderBottomColor: "#E8DED3",
        borderBottomWidth: 1,
        zIndex: 10,

      },
      imageP:{
        marginTop:10,

      },

      imagebackround:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:310,
        height:330,
        borderRadius:20,

        

      },
      textProduct:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"space-between",
        flexDirection:"row",
      },
      buttonShop:{
        width:30,
        height:30,
        borderRadius:5,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        cursor:"pointer",
        marginTop:20,
        marginRight:10,
        border:"1px solid #E8DED3",
      },
      iconShop:{
        width:"fit-content",

      },
      categoriaT:{
        marginTop:10,
        textTransform:"uppercase",
        fontFamily:"Poppins_600SemiBold",
        color:	"#806B59",
        
      },
      pershkrimiT:{
        fontFamily:"Poppins_400Regular",
        color:"#49382B",
        fontSize:18,
      },
      priceT:{
        fontFamily:"Poppins_600SemiBold",
        color:"#49382B",
        fontSize:18,
      },
      dropdown:{
        position:"relative",
        zIndex:100,
        backgroundColor:"#F8F3EC",

      },
      products:{
        width:"100%",
        height:"auto",
        backgroundColor:"#FDF7F0",
        display:"flex",
        justifyContent:"left",
        alignItems:"center",
        flexDirection:"row",
        gap:23,
        flexWrap:"wrap",
      },
      producti:{
        width:330,
        height:430,
        backgroundColor:"white",
        display:"flex",
        justifyContent:"top",
        alignItems:"left",
        padding:10,
        border:"1px solid #E8DED3",
        borderRadius:10,
        cursor:"pointer",
        

      },

      Pressable1N:{
        backgroundColor:"red",
        width:40,
        height:40,
        borderRadius:"100%",
        borderWidth:2,

      },

      MultiSlider:{
        marginLeft:130,
      },
      FilterProdukts:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"white",
        height:45,
        zIndex:10,


      },
      Cngjyrat:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"left",
        gap:20,
        marginTop:20,
        
      },
      Ln:{
        width:110,
        height:1,
        backgroundColor:"#49382B",
        marginTop:10,
      },
      CmimiText:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        width:267,
        marginLeft:10,
        fontFamily:"Poppins_600SemiBold",
      },
      checkboxs:{
        marginTop:10,
        display:"flex",
        justifyContent:"left",
        flexDirection:"column",
        gap:10,

      },

      Fkategory:{
        marginTop:20,
      },
      chtext:{
        fontFamily:"Poppins_400Regular",
        color:"#49382B",
      },
      Ftext3:{
        fontFamily:"Poppins_600SemiBold",
        color:"#49382B"
      },
      PriceCategory:{
        height:100,

      },
       container: {
       width: 250,
      },

      buttonDr: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        borderWidth: 1,
        borderColor: "#49382B",
        borderRadius:5,
        backgroundColor: "white",
        gap:20,
      },
      lista: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: "#49382B",
        borderRadius: 8,
        backgroundColor: "#FFF4E8",
      },
      Opioni: {
        padding: 12,

      },
      Filter:{
        backgroundColor:"#E8DED3",
        height:"auto",
        width:"25%",
        display:"flex",
        padding:20,
        borderRadius:15,
        overflow: "hidden",

      },
      line:{
        marginTop:30,
        width:300,
        height:2,
        backgroundColor:"#bdb2ab63",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        borderRadius:100,

      },
      container:{
        flex:1,
        backgroundColor:"#FDF8F2",
      },
      Fheader:{
        justifyContent:"space-between",
        flexDirection:"row",

      },
      Ftext:{
        fontSize:20,
        color:"#49382B",
        fontFamily:"Poppins_600SemiBold"
      },
      Ftext2:{
        color:"#433a32",
        marginTop:5,
        fontFamily:"Poppins_400Regular",
        textDecorationColor:"#433a32",
        textDecorationLine:"underline",


      },
      
      Produkts:{
        backgroundColor:"white",
        height:500,
        width:"75%",
        borderRadius:20,


      },
      filterprodukts:{
        display:"flex",
        justifyContent:"center",
        alignItems:"space-betwen",
        flexDirection:"row",
        marginTop:20,
        gap:20,
        width:"90%",




      },
      checkbox1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"left",
        alignItems:"center",
        gap:10,
      },

      Divtext:{
        fontSize:25,
        fontFamily:"Poppins_400Regular",
        color:"#49382B",
      },
      Div:{
        width:200,
        height:70,
        backgroundColor:"#E8DED3",
        borderTopEndRadius:10,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        gap:10,
        cursor:"pointer",

      },
      bebe:{
        width:450,
        height:300,
        borderRadius:20,
        overflow: "hidden",
        display:"flex",
        justifyContent:"end",
        alignItems:"right",
        flexDirection:"column",
        cursor:"pointer",

      },
      Koleksionet:{
        backgroundColor:"#ffffff",
        width:"95%",
        height:200,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        borderRadius:20,

        



      },
      HeaderK:{
        fontFamily:"Poppins_600SemiBold",
        fontSize:40,
        color:"#49382B",

      },
      TextK:{
        fontFamily:"Poppins_600Regular",
        color:"#b58f68",

      },
      Route:{
        display:"flex",
        justifyContent:"left",
        flexDirection:"row",
        marginTop:80,
        gap:3,
        marginLeft:20,
        fontFamily:"Poppins_400Regular",


      },
      ContianerK:{
        maxWidth:"100%",
        height:"auto",
      },
      Body:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        width:"100vw", 
        height:"auto",
        marginTop:10,
        
      },
      RouteT:{
        fontFamily:"Poppins_400Regular",
   
      },
      headerLogo: {
        width: 60,
        height: 60,
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
      button: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        backgroundColor: "#49382B",
        paddingHorizontal: 30,
        paddingVertical: 16,
        borderRadius: 8,
        fontFamily:"Poppins_400Regular",

      },
      buttonPressed: {
       backgroundColor: "#604936",
      },
      
      logoButton: {
        width: 62,
        height: 62,
        alignItems: "center",
        justifyContent: "center",
      },
      categoryKoleksionet:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"row",
        gap:20,
      },

         
      
      Bcategory: {
       flexDirection: "row",
       alignItems: "center",
       gap: 28,
       flex:1,
       marginLeft:58,
      },
      pressable22: {
        flexDirection:"row",
        gap:3,
        alignItems:"center",
        fontFamily:"Poppins_400Regular",
        borderBottomWidth:2,
        borderBottomColor:"#49382B",

      },
      pressable23:{
        flexDirection:"row",
        gap:3,
        alignItems:"center",
        fontFamily:"Poppins_400Regular",


      },
      pressable21:{
        flexDirection:"row",
        gap:3,
        paddingBottom:3, 
        alignItems:"center",
        fontFamily:"Poppins_400Regular",
    
      },
    }
  )

  
