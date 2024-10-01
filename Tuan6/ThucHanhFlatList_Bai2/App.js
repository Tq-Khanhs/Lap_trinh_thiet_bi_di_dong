import { StyleSheet, Text, View ,Image, FlatList ,SafeAreaView, TextInput, Touchable, TouchableOpacity} from 'react-native';
import { ArrowLeft, Home, Search, ShoppingCart,Menu } from 'lucide-react-native'; 


const  produtcts =[
  {
    id: '1',
    name:'Cáp chuyển từ cổng USB sang PS2...',
    rating:4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
    image: require('./assets/giacchuyen 1.png'),
  },
  {
    id: '2',
    name:'Cáp chuyển từ cổng USB sang PS2...',
    rating:4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
    image: require('./assets/daynguon 1.png'),
  },
  {
    id: '3',
    name:'Cáp chuyển từ cổng USB sang PS2...',
    rating:4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
    image: require('./assets/dauchuyendoipsps2 1.png'),
  },
  {
    id: '4',
    name:'Cáp chuyển từ cổng USB sang PS2...',
    rating:4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
    image: require('./assets/dauchuyendoi 1.png'),
  },
  {
    id: '5',
    name:'Cáp chuyển từ cổng USB sang PS2...',
    rating:4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
    image: require('./assets/daucam 1.png'),
  },
  {
    id: '6',
    name:'Cáp chuyển từ cổng USB sang PS2...',
    rating:4,
    reviews: 15,
    price: '69.900 đ',
    discount: '-39%',
    image: require('./assets/carbusbtops2 1.png'),
  },
]


const ProductItem = ({item}) =>
  <View style={styles.productItem}>
    <Image source={item.image} style={styles.productImage} />
    <Text style={styles.productName} numberOfLines={2} >{item.name} </Text>
    <Image source={require("./assets/Group 4.png")} style={styles.productRating} />
    <Text style={styles.price}>{item.price} </Text>
    <Text style={styles.discount}>{item.discount}</Text>
  </View>



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ArrowLeft color="#fff" size={24} />
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Dây cáp usb" 
            placeholderTextColor="#999"
          />
          <Search color="#999" size={20} style={styles.searchIcon} />
        </View>
        <ShoppingCart color="#fff" size={24} />
        <TouchableOpacity>
          <Text style={styles.moreIcon}>⋮</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
          data ={produtcts}
          renderItem ={({item})=> <ProductItem item={item} />}
          keyExtractor = {item => item.id}
          numColumns = {2}
          columnWrapperStyle= {styles.row}
          style={styles.flatList}
      />

      <View style={styles.footer}>
        <Menu color="#000000" size={30} />
        <Home color="#000000" size={30} />
        <Image source={require('./assets/Vector 1.png')} />
      </View>
    </SafeAreaView>
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E88E5',
    padding: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchIcon: {
    marginLeft: 10,
  },
  moreIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  productItem: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    width: '48%',
    borderRadius: 5,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  star: {
    color: '#ddd',
    fontSize: 16,
  },
  starFilled: {
    color: '#FFD700',
  },
  flatList: {
    flex: 1,
  },
  reviewCount: {
    fontSize: 12,
    color: '#999',
    marginLeft: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5722',
  },
  discount: {
    fontSize: 12,
    color: '#999',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#1BA9FF',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    
  },
  
  
});
