name1 = 'Vishnu'
name2 = 'Singapore'

String_final = `Hi, my name is ${name1} and I live in ${name2}`

console.log(String_final);

console.log(name1.length)
console.log(name1.toUpperCase())
console.log(name1.charAt(5))
console.log(name1.substring(0,4))

String_name= "   Vishnu     "
console.log(String_name)
console.log(String_name.trim())

const url = "https://www.j%20p.com"
console.log(url.replace('%20',''))
console.log(url.includes('www'))
console.log(url.includes('12314'))

const name3 = 'JP-name-String'
console.log(name3.split('-'))