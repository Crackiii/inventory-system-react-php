export class Ajax{

    url = "http://localhost:8080/Work/Pacha%20Da%20Inventory/api/";
    //  action - Entry or Transaction or Search or Dues
    //  data - data to be sent to the end point
    //  url - URL of the end point
    //  type - Cables or Others

    post(action, data, type){
        console.log(action, data, type)
        return new Promise((resolve, reject) => {
            return fetch( this.url,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _data: data,
                    _action: action,
                    _type: type
                })
            })
            .then( r => {
                r.text().then(res => console.log(res))
            })
            // .then( r => r.json() )
            // .then( res => { resolve(res); })
            .catch( error => reject(error) )
        })
    }


    get(action, data, type){
        if(typeof data === "object"){
            data = JSON.stringify(data)
        }
        return new Promise((resolve, reject) => {
            fetch(`${this.url}?_action=${action}&_data=${data}&_type=${type}`, {
                method: "GET"
            })
            // .then( r => {
            //     r.text().then(res => console.log(res))
            // })
            .then( r => r.json() )
            .then( res => {resolve(res) } )
            .catch( error => reject(error) )
        })
    }


    delete(action, data, type){
        return new Promise((resolve, reject) => {
            fetch(this.url, {
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    _data: data,
                    _action: action,
                    _type: type
                })
            })
            .then( r => r.json() )
            .then( res => resolve(res) )
            .catch( error => reject(error) )
        })
    }




}