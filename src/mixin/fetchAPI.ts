const { VITE_API_PATH } = import.meta.env

export default function () {
  async function _fetch(url: string, method:string, body = {}) {
    const res = await fetch(`${VITE_API_PATH}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    return res.json()
  }
  return {
    _fetch
  }
}