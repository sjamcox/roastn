import { getSession } from 'next-auth/react'
import dbConnect from '../../../lib/dbConnect'
import Roast from '../../../models/Roast'

export default async function handler(req, res) {
  const { body, method } = req

  const session = await getSession({ req })
  if (!session) {
    return res.status(403).json({ success: false })
  }

  await dbConnect()

  if (method === 'GET') {
    try {
      const roasts = await Roast.find({ email: session.user.email })
      if (!roasts) {
        return res.status(400).json({ success: false })
      }
      res.status(200).json(roasts)
    } catch (error) {
      res.status(400).json({ success: false })
    }
  }

  if (method === 'POST') {
    try {
      body.email = session.user.email
      const roast = await Roast.create(body)
      res.status(200).json(roast)
    } catch (error) {
      res.status(400).json({ success: false })
    }
  }
}
