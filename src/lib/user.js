'use client'

import React, { useState } from 'react'
import { DB } from './axios'

export default function user() {

    const [user , setUser]=useState(false)

    DB.get('/auth').then(res=>{setUser(res.data.user)})



    
  return user
}

