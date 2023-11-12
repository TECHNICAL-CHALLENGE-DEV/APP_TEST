import React, { useState, useEffect } from 'react'
import apiStores from '../services/api/apiStores'
import { IStore } from '../services/models/StoreModel'

export enum Status {
  ERROR,
  LOADING,
  SUCCESS
}

export const useStores = () => {
  const [stores, setStores] = useState<IStore[]>([])
  const [status, setStatus] = useState<Status>(Status.LOADING)

  const fetchProducts = async (latitude?: number, longitude?: number) => {
    setStatus(Status.LOADING)
    const response = await apiStores.getAll({ latitude, longitude })
    if (response.error) {
      setStatus(Status.ERROR)
    } else {
      setStores(response.result)
      setStatus(Status.SUCCESS)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return { stores, status, fetchProducts }
}