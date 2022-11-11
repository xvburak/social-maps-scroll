export async function load({data, fetch}) {
    const response = await fetch('https://sheetdb.io/api/v1/l0wrfzdpks9l3')
    const items = await response.json()
    return {
        items
    }
}