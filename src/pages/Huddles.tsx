import { Layout } from '@/components/Layout';
import { Phone } from 'lucide-react';

export default function Huddles() {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <Phone className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-black mb-2">Huddles</h1>
        <p className="text-muted-foreground text-center max-w-md">
          Start or join quick audio conversations with your team. Huddles functionality coming soon!
        </p>
      </div>
    </Layout>
  );
}
