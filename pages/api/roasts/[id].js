import { getSession } from 'next-auth/react'
import dbConnect from '../../../lib/dbConnect'
import Roast from '../../../models/Roast'

export default async function handler(req, res) {
  console.log('hitting API')
  const { body, method } = req
  const { id } = req.query

  const session = await getSession({ req })
  if (!session) {
    return res.status(403).json({ success: false })
  }

  await dbConnect()

  if (method === 'GET') {
    try {
      const roast = await Roast.findById(id)
      if (roast.email !== session.user.email) {
        return res.status(400).json({ success: false })
      }
      res.status(200).json(roast)
    } catch (error) {
      console.log(error)
      res.status(400).json({ success: false })
    }
  }
}
