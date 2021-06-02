import mongoose from 'mongoose'
import { connect } from '../../utils/db'
import { Item } from './item.model'

const run = async () => {
  await connect('mongodb://localhost:2701/api-test')
  const item = await Item.create({
    name: 'Clean up',
    createdBy: mongoose.Types.ObjectId(),
    list: mongoose.Types.ObjectId()
  })

  console.log(item)
}

run()
// export default crudControllers(Item)
