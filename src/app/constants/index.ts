export default function getVar(
  name: any,
  defaultValue?: string,
  returnBoolean?: boolean
) {
    console.log(process.env );
    
  return returnBoolean
    ? JSON.parse(process.env[name] || defaultValue || "")
    : process.env[name] || defaultValue || "";
}
