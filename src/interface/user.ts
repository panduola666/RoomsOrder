export interface userInfo {
  _id: string,
  updatedAt: string,
  phone: string,
  name: string,
  email: string,
  createdAt: string,
  birthday: string,
  address: {
    detail: string,
    zipcode: number
  }
}