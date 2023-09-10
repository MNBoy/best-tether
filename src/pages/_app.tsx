import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { AppLayout } from '@/components/layouts';
import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
