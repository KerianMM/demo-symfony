module.exports = class Logger {
    constructor($){
        this.key = (new Date()).getTime();
        this.jQuery = $;
    }

    get key() {
        return this._key;
    }

    set key(key){
        this._key = key;
    }

    get jQuery() {
        return this._jQuery;
    }

    set jQuery(jQuery){
        this._jQuery = jQuery;
    }

    makeMessage(message){
        let now = new Date();
        let dateString = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

        return `${this.key} [${dateString}] ${message}`;
    }

    log(message){
        console.log(this.makeMessage(message));
        console.log(this.jQuery("h1").html());
    }
};