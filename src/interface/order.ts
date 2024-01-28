export interface orderData {
  checkInDate: string;
  checkOutDate: string;
  peopleNum: number;
  _id: string;
  roomId: {
    imageUrl: string;
    name: string;
    price: number;
    [roomKey: string]: any
  };
  [params: string]: any
}