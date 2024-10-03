import { Factory } from 'miragejs';

export default Factory.extend({

  name(i) {
    return i==0 ? "Beats Solo Wireless Headphones" : "Nike Aire Force 1" 
  },
  
  description(i) {
    return i==0 ? "With up to 40 hours of battery life, Beats Solo Wireless is your perfect everyday headphone" 
    : "Debuting in 1982, the AF1 was the first basketball shoe to house Nike Air, revolutionizing the game while rapidly gaining traction around the world." 
  },
  price(i){
    return i==0 ? {original: 199.95, current: 99.98} : {original: 109.95, current: 89.98} 
  },
  features(i) {
    return i==0 ? [
      "High-performance wireless noise cancelling headphones in red",
      "Active Noise Cancelling (ANC) blocks external noise",
      "Transparency helps you stay aware of your surroundings while listening",
      "Features the Apple H1 Headphone Chip and Class 1 Bluetooth for extended range and fewer dropouts",
      "Compatible with iOS and Android",
      "Hands-free controls via “Hey Siri” on iOS devices, and voice capability with the push of the b button on a variety of compatible devices ",
      "Up to 22 hours of listening time (up to 40 hours with ANC and Transparency turned off)"
    ] : 
    [
      "Full-grain leather in the upper adds a premium look and feel.",
      "Originally designed for performance hoops, Nike Air cushioning adds lightweight, all-day comfort.",
      "The padded, low-cut collar looks sleek and feels great."
    ]
  },
  colors(i) {
    return i==0 ? [{
        color: "red",
        image: "https://nqmsstorageac.blob.core.windows.net/ember/beats-solo-red-19dda6ac98a267922725f4ff91d517ec.png"
      },
      {
        color: "black",
        image: "https://nqmsstorageac.blob.core.windows.net/ember/beats-solo-black-52e1a828d72c9ab5329a99d037f6b445.png"
      }
    ] : 
    [{
      color: "white",
      image: "https://nqmsstorageac.blob.core.windows.net/ember/nike-af1-white-3783124e847169fc0dcda716c8dbc9db.png"
    }]
  }
});
