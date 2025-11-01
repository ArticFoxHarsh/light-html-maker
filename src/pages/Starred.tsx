import { Layout } from '@/components/Layout';
import { Star } from 'lucide-react';

export default function Starred() {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <Star className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-black mb-2">Starred</h1>
        <p className="text-muted-foreground text-center max-w-md">
          Quick access to your starred messages and important items. Starred items coming soon!
        </p>
      </div>
    </Layout>
  );
}
