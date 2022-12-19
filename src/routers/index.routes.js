import {Router} from 'express';
import {index, ping } from '../controllers/index.controller.js';
import { getProperties, getProperty, createProperty, updateProperty, deleteProperty } from '../controllers/property.controller.js';



const router = Router();
router.get('/',index );
router.get('/ping',ping );

export default router