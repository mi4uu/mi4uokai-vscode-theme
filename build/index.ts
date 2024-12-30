import * as fs from 'fs'

import createThemes from './steps/createThemes'
import updateManifest from './steps/updateManifest'

createThemes()
updateManifest()


console.log('done!')
