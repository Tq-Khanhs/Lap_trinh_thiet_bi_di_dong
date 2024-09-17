
import React from "react";
import { View } from "react-native";
import { Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

function TikiOk() {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(141800);
  return (
    <View
      style={{
        flex: 100,
        backgroundColor: "#C4C4C4",
      }}
    >
      <View
        style={{
          flex: 50,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{ flexDirection: "row", paddingTop: 70, marginBottom: 30 }}
          >
            <Image source={require("./book.png")} />
            <View
              style={{ paddingHorizontal: 20, justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 12, fontWeight: 700 }}>
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 700 }}>
                Cung cấp bởi Tiki Trading
              </Text>
              <Text style={styles.price}>141.800 đ</Text>
              <Text
                style={{
                  textDecorationLine: "line-through",
                  color: "#808080",
                  fontSize: 12,
                }}
              >
                141.800 đ
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "40%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#C4C4C4",
                      paddingHorizontal: 10,
                      borderRadius: 1,
                    }}
                    onPress={() => {
                      setCount(count - 1 > 0 ? count - 1 : 1);
                      setPrice(price);
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontWeight: "700", fontSize: 16 }}>
                    {count}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#C4C4C4",
                      paddingHorizontal: 7,
                      borderRadius: 1,
                    }}
                    onPress={() => {
                      setCount(count + 1);
                      setPrice(price);
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.text_link}>Mua sau</Text>
              </View>
            </View>
          </View>
          <View style={{ height: 120, justifyContent: "space-between" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "60%",
              }}
            >
              <Text>Mã giảm giá đã lưu</Text>
              <Text style={styles.text_link}>Xem tại đây</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={{
                  borderColor: "#C4C4C4",
                  borderWidth: 1,
                  borderRadius: 2,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "60%",
                  height: 50,
                }}
              >
                <Image source={require("./yellow_block.png")} />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "700",
                  }}
                >
                  Mã giảm giá
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#0A5EB7",
                  borderRadius: 2,
                  width: "30%",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    fontWeight: "700",
                    textAlign: "center",
                    height: 50,
                    lineHeight: 50,
                  }}
                >
                  Áp dụng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{ flex: 50, justifyContent: "space-between" }}>
        <View style={{ height: "40%", justifyContent: "space-between" }}>
          <View
            style={{
              backgroundColor: "#fff",
              height: 50,
              marginTop: 27,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "700" }}>
              Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
            </Text>
            <Text style={styles.text_link}>Nhập tại đây?</Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              height: 50,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>Tạm tính</Text>
            <Text style={styles.price}>
              {(price * count).toLocaleString()}đ
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            height: 120,
            paddingHorizontal: 20,
            justifyContent: "space-around",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#808080" }}>
              Thành tiền
            </Text>
            <Text style={styles.price}>
              {(price * count).toLocaleString()}đ
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#E53935",
              height: 45,
              borderRadius: 2,
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 20,
                fontWeight: "700",
                lineHeight: 45,
              }}
            >
              TIẾN HÀNH ĐẶT HÀNG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text_link: {
    fontSize: 12,
    color: "#134FEC",
    fontWeight: "700",
  },
  price: {
    color: "#EE0D0D",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TikiOk;
