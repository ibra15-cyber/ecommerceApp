const PRODUCTS = [
    {
        id: 100,
        name: 'Casual Short Sleeve',
        price: 17.07,
        image: require('../assets/1.jpg'),
        description: 'Women Sexy Casual Short Sleeve T-shirt Solid Color Burn-out Short Pants Set 2pcs'
    },
    {
        id: 101,
        name: 'Long Sleeve Hollow ',
        price: 19.30,
        image: require('../assets/2.jpg'),
        description: "New Women Long Sleeve Hollow Out Zipper Patchwork Sexy Short Pants Set 2pcs"
    
    },
    {
        id: 102,
        name: 'Casual Long Sleeve ',
        price: 25,
        image: require('../assets/3.jpg'),
        description: 'Women Casual Long Sleeve Bandage T-shirt Solid Color Pleated Pants Set 2pcs'
    },
    {
        id: 103,
        name: 'Bandage Vest Solid ',
        price: 24.61,
        image: require('../assets/4.jpg'),
        description: 'Women Sexy Bandage Vest Solid Color Long Burn-out Draped Pants Set Casual 2pcs'
    },
    {
        id: 104,
        name: 'Tie-dyed Print',
        price: 26.21,
        image: require('../assets/5.jpg'),
        description: 'Fashion Women Tie-dyed Print Short Sleeve T-shirt Long Pants Casual Wear 2pcs'
    },
    {
        id: 105,
        name: 'Long Sleeve T-shirt',
        price: 24.14,
        image: require('../assets/6.jpg'),
        description: 'New Women\'s Long Sleeve T-shirt Solid Color Burn-out Casual Short Pants Set 2pcs'
    },
    {
        id: 106,
        name: 'Fashion Short Sleeve',
        price: 21.06,
        image: require('../assets/7.jpg'),
        description: 'New Women Fashion Short Sleeve Camouflage Print Short Casual Pants Set 2pcs'
    },
    {
        id: 107,
        name: 'Cosmic Dot Gold',
        price: 74.99,
        image: require('../assets/8.jpg'),
        description: 'Show Me Your Mumu Cosmic Dot Gold Campbell High Slit Pants NWT $176',
    },
    {
        id: 108,
        name: 'Short Sleeve Solid',
        price: 26.08,
        image: require('../assets/9.jpg'),
        description: 'Women Fashion Short Sleeve Solid Color Beaded Casual Bodycon Jumpsuit 2pcs',
    },
    {
        id: 109,
        name: 'Design Butt Lift',
        price: 32.98,
        image: require('../assets/10.jpg'),
        description: 'Plus Size / Junior Brazilian Design Butt Lift High Elastic Waist Skinny Jeans',
    },
    {
        id: 110,
        name: 'Design Butt Lift',
        price: 32.98,
        image: require('../assets/11.jpg'),
        description: 'Plus Size / Junior Brazilian Design Butt Lift High Elastic Waist Skinny Jeans',
    },
    {
        id: 111,
        name: 'Round Neck Short',
        price: 21.53,
        image: require('../assets/12.jpg'),
        description: 'Fashion Women Round Neck Short Sleeve T-shirt Solid Color Short Pants Set 2pcs',
    },
    {
        id: 112,
        name: 'Short Sleeve Side ',
        price: 25.20,
        image: require('../assets/13.jpg'),
        description: 'Women Fashion Short Sleeve Side Slit T-shirt Color Block Casual Short Pants Set',
    },
    {
        id: 112,
        name: 'Long Sleeve Eyelted',
        price: 26.03,
        image: require('../assets/14.jpg'),
        description: 'Fashion Women Long Sleeve Eyelted Lace Up T-shirt Solid Color Long Pants Set 2pcs',
    },
    {
        id: 113,
        name: 'Puff Sleeves Solid',
        price: 27.03,
        image: require('../assets/15.jpg'),
        description: 'Women Long Puff Sleeves Solid Color Casual Club Fashion Pockets Pants Set 2pc',
    },
    {
        id: 114,
        name: 'Puff Sleeves Solid',
        price: 24.47,
        image: require('../assets/17.jpg'),
        description: 'Women Long Puff Sleeves Solid Color Casual Club Fashion Pockets Pants Set 2pc',
    },
    {
        id: 114,
        name: 'Coat Down Filler',
        price: 30.51,
        image: require('../assets/18.jpg'),
        description: 'Kenneth Cole Reaction Women Coat Down Filler Puffer Pockets Zip Snap Red Size',
    },
    {
        id: 115,
        name: 'Sleeve Lace Up',
        price: 25.68,
        image: require('../assets/16.jpg'),
        description: 'Women Sleeve Lace Up Colors Patchwork Casual Club Party Short Pants Set 2pc',
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}

