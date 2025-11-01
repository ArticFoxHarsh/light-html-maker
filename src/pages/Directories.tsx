import { Layout } from '@/components/Layout';
import { Users } from 'lucide-react';

export default function Directories() {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <Users className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-black mb-2">Directories</h1>
        <p className="text-muted-foreground text-center max-w-md">
          Browse team members, channels, and apps in your workspace. Directory features coming soon!
        </p>
      </div>
    </Layout>
  );
}
