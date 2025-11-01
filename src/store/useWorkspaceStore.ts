import { create } from 'zustand';

interface WorkspaceStore {
  activeChannel: string;
  sidebarCollapsed: boolean;
  setActiveChannel: (channelId: string) => void;
  toggleSidebar: () => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  activeChannel: '',
  sidebarCollapsed: false,
  setActiveChannel: (channelId) => set({ activeChannel: channelId }),
  toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
}));
