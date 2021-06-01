import { Router } from 'express'

const mockController = (req, res) => {
  res.json({ message: 'ok' })
}

const router = Router()

router
  .route('/')
  .get(mockController)
  .post(mockController)

router
  .route('/:id')
  .get(mockController)
  .put(mockController)
  .delete(mockController)

export default router
