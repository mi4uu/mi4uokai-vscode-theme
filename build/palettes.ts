import { Palette } from './models'

interface PaletteList {
	[key: string]: Palette
}
const red='#ff6d7e'
const orange='#ffb270'
const yellow='#ffed72'
const green='#a2e57b'
const blue='#71d2f0'
const violet='#916DE4'
const white='#f2fffc'
const bg='#3a4449'
export const palettes: PaletteList = {
	default: {
		displayName: "Default",
		colors: ['#FF5252', '#EF652F', '#FFCC4A', '#8BC34A', '#42A5F5', '#A56FFF', '#A3B2BF', '#6C7780'],
	},
	
	mi4uokai: {
		displayName: "mi4uokai",
		colors: [red, orange, yellow, green, blue, violet, white,bg],
	},
	
}
