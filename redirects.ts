type NextRedirect<T = Record<string, any>> = T & {
    source: string;
    destination: string;
    permanent: boolean;
  };
  
  const redirects: NextRedirect[] = [
    {
      source: '/about',
      destination: '/',
      permanent: true,
    },
  ];
  
  export default redirects;