export const jsxToCss = function(jsx){
  jsx = jsx.replace(new RegExp(/"/gi), '').replace(/'/gi, '').replace(/,/gi, ';') //" '를 없애고 ,를 ;으로 바꾼다
  let index = jsx.search(/[A-Z]+/)
  while(index !== -1){ //대문자를 소문자로 교체하고 -를 붙인다
    let cap = jsx.substr(index, 1)
    jsx = jsx.substring(0, index) + '-' + cap.toLowerCase() + jsx.substring(index + 1) 
    index = jsx.search(/[A-Z]+/)
  }
  return jsx
}

export const cssToJsx = function(css){
  let newArr = []
  let splitedCss = css.split(':')
  splitedCss.forEach((cssTmpArr)=>{
    
    if(cssTmpArr.indexOf(';')!==-1){
      let splitedCssTmpArr = cssTmpArr.split(';')
      let newTrimedArr = []
      splitedCssTmpArr.forEach((tmp)=>{
        if(tmp.length!==0)
          newTrimedArr.push(tmp.trim())
      })
      newArr = newArr.concat(newTrimedArr)
    } else {
      newArr.push(cssTmpArr)
    }
  })
  let result = ''
  newArr.forEach((e, index)=>{
    if(index%2===0){
      let dashIndex = e.search(/-/)
      if(dashIndex !== -1){
        let afterDash = e.substr(dashIndex + 1, 1)
        result += `"${e.substring(0, dashIndex)}${afterDash.toUpperCase()}${e.substring(dashIndex + 2)}":`
      } else {
        result += `"${e}":`
      }
    } else {
      result += `"${e}";\n`
    }
  })
  return result
}