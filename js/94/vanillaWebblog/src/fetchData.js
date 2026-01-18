export class FetchData {

    async fetchData(url) {
        let data;
        try {
            const r = await fetch(`${url}`);
            if (!r.ok) {
                throw new Error(`${r.status} - ${r.statusText}`);
            }
            data = r.json();
        } catch (error){
            console.error(error);
            alert(error);
        }
        return data;
    }
}
export function loadContent(content){
    const main = document.querySelector('main');
    main.append(content);
}