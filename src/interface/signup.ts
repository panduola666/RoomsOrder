export interface SignInBody {
  name: string,
  email: string,
  password: string,
  phone: string,
  birthday: string,
  address: {
    zipcode: null | number,
    detail: string
  }
}

export interface AccountData {
  email: string
  password: string
}

export interface UserInfoData {
  name: string,
  phone: string,
  birthday: string,
  address: {
    zipcode: null | number,
    detail: string
  }
}

export interface CityCounty {
  CityName: string,
  CityEngName: string,
  AreaList: AreaListData[]
}

export interface AreaListData {
  ZipCode: string,
  AreaName: string,
  AreaEngName: string
}