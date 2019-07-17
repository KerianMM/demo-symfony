export default new class Logger {
    constructor(){
        this.key = (new Date()).getTime();
    }

    get key() {
        return this._key;
    }

    set key(key){
        this._key = key;
    }

    makeMessage(message){
        let now = new Date();
        let dateString = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

        return `${this.key} [${dateString}] ${message}`;
    }

    log(message){
        console.log(this.makeMessage(message));
    }
}