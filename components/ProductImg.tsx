'use client'
import useColorMode from '@/hooks/useColorMode';
import Image from 'next/image';

export default function ProductImg() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <>
      <Image src={colorMode === 'light' ? "/product_dark.png" : "/product.png"} alt="Product" width={1200} height={500} />
    </>
  )
}
