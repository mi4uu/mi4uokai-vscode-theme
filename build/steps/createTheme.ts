import * as fs from 'fs'
import path from 'path'
import { palette } from '../palettes'

export const createTheme=async ()=>{
    const template=await Bun.file("build/theme.jsonc").text()
    let result=template

    for(const [key,val] of Object.entries(palette)){
        console.log(`replacing "${key}" with ${val}`)
        result=result.replaceAll(`__${key}__`,`${val}`)
    }
    // write
    await Bun.write(path.join("themes","mi4uokai-color-theme.json"),result)

}

const calculatePercentage=()=>{
    return Math.floor((Math.random() * 100))
}
const addTwoNumbers=(a:number, b:number)=> {
    return a+a
}
// elasticsearch-keystore create