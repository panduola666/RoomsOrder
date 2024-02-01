export interface culinary {
  _id: string,
  title: string,
  description: string,
  diningTime: string,
  image: string,
  [params: string]: any // createdAt, updatedAt
}