export interface FacilityInfo {
  title: string,
  isProvide: boolean,
}

export interface AmenityInfo {
  title: string,
  isProvide: boolean,
}

export interface Room {
  name: string,
  description: string,
  imageUrl: string,
  imageUrlList: string[],
  areaInfo: string,
  bedInfo: string,
  maxPeople: number,
  price: number,
  status: number,
  _id: string,
  facilityInfo: FacilityInfo[],
  amenityInfo: AmenityInfo[],
  [params: string]: any // createdAt, updatedAt
}