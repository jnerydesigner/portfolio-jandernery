import { Redirect as NextRedirect} from 'next';

interface Redirect {
  source: string;
  destination: string;
  permanent: boolean;
}

const redirects: NextRedirect[] = [
  {
    source: '/about',
    destination: '/',
    permanent: true,
  },
];

export default redirects;