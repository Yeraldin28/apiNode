import {Router} from 'express';
import { getProperties, getProperty, createProperty, updateProperty, deleteProperty, updateCreProperty } from '../controllers/property.controller.js';
const router = Router();
router.get('/property',getProperties);

router.get('/property/:id',getProperty);

router.delete('/property/:id', deleteProperty);

router.post('/propertycreate', createProperty);

router.get('/propertyupdate/:id', updateProperty);

router.post('/propertCrearyupdate', updateCreProperty);



export default router