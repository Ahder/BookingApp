export async function launchSncfRequest(query: any) {
    let response = await fetch(`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q=${query}`)
        .catch((e) => alert(e));
    if (!response) {
        return;
    }
    let data = await response.json().catch(error => {
        console.log(error)
    });
    return data.records.map((gare: any) =>  {return gare.fields.gare_ut_libelle});
}
    
