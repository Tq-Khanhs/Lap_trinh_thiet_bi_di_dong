import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Review() {
  return (
    <View style={{ flex: 100, paddingHorizontal: 15, marginTop: 40 }}>
      <View
        style={{
          flex: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
       <Image source={require("./usb.png")} />
        <Text style={{ fontSize: 16, fontWeight: "700" }}>
          USB Bluetooth Music Receiver {"\n"}HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View
        style={{
          flex: 80,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700", textAlign: "center" }}>
          Cực kỳ hài lòng
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          <Image source={require("./start.png")} />
          <Image source={require("./start.png")} />
          <Image source={require("./start.png")} />
          <Image source={require("./start.png")} />
          <Image source={require("./start.png")} />
        </View>
        <View style={{ height: "80%", justifyContent: "space-around" }}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              height: 68,
              width: 293,
              borderColor: "#1511EB",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={require("./camera.png")} />
            <Text style={{ fontSize: 18, fontWeight: "700", paddingLeft: 15 }}>
              Thêm hình ảnh
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              height: 222,
              width: 293,
              borderBlockColor: "#C4C4C4",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#C4C4C4" }}>
              Hãy chi sẻ những điều mà bạn thích về sản phẩm
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: 700, alignSelf: "flex-end" }}
            >
              https://meet.google.com/nsj-ojwi-xpp
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#0D5DB6",
              width: 293,
              height: 41,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "#1511EB",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
              Gửi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}