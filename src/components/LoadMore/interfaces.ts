export interface ILoadMore {
  loadingOffset: number;
  infiniteScroll: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
}
