import { Router } from 'express'
import {  getUsuario, getUsuarios, postUsuario,deleteUsuarios,putUsuarios } from '../controllers/usuarios'



const router = Router()


router.get('/',       getUsuarios );
router.get('/:id',    getUsuario );
router.post('/',      postUsuario );
router.put('/:id',    putUsuarios );
router.delete('/:id', deleteUsuarios );






export default router