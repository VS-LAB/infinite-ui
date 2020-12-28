export function stripScript (content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}
  
export function stripStyle (content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}
  
export function stripTemplate (content) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}

export function isFirefox() {
    var sAgent = window.navigator.userAgent.toLowerCase();
    if (sAgent.indexOf("firefox") != -1) {
       return true;
    } 
    return false;
}
