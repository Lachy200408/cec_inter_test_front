import { useEffect, useState } from 'react'

export function useApi<DataType>(url: string) {
  const [data, setData] = useState<DataType | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchData = (_url: string) => {
    setData(null)
    setError(null)
    setLoading(true)

    fetch(process.env.NEXT_PUBLIC_API_URL + _url)
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  return { data, error, loading, refetch: fetchData }
}
