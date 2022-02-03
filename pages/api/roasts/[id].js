import { getSession } from 'next-auth/react'
import dbConnect from 'lib/dbConnect'
import Roast from 'models/Roast'

export default async function handler(req, res) {
  const { body, method } = req
  const { id: _id } = req.query

  const session = await getSession({ req })
  if (!session) {
    return res.status(403).json({ success: false })
  }

  const { email } = session.user
  await dbConnect()

  if (method === 'GET') {
    try {
      const roast = await Roast.findOne({ _id, email })
      if (!roast) {
        return res.status(400).json({ success: false })
      }
      res.status(200).json(roast)
    } catch (error) {
      res.status(400).json({ success: false })
    }
  }

  if (method === 'PUT') {
    try {
      const roast = await Roast.findOneAndUpdate({ _id, email }, body, {
        new: true,
      })
      if (!roast) {
        return res.status(400).json({ success: false })
      }
      res.status(200).json(roast)
    } catch (error) {
      res.status(400).json({ success: false })
    }
  }

  if (method === 'DELETE') {
    try {
      const roast = await Roast.findOneAndDelete({ id, email })
      if (!roast) {
        return res.status(400).json({ success: false })
      }
      res.status(200).json(roast)
    } catch (error) {
      res.status(400).json({ success: false })
    }
  }
}
