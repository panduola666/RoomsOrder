export interface Service {
  title: string
  isProvide: boolean
}
export interface orderData {
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
  _id: string;
  roomId: {
    imageUrl: string;
    name: string;
    price: number;
    layoutInfo: Service[],
    facilityInfo: Service[],
    amenityInfo: Service[],
    [roomKey: string]: any
  };
  [params: string]: any
}