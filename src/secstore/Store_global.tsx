import create from 'zustand';

type CounterState = {
  value: boolean;
  ThunkValue: () => void;
};

const globalStore = create<CounterState>((set) => ({
    value: false,
    ThunkValue: () => set((state) => ({ value: !state.value })),

}));

export default globalStore;
