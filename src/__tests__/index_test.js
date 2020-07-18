import Setttings from '../js/index';

const set = new Setttings();

test('Изменение значения theme', () => {
    set.change('theme', 'light');
    const result = set.setting.get('theme');
    expect(result).toBe('light')
});

test('Изменение значения music', () => {
    set.change('music', 'pop');
    const result = set.setting.get('music');
    expect(result).toBe('pop')
});

test('Изменение значения difficulty', () => {
    set.change('difficulty', 'normal');
    const result = set.setting.get('difficulty');
    expect(result).toBe('normal')
});

test('Ошибка в theme', () => {
    expect(() => {
        set.change('theme', 'la la la');
    }).toThrow()
});

test('Ошибка в music', () => {
    expect(() => {
        set.change('music', 'la la la');
    }).toThrow()
});

test('Ошибка в difficulty', () => {
    expect(() => {
        set.change('difficulty', 'la la la');
    }).toThrow()
});

test('Ключа не сущесвует', () => {
    expect(() => {
        set.change('la la la', 'light');
    }).toThrow()
});

test('Вывод параметров', () => {
    set.change('theme', 'light');
    set.change('music', 'pop');
    set.change('difficulty', 'normal');
    expect(set.getSettings()).toEqual([['theme', 'light'], ['music', 'pop'], ['difficulty', 'normal']])
});