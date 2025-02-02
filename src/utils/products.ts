import { ReactNode } from "react";

export interface Product {
    size: ReactNode;
    color: ReactNode;
    artNo: ReactNode;
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string;
    quantity: number;
    isFavorite?: boolean;
    category: string;
    discount?: number;
  }
  
  export const products: Product[] = [
    {
      id: '1',
      name: 'Euphoria Crop Blouse',
      price: 125000,
      image: 'https://image.cdn2.seaart.me/2024-12-13/ctdpuk5e878c73bf0800-4/dd9560b9cf5d6737a5127a764e311f1f_high.webp',
      description: 'A stylish crop blouse for a relaxed look.',
      quantity: 1,
      size: 'S',
      color: 'Red',
      artNo: 'ART12345',
      category: 'blazer',
      discount: 0.0,
    },
    {
      id: '2',
      name: 'Venus Halter Dress',
      price: 180000,
      image: 'https://image.cdn2.seaart.me/2024-12-14/ctef0nde878c73cf4kog-4/8d13ffe4f5d97c18aafe20f1e9c56923_high.webp',
      description: 'Elegant halter dress for formal occasions.',
      quantity: 1,
      size: 'M',
      color: 'Blue',
      artNo: 'ART23456',
      category: 't-shirt',
      discount: 0.0,
    },
    {
      id: '3',
      name: 'Snap Pure Blouse',
      price: 129000,
      image: 'https://image.cdn2.seaart.me/2024-12-14/ctef14le878c73cf83l0-4/6bf051eef85efc9636fad33366788627_high.webp',
      description: 'A casual blouse for everyday wear.',
      quantity: 1,
      size: 'XL',
      color: 'White',
      artNo: 'ART34567',
      category: 'dress',
      discount: 0.0,
    },
    {
      id: '4',
      name: 'Sapphire Long Dress',
      price: 220000,
      image: 'https://image.cdn2.seaart.me/2024-12-14/ctef1h5e878c73eg50rg-4/b29800787317c4db708a365bbba5d2eb_high.webp',
      description: 'An elegant dress with a flowing design.',
      quantity: 1,
      size: 'M',
      color: 'Green',
      artNo: 'ART45678',
      category: 'blazer',
      discount: 0.0,
    },
    {
      id: '5',
      name: 'Vivid Velvet Top',
      price: 155000,
      image: 'https://image.cdn2.seaart.me/2024-12-13/ctdq08le878c73bk0e90-2/6cddcc536c3f92ebd817304ca012a86b_high.webp',
      description: 'A luxurious velvet top perfect for night outs.',
      quantity: 1,
      size: 'S',
      color: 'Black',
      artNo: 'ART56789',
      category: 't-shirt',
      discount: 0.0,
    },
    {
      id: '6',
      name: 'Midnight Pants',
      price: 98000,
      image: 'https://image.cdn2.seaart.me/2024-12-14/ctef1ule878c73cfeo60-2/51458ba8554bb1212ca8f0afa23a8989_high.webp',
      description: 'Comfortable pants that complement any outfit.',
      quantity: 1,
      size: 'L',
      color: 'Grey',
      artNo: 'ART67890',
      category: 'blazer',
      discount: 0.0,
    },
    {
      id: '7',
      name: 'Venus Halter Dress',
      price: 180000,
      image: 'https://image.cdn2.seaart.me/2024-12-14/ctegbate878c7388tem0/005d2a61bd3783df0ddafdd96b5c1643_high.webp',
      description: 'Elegant halter dress for formal occasions.',
      quantity: 1,
      size: 'M',
      color: 'Pink',
      artNo: 'ART78901',
      category: 'sales',
      discount: 20,
    },
    {
      id: '8',
      name: 'Venus Halter Dress',
      price: 180000,
      image: 'https://image.cdn2.seaart.me/2024-12-14/ctef14le878c73cf83l0-3/43049966e89925bae5dd0884995f321e_high.webp',
      description: 'Elegant halter dress for formal occasions.',
      quantity: 1,
      size: 'L',
      color: 'Purple',
      artNo: 'ART89012',
      category: 'dress',
      discount: 0.0,
    },
    {
      id: '9',
      name: 'Venus Halter Dress',
      price: 180000,
      image: 'https://image.cdn2.seaart.me/2024-12-13/ctdpvo5e878c73fdevv0-2/ca055d31849dbb3850a075956f7075b4_high.webp',
      description: 'Elegant halter dress for formal occasions.',
      quantity: 1,
      size: 'XS',
      color: 'Orange',
      artNo: 'ART90123',
      category: 'macacao',
      discount: 0.0,
    },
    {
      id: '10',
      name: 'Venus Halter Dress',
      price: 180000,
      image: 'https://image.cdn2.seaart.me/2024-12-13/ctdpuk5e878c73bf0800-1/da84734d4462ee3b1fee4bb599a5669e_high.webp',
      description: 'Elegant halter dress for formal occasions.',
      quantity: 1,
      size: 'S',
      color: 'Yellow',
      artNo: 'ART01234',
      category: 'sales',
      discount: 30,
    },
    {
      id: '11',
      name: 'Venus Halter Dress',
      price: 180000,
      image: 'https://image.cdn2.seaart.me/2024-12-13/ctdq3vle878c73b9mdtg-2/f883fed1e729668749c45f799fc172c5_high.webp',
      description: 'Elegant halter dress for formal occasions.',
      quantity: 1,
      size: 'L',
      color: 'Brown',
      artNo: 'ART12346',
      category: 'dress',
      discount: 0.0,
    },
    {
      id: '12',
      name: 'Venus Halter Dress',
      price: 180000,
      image: 'https://image.cdn2.seaart.me/2024-12-14/ctef4qle878c73cg6nng-1/28f509d8fbd76c245211d97f6256ee86_high.webp',
      description: 'Elegant halter dress for formal occasions.',
      quantity: 1,
      size: 'S',
      color: 'Navy',
      artNo: 'ART23457',
      category: 'bottons',
      discount: 50,
    },
  ];
  