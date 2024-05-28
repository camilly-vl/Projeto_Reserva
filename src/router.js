import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import SectionController from './controllers/SectionController'

const routes = new Router()

routes.post('/sessions', SectionController.store)

export default routes