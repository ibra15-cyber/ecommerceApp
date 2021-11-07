const PRODUCTS = [
    {
        id: 100,
        name: 'ReactProX Headset',
        price: 350,
        image: require('../assets/products/headset-100.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'FastLane Toy Car',
        price: 600,
        image: "https://www.google.com/search?q=clothing+image&tbm=isch&source=iu&ictx=1&fir=8eGJ53lFmaGZ4M%252C5o4Gjh-j-2kFyM%252C_%253B3-ghHx66YjWDeM%252CshogPPjR6zCAxM%252C_%253B9mEFEGXt3uRJeM%252Cp6cmjOAmohrCFM%252C_%253B-1EHQ2KJRLnbIM%252CeprsbQDntAYjFM%252C_%253BbKLWTvnIeW87SM%252CS3Djsp6hblVZNM%252C_%253B-UK6g8WQJ92gjM%252Cog3X8m-1mFqDEM%252C_%253B39XaOl_bcQQqMM%252Cqwm3RWLKbmkR7M%252C_%253BUbu6d0Ep-QNS5M%252CGSHgIVN8_09UMM%252C_%253BWdenNV9iBkymzM%252CshogPPjR6zCAxM%252C_%253BCF3s-zvHynEUEM%252Cq3DhIKvhRz-njM%252C_%253BmiMQohP7Jwe_fM%252CpJd3t3xp8xRdXM%252C_%253Bm24RfvUmZhIYJM%252CshogPPjR6zCAxM%252C_%253BZ-mayiZc3KQG2M%252CeprsbQDntAYjFM%252C_&vet=1&usg=AI4_-kQlN-QzUih_ag2M4tT1os4JE9GNVQ&sa=X&ved=2ahUKEwjaivX6rIf0AhVy5eAKHefNAo4Q9QF6BAgEEAE#imgrc=8eGJ53lFmaGZ4M",
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'SweetHome Cupcake',
        price: 2,
        image: require('../assets/products/cake-102.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },

    {
        id: 103,
        name: 'ReactProX Headset',
        price: 350,
        image: "https://i.ibb.co/S6qMxwr/jean.jpg",
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 104,
        name: 'FastLane Toy Car',
        price: 600,
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 105,
        name: 'SweetHome Cupcake',
        price: 2,
        image: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png",
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },

    {
        id: 106,
        name: 'SweetHome Cupcake',
        price: 2,
        image: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png",
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },

    {
        id: 107,
        name: 'SweetHome Cupcake',
        price: 2,
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },

    {
        id: 108,
        name: 'SweetHome Cupcake',
        price: 2,
        image: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png",
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 109,
        image: "https://i.ibb.co/XsdmR2c/1.png",
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "f5fafd",
      },
      {
        id: 110,
        image: "https://i.ibb.co/DG69bQ4/2.png",
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fcf1ed",
      },
      {
        id: 111,
        image: "https://i.ibb.co/cXFnLLV/3.png",
        title: "LOUNGEWEAR LOVE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fbf0f4",
      },
  
  
      {
        id: 112,
        image: "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "SHIRT STYLE!",
      },
      {
        id: 113,
        image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "LOUNGEWEAR LOVE",
      },
      {
        id: 114,
        image: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "LIGHT JACKETS",
      },

      {
        id:115,
        image:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
      },
      {
        id:116,
        image:"https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
      },
      {
        id:117,
        image:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
      },
      {
        id:118,
        image:"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
      },
      {
        id:119,
        image:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
      },
      {
        id:120,
        image:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
      },
      {
        id:121,
        image: "https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png",
      },
      {
        id:122,
        image:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
      },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

