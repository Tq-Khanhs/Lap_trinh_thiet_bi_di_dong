import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { ArrowLeft, Home, ArrowRight, ShoppingCart } from 'lucide-react-native';

const data = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini...',
    shop: 'Shop Devang',
    image: require("./assets/ca_nau_lau.png"),
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI ...',
    shop: 'Shop LTD Food',
    image: require("./assets/ga_bo_toi.png"),
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    shop: 'Shop Thế giới đồ chơi',
    image: require("./assets/xa_can_cau.png"),
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    shop: 'Shop Thế giới đồ chơi',
    image: require("./assets/do_choi_dang_mo_hinh.png"),
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    shop: 'Shop Minh Long Book',
    image: require("./assets/lanh_dao_gian_don.png"),
  },
  {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    shop: 'Shop Minh Long Book',
    image: require("./assets/hieu_long_con_tre.png"),
  },
  {
      id:'7',
      title: 'Donal Trump thiên tài lãnh đạo',
      shop: 'Shop Minh Long Book',
      image: require("./assets/trump 1.png"),
  }
];

const Item = ({ item }) => (
  <View style={styles.item}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.itemContent}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.shop}>{item.shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

export default function Component() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ArrowLeft color="#fff" size={24} />
        <Text style={styles.headerTitle}>Chat</Text>
        <ShoppingCart color="#fff" size={24} />
      </View>
      <View style={styles.content}>
        <View style={styles.notice}>
          <Text style={styles.noticeText}>
            Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
          </Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        <Image source={require("./assets/group.png")}/>
        <Home color="#000" size={24} />
        <Image source={require("./assets/vector.png")}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1BA9FF',
    padding: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  notice: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
  },
  noticeText: {
    fontSize: 14,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 1,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  shop: {
    fontSize: 14,
    color: '#666',
  },
  chatButton: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1BA9FF',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'center',
  },
});
