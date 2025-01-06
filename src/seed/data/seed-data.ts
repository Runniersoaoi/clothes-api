import * as bcrypt from 'bcrypt';

interface SeedProduct {
  description: string;
  productImages: string[];
  stock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  name: string;

  gender: 'men' | 'women' | 'kid' | 'unisex';
}

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

interface SeedUser {
  email: string;
  fullName: string;
  password: string;
  roles: string[];
}
interface SeedData {
  products: SeedProduct[];
  users: SeedUser[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'test1@google.com',
      fullName: 'test1',
      password: bcrypt.hashSync('Abc123', 10),
      roles: ['admin'],
    },
    {
      email: 'test2@google.com',
      fullName: 'test1',
      password: bcrypt.hashSync('Abc123', 10),
      roles: ['user', 'super-user'],
    },
  ],
  products: [
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.',
      productImages: ['1740176-00-A_0_2000.jpg', '1740176-00-A_1.jpg'],
      stock: 7,
      price: 75,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'mens_chill_crew_neck_sweatshirt',

      tags: ['sweatshirt'],
      name: 'Men’s Chill Crew Neck Sweatshirt',
      gender: 'men',
    },
    {
      description:
        "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
      productImages: ['1740507-00-A_0_2000.jpg', '1740507-00-A_1.jpg'],
      stock: 5,
      price: 200,
      sizes: ['XS', 'S', 'M', 'XL', 'XXL'],
      slug: 'men_quilted_shirt_jacket',

      tags: ['jacket'],
      name: "Men's Quilted Shirt Jacket",
      gender: 'men',
    },

    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
      productImages: ['1740250-00-A_0_2000.jpg', '1740250-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      slug: 'men_raven_lightweight_zip_up_bomber_jacket',

      tags: ['shirt'],
      name: "Men's Raven Lightweight Zip Up Bomber Jacket",
      gender: 'men',
    },

    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      productImages: ['1740280-00-A_0_2000.jpg', '1740280-00-A_1.jpg'],
      stock: 50,
      price: 45,
      sizes: ['XS', 'S', 'M', 'L'],
      slug: 'men_turbine_long_sleeve_tee',

      tags: ['shirt'],
      name: "Men's Turbine Long Sleeve Tee",
      gender: 'men',
    },
    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
      productImages: ['1741416-00-A_0_2000.jpg', '1741416-00-A_1.jpg'],
      stock: 50,
      price: 40,
      sizes: ['M', 'L', 'XL', 'XXL'],
      slug: 'men_turbine_short_sleeve_tee',

      tags: ['shirt'],
      name: "Men's Turbine Short Sleeve Tee",
      gender: 'men',
    },
    {
      description:
        'Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.',
      productImages: ['7654393-00-A_2_2000.jpg', '7654393-00-A_3.jpg'],
      stock: 0,
      price: 35,
      sizes: ['M', 'L', 'XL', 'XXL'],
      slug: 'men_cybertruck_owl_tee',

      tags: ['shirt'],
      name: "Men's Cybertruck Owl Tee",
      gender: 'men',
    },
    {
      description:
        "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      productImages: ['1703767-00-A_0_2000.jpg', '1703767-00-A_1.jpg'],
      stock: 15,
      price: 35,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'men_solar_roof_tee',

      tags: ['shirt'],
      name: "Men's Solar Roof Tee",
      gender: 'men',
    },
    {
      description:
        "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
      productImages: ['1700280-00-A_0_2000.jpg', '1700280-00-A_1.jpg'],
      stock: 17,
      price: 35,
      sizes: ['XS', 'S', 'XL', 'XXL'],
      slug: 'men_let_the_sun_shine_tee',

      tags: ['shirt'],
      name: "Men's Let the Sun Shine Tee",
      gender: 'men',
    },
    {
      description:
        "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
      productImages: ['8764734-00-A_0_2000.jpg', '8764734-00-A_1.jpg'],
      stock: 12,
      price: 35,
      sizes: ['XS', 'S', 'M'],
      slug: 'men_3d_large_wordmark_tee',

      tags: ['shirt'],
      name: "Men's 3D Large Wordmark Tee",
      gender: 'men',
    },
    {
      description:
        'Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.',
      productImages: ['7652426-00-A_0_2000.jpg', '7652426-00-A_1.jpg'],
      stock: 5,
      price: 35,
      sizes: ['XS', 'S'],
      slug: 'men_3d_t_logo_tee',

      tags: ['shirt'],
      name: "Men's 3D T Logo Tee",
      gender: 'men',
    },
    {
      description:
        'Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.',
      productImages: ['8528839-00-A_0_2000.jpg', '8528839-00-A_2.jpg'],
      stock: 2,
      price: 35,
      sizes: ['XS', 'S', 'M'],
      slug: 'men_3d_small_wordmark_tee',

      tags: ['shirt'],
      name: 'Men’s 3D Small Wordmark Tee',
      gender: 'men',
    },
    {
      description:
        "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
      productImages: ['1549268-00-A_0_2000.jpg', '1549268-00-A_2.jpg'],
      stock: 82,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'men_plaid_mode_tee',

      tags: ['shirt'],
      name: "Men's Plaid Mode Tee",
      gender: 'men',
    },
    {
      description:
        "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
      productImages: ['9877034-00-A_0_2000.jpg', '9877034-00-A_2.jpg'],
      stock: 24,
      price: 35,
      sizes: ['XL', 'XXL'],
      slug: 'men_powerwall_tee',

      tags: ['shirt'],
      name: "Men's Powerwall Tee",
      gender: 'men',
    },
    {
      description:
        'Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.',
      productImages: ['1633802-00-A_0_2000.jpg', '1633802-00-A_2.jpg'],
      stock: 5,
      price: 30,
      sizes: ['XS', 'S', 'XXL'],
      slug: 'men_battery_day_tee',

      tags: ['shirt'],
      name: "Men's Battery Day Tee",
      gender: 'men',
    },
    {
      description:
        'Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.',
      productImages: ['7654399-00-A_0_2000.jpg', '7654399-00-A_1.jpg'],
      stock: 150,
      price: 30,
      sizes: ['M', 'L'],
      slug: 'men_cybertruck_bulletproof_tee',

      tags: ['shirt'],
      name: 'Men’s Cybertruck Bulletproof Tee',
      gender: 'men',
    },
    {
      description:
        'Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.',
      productImages: ['7652410-00-A_0.jpg', '7652410-00-A_1_2000.jpg'],
      stock: 10,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'men_haha_yes_tee',

      tags: ['shirt'],
      name: "Men's Haha Yes Tee",
      gender: 'men',
    },
    {
      description:
        'Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.',
      productImages: ['8764600-00-A_0_2000.jpg', '8764600-00-A_2.jpg'],
      stock: 34,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L'],
      slug: 'men_s3xy_tee',

      tags: ['shirt'],
      name: "Men's S3XY Tee",
      gender: 'men',
    },
    {
      description:
        "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
      productImages: ['8764813-00-A_0_2000.jpg', '8764813-00-A_1.jpg'],
      stock: 15,
      price: 40,
      sizes: ['XL', 'XXL'],
      slug: 'men_3d_wordmark_long_sleeve_tee',

      tags: ['shirt'],
      name: "Men's 3D Wordmark Long Sleeve Tee",
      gender: 'men',
    },
    {
      description:
        "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
      productImages: ['8529198-00-A_0_2000.jpg', '8529198-00-A_1.jpg'],
      stock: 12,
      price: 40,
      sizes: ['XS', 'XXL'],
      slug: 'men_3d_t_logo_long_sleeve_tee',

      tags: ['shirt'],
      name: "Men's 3D T Logo Long Sleeve Tee",
      gender: 'men',
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
      productImages: ['1740245-00-A_0_2000.jpg', '1740245-00-A_1.jpg'],
      stock: 10,
      price: 115,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'men_raven_lightweight_hoodie',

      tags: ['hoodie'],
      name: "Men's Raven Lightweight Hoodie",
      gender: 'men',
    },
    {
      description:
        'Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.',
      productImages: ['1740051-00-A_0_2000.jpg', '1740051-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'chill_pullover_hoodie',

      tags: ['hoodie'],
      name: 'Chill Pullover Hoodie',
      gender: 'unisex',
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
      productImages: ['1741111-00-A_0_2000.jpg', '1741111-00-A_1.jpg'],
      stock: 100,
      price: 85,
      sizes: ['XS', 'L', 'XL', 'XXL'],
      slug: 'men_chill_full_zip_hoodie',

      tags: ['shirt'],
      name: "Men's Chill Full Zip Hoodie",
      gender: 'men',
    },
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.',
      productImages: ['1740140-00-A_0_2000.jpg', '1740140-00-A_1.jpg'],
      stock: 7,
      price: 85,
      sizes: ['XS', 'S', 'M'],
      slug: 'men_chill_quarter_zip_pullover_-_gray',

      tags: ['shirt'],
      name: "Men's Chill Quarter Zip Pullover - Gray",
      gender: 'men',
    },
    {
      description:
        'Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.',
      productImages: ['1740145-00-A_2_2000.jpg', '1740145-00-A_1.jpg'],
      stock: 15,
      price: 85,
      sizes: ['XS', 'S', 'M', 'L'],
      slug: 'men_chill_quarter_zip_pullover_-_white',

      tags: ['shirt'],
      name: "Men's Chill Quarter Zip Pullover - White",
      gender: 'men',
    },
    {
      description:
        'The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.',
      productImages: ['8529107-00-A_0_2000.jpg', '8529107-00-A_1.jpg'],
      stock: 15,
      price: 70,
      sizes: ['XS', 'S', 'XL', 'XXL'],
      slug: '3d_large_wordmark_pullover_hoodie',

      tags: ['hoodie'],
      name: '3D Large Wordmark Pullover Hoodie',
      gender: 'unisex',
    },
    {
      description:
        'As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.',
      productImages: ['7654420-00-A_0_2000.jpg', '7654420-00-A_1_2000.jpg'],
      stock: 13,
      price: 60,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'cybertruck_graffiti_hoodie',

      tags: ['hoodie'],
      name: 'Cybertruck Graffiti Hoodie',
      gender: 'unisex',
    },
    {
      description:
        'The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.',
      productImages: ['1657932-00-A_0_2000.jpg', '1657932-00-A_1.jpg'],
      stock: 11,
      price: 30,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'relaxed_t_logo_hat',

      tags: ['hats'],
      name: 'Relaxed T Logo Hat',
      gender: 'unisex',
    },
    {
      description:
        'The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.',
      productImages: ['1740417-00-A_0_2000.jpg', '1740417-00-A_1.jpg'],
      stock: 13,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'thermal_cuffed_beanie',

      tags: ['hats'],
      name: 'Thermal Cuffed Beanie',
      gender: 'unisex',
    },
    {
      description:
        "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
      productImages: ['1740535-00-A_0_2000.jpg', '1740535-00-A_1.jpg'],
      stock: 85,
      price: 225,
      sizes: ['XS', 'S', 'M'],
      slug: 'women_cropped_puffer_jacket',

      tags: ['hoodie'],
      name: "Women's Cropped Puffer Jacket",
      gender: 'women',
    },
    {
      description:
        "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
      productImages: ['1740226-00-A_0_2000.jpg', '1740226-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['XS', 'S', 'M', 'XXL'],
      slug: 'women_chill_half_zip_cropped_hoodie',

      tags: ['hoodie'],
      name: "Women's Chill Half Zip Cropped Hoodie",
      gender: 'women',
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
      productImages: ['1740260-00-A_0_2000.jpg', '1740260-00-A_1.jpg'],
      stock: 9,
      price: 110,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'women_raven_slouchy_crew_sweatshirt',

      tags: ['hoodie'],
      name: "Women's Raven Slouchy Crew Sweatshirt",
      gender: 'women',
    },
    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
      productImages: ['1740290-00-A_0_2000.jpg', '1740290-00-A_1.jpg'],
      stock: 10,
      price: 45,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'women_turbine_cropped_long_sleeve_tee',

      tags: ['shirt'],
      name: "Women's Turbine Cropped Long Sleeve Tee",
      gender: 'women',
    },
    {
      description:
        "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
      productImages: ['1741441-00-A_0_2000.jpg', '1741441-00-A_1.jpg'],
      stock: 0,
      price: 40,
      sizes: ['XS', 'S'],
      slug: 'women_turbine_cropped_short_sleeve_tee',

      tags: ['shirt'],
      name: "Women's Turbine Cropped Short Sleeve Tee",
      gender: 'women',
    },
    {
      description:
        "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
      productImages: ['8765090-00-A_0_2000.jpg', '8765090-00-A_1.jpg'],
      stock: 30,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'women_t_logo_short_sleeve_scoop_neck_tee',

      tags: ['shirt'],
      name: "Women's T Logo Short Sleeve Scoop Neck Tee",
      gender: 'women',
    },
    {
      description:
        "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
      productImages: ['8765100-00-A_0_2000.jpg', '8765100-00-A_1.jpg'],
      stock: 16,
      price: 40,
      sizes: ['XS', 'S', 'L', 'XL', 'XXL'],
      slug: 'women_t_logo_long_sleeve_scoop_neck_tee',

      tags: ['shirt'],
      name: "Women's T Logo Long Sleeve Scoop Neck Tee",
      gender: 'women',
    },
    {
      description:
        "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
      productImages: ['8765120-00-A_0_2000.jpg', '8765120-00-A_1.jpg'],
      stock: 18,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'women_small_wordmark_short_sleeve_v-neck_tee',

      tags: ['shirt'],
      name: "Women's Small Wordmark Short Sleeve V-Neck Tee",
      gender: 'women',
    },
    {
      description:
        "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
      productImages: ['8765115-00-A_0_2000.jpg', '8765115-00-A_1.jpg'],
      stock: 5,
      price: 35,
      sizes: ['XL', 'XXL'],
      slug: 'women_large_wordmark_short_sleeve_crew_neck_tee',

      tags: ['shirt'],
      name: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
      gender: 'women',
    },
    {
      description:
        "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
      productImages: ['1549275-00-A_0_2000.jpg', '1549275-00-A_1.jpg'],
      stock: 16,
      price: 35,
      sizes: ['S', 'M'],
      slug: 'women_plaid_mode_tee',

      tags: ['shirt'],
      name: "Women's Plaid Mode Tee",
      gender: 'women',
    },
    {
      description:
        "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
      productImages: ['9877040-00-A_0_2000.jpg', '9877040-00-A_1.jpg'],
      stock: 10,
      price: 130,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'women_powerwall_tee',

      tags: ['shirt'],
      name: 'Women’s Powerwall Tee',
      gender: 'women',
    },
    {
      description:
        "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
      productImages: ['5645680-00-A_0_2000.jpg', '5645680-00-A_3.jpg'],
      stock: 3,
      price: 90,
      sizes: ['M', 'L', 'XL', 'XXL'],
      slug: 'women_corp_jacket',

      tags: ['shirt'],
      name: "Women's Corp Jacket",
      gender: 'women',
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
      productImages: ['1740270-00-A_0_2000.jpg', '1740270-00-A_1.jpg'],
      stock: 162,
      price: 100,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'women_raven_joggers',

      tags: ['shirt'],
      name: "Women's Raven Joggers",
      gender: 'women',
    },
    {
      description:
        'Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.',
      productImages: ['1742694-00-A_1_2000.jpg', '1742694-00-A_3.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids_cybertruck_long_sleeve_tee',

      tags: ['shirt'],
      name: 'Kids Cybertruck Long Sleeve Tee',
      gender: 'kid',
    },
    {
      description:
        'The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.',
      productImages: ['8529312-00-A_0_2000.jpg', '8529312-00-A_1.jpg'],
      stock: 0,
      price: 25,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids_scribble_t_logo_tee',

      tags: ['shirt'],
      name: 'Kids Scribble T Logo Tee',
      gender: 'kid',
    },
    {
      description:
        'The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.',
      productImages: ['8529342-00-A_0_2000.jpg', '8529342-00-A_1.jpg'],
      stock: 10,
      price: 25,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids_cybertruck_tee',

      tags: ['shirt'],
      name: 'Kids Cybertruck Tee',
      gender: 'kid',
    },
    {
      description:
        "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
      productImages: ['8529354-00-A_0_2000.jpg', '8529354-00-A_1.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids_racing_stripe_tee',

      tags: ['shirt'],
      name: 'Kids Racing Stripe Tee',
      gender: 'kid',
    },
    {
      description:
        'Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.',
      productImages: ['7652465-00-A_0_2000.jpg', '7652465-00-A_1.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids_3d_t_logo_tee',

      tags: ['shirt'],
      name: 'Kids 3D T Logo Tee',
      gender: 'kid',
    },
    {
      description:
        'The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.',
      productImages: ['100042307_0_2000.jpg', '100042307_alt_2000.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids_checkered_tee',

      tags: ['shirt'],
      name: 'Kids Checkered Tee',
      gender: 'kid',
    },
    {
      description:
        'For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru',
      productImages: ['1473809-00-A_1_2000.jpg', '1473809-00-A_alt.jpg'],
      stock: 16,
      price: 25,
      sizes: ['XS', 'S'],
      slug: 'made_on_earth_by_humans_onesie',

      tags: ['shirt'],
      name: 'Made on Earth by Humans Onesie',
      gender: 'kid',
    },
    {
      description:
        'The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.',
      productImages: ['8529387-00-A_0_2000.jpg', '8529387-00-A_1.jpg'],
      stock: 0,
      price: 30,
      sizes: ['XS', 'S'],
      slug: 'scribble_t_logo_onesie',

      tags: ['shirt'],
      name: 'Scribble T Logo Onesie',
      gender: 'kid',
    },
    {
      description:
        'Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.',
      productImages: ['1473834-00-A_2_2000.jpg', '1473829-00-A_2_2000.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S'],
      slug: 'zero_emissions_(almost)_onesie',

      tags: ['shirt'],
      name: 'Zero Emissions (Almost) Onesie',
      gender: 'kid',
    },
    {
      description:
        'Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.',
      productImages: ['1742702-00-A_0_2000.jpg', '1742702-00-A_1.jpg'],
      stock: 10,
      price: 65,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids_cyberquad_bomber_jacket',

      tags: ['shirt'],
      name: 'Kids Cyberquad Bomber Jacket',
      gender: 'kid',
    },
    {
      description:
        'Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.',
      productImages: ['1506211-00-A_0_2000.jpg', '1506211-00-A_1_2000.jpg'],
      stock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids_corp_jacket',

      tags: ['shirt'],
      name: 'Kids Corp Jacket',
      gender: 'kid',
    },
  ],
};