import * as fs from 'fs'
import path from 'path'
import { palettes } from '../palettes'

export default function updateManifest() {
	console.log('--- updating manifest ---')

	let packageJson = JSON.parse(fs.readFileSync('package.json').toString())

	packageJson.contributes.iconThemes = []
	for (const palletteId in palettes) {
		// console.log('- ' + palletteId)

		const pallette = palettes[palletteId]

		const iconThemeDirname = path.join('dist/', palletteId)
		const iconThemeFilename = path.join(iconThemeDirname, 'normal.json')
		const fullPalletteId = palletteId === 'default' ? 'sharp-icons' : 'sharp-icons_' + palletteId
		const fullDisplayName = 'mi4uokai - Sharp Icons - ' + pallette.displayName

		let packageJsonEntry = {
			id: fullPalletteId + '_folderless',
			label: fullDisplayName + ' - No Folders',
			path: path.join(iconThemeDirname, 'folderless.json')
		}
		if(palletteId!=='default')
		packageJson.contributes.iconThemes.push(packageJsonEntry)
		packageJsonEntry = {
			id: fullPalletteId,
			label: fullDisplayName,
			path: iconThemeFilename
		}
		if(palletteId!=='default')
		packageJson.contributes.iconThemes.push(packageJsonEntry)
		
	}

	fs.writeFileSync('package.json', JSON.stringify(packageJson, null, '\t'))

}
