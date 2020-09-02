import React, { useEffect } from 'react'
import Tmdb from './tmdb'

export default () => {
  useEffect(() => {
    const loadAll = async () => {
      let list = Tmdb.getHomeList()
      console.log(list)
    }
    loadAll()
  }, [])
  return 'OlaMundo'
}