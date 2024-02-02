const { VITE_API_PATH } = import.meta.env
console.log('import.meta',import.meta);

interface requestFormat {
  method:string,
  headers: {
    'Content-Type': string,
    'Authorization': string
  },
  body?: any
}

export default async function (url: string, method:string = 'GET', body = {}): Promise<any> {
    const data: requestFormat = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }
    if(method !== 'GET') {
      data.body = JSON.stringify(body)
    }
    console.log('VITE_API_PATH',VITE_API_PATH);

    const res = await fetch(`${VITE_API_PATH}${url}`, data)
    return res.json()
}