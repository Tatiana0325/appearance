export default class Settings {
    constructor() {
        this.setting = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    }

    change(key, item) {
        if(this.setting.has(key)) {
            if(((key == 'theme') && (['light', 'grey'].indexOf(item) == -1)) || 
            ((key == 'music') && (['pop', 'rock', 'chillout', 'off'].indexOf(item) == -1)) || 
            ((key == 'difficulty') && (['normal', 'hard', 'nightmare'].indexOf(item) == -1))) {
                throw new Error('Значение неподходит');
            };

            this.setting.set(key, item);
        } else {
            throw new Error('Ключа не существует');
        }
    }

    getSettings() {
        return Array.from(this.setting);
    }
}