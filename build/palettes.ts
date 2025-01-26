import { Palette } from "./models";
import Color from "./color.js";
import { color } from "bun";

interface PaletteList {
	[key: string]: Palette;
}
const change_l=(color:string,v:number)=>{
	let c = new Color(color)
	c.lch.l=v
	return c.toString()
}
const make_darker=(color:string)=>{
	let c = new Color(color)
	c.darken()
	return c.toString()
}
const make_lighter=(color:string)=>{
	let c = new Color(color)
	c.lighten()
	return c.toString()
}
// const make_darker=(color:string)=>change_l(color,41)
// const make_darker_more=(color:string)=>change_l(color,10)
// const make_lighter=(color:string)=>change_l(color,60)
const make_lighter_more=(color:string)=>change_l(color,80)
const make_lighter_more2=(color:string)=>change_l(color,90)

const make_alpha_01=(color:string)=>{
	return `${color}26`
}
const make_alpha_02=(color:string)=>{
	return `${color}0c`
}
const make_alpha_03=(color:string)=>{
	return `${color}a5`
}
const make_alpha_04=(color:string)=>{
	return `${color}19`
}
const make_alpha_05=(color:string)=>{
	return `${color}bf`
}
const make_alpha_06=(color:string)=>{
	return `${color}7f`
}
const make_alpha_07=(color:string)=>{
	return `${color}59`
}
const make_alpha_08=(color:string)=>{
	return `${color}1a`
}
const palette = {
	red: "#ff6d7e",
	orange: "#ffb270",
	yellow: "#ffed72",
	green: "#a2e57b",
	blue: "#71d2f0",
	purple: "#916DE4",
	white: "#f2fffc",
	bg: "#3a4449",
	foreground: "#273136",
	gray: "#6b7678",
	black:"#000000"
};
palette['red_strong']=make_lighter(palette.red)
// palette['gray_light']=make_lighter(palette.gray)
// palette['gray_dark']=make_darker(palette.gray)
// palette['foreground_lighter']=make_lighter_more(palette.foreground)
// palette['bg_dark']=make_darker(palette.bg)
// palette['yellow_bright']=make_lighter_more2(palette.yellow)
for(const [k,v] of Object.entries(palette)){
	palette[`${k}_light`]=make_lighter(v)
	palette[`${k}_lighter`]=make_lighter(palette[`${k}_light`])
	palette[`${k}_bright`]=make_lighter(palette[`${k}_lighter`])
	palette[`${k}_dark`]=make_darker(v)
	palette[`${k}_darker`]=make_darker(palette[`${k}_dark`])
	palette[`${k}_darkest`]=make_darker(palette[`${k}_darker`])

	palette[`${k}_alpha01`]=make_alpha_01(v)
	palette[`${k}_alpha02`]=make_alpha_02(v)
	palette[`${k}_alpha03`]=make_alpha_03(v)
	palette[`${k}_alpha04`]=make_alpha_04(v)
	palette[`${k}_alpha05`]=make_alpha_05(v)
	palette[`${k}_alpha06`]=make_alpha_06(v)
	palette[`${k}_alpha07`]=make_alpha_07(v)
	palette[`${k}_alpha08`]=make_alpha_08(v)


}


console.log(palette)

export const palettes: PaletteList = {
	default: {
		displayName: "Default",
		colors: [
			"#FF5252",
			"#EF652F",
			"#FFCC4A",
			"#8BC34A",
			"#42A5F5",
			"#A56FFF",
			"#A3B2BF",
			"#6C7780",
		],
	},

	mi4uokai: {
		displayName: "Mi4uokai",
		colors: [
			palette.red,
			palette.orange,
			palette.yellow,
			palette.green,
			palette.blue,
			palette.purple,
			palette.white,
			palette.bg,
		],
	},
};

export {palette}