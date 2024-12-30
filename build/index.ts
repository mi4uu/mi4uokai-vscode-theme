import * as fs from 'fs'

import createThemes from './steps/createThemes'
import updateManifest from './steps/updateManifest'
import { createTheme } from './steps/createTheme'

createThemes()
await createTheme()
updateManifest()



console.log('done!')
