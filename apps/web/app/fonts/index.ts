import localFont from 'next/font/local';

export const Pretendard = localFont({
  src: [
    {
      path: './Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Pretendard-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Pretendard-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Pretendard-Light.woff',
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
});
