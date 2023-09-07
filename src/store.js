import create from "zustand";

const useStore = create((set) => ({
    currentMovieUrl: "",
    setCurrentMovieUrl: (url) => set({ currentMovieUrl: url }),
    playing: true,
    togglePlaying: () => set((state) => ({ playing: !state.playing })),
    volume: 0.8,
    setVolume: (volume) => set({ volume }),
    movieList: [],
    addMovieUrl: (url) => set((state) => ({ movieList: [...state.movieList, url] }))
}));

export default useStore;
