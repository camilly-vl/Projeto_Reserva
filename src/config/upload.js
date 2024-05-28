import multer from 'multer'
import path from 'path'

export default {
  storage: multer.diskStorage({
    destination: path.resolve(_dirname, '..', '..', 'uploads'),
    filename: (req, res, cb) => {
      const ext = path.extname(file.originalname, ext);
      cb(null, `${name}-${Date.now()}${ext}`)
    },
  })
}