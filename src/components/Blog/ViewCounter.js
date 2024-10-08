'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React, { useEffect, useState } from 'react'

//const supabase = createClientComponentClient()

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0)


  if (showCount) {
    return <div>{views} Visualizações</div>
  } else {
    return null
  }
}

export default ViewCounter
