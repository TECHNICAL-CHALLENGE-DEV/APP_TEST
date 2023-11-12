export interface IStore {
  id: number,
  name: string,
  bannerUrl: string,
  latitude: number,
  longitude: number,
  openTime: string,
  closeTime: string,
  distanceInKm: number,
  isOpen: boolean
}