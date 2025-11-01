import { Layout } from '@/components/Layout';
import { Bell } from 'lucide-react';

export default function Activity() {
  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <Bell className="h-16 w-16 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-black mb-2">Activity</h1>
        <p className="text-muted-foreground text-center max-w-md">
          Stay updated with mentions, reactions, and important notifications. Activity feed coming soon!
        </p>
      </div>
    </Layout>
  );
}
