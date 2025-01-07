export function test_list(list: List<number>): void {
    list.append(5);
    list.append(7);
    list.append(9);

    // console.log(list.length);
    // console.log(list.get(2));
    // console.log(list.get(3));

    expect(list.get(2)).toEqual(9);
    // console.log(list.length);
    // console.log(list.get(1));
    expect(list.removeAt(1)).toEqual(7);
    // console.log(list.length);
    // console.log(list.get(1));
    // console.log(list.get(1));

    expect(list.length).toEqual(2);

    list.append(11);
    // console.log(list);
    // console.log(list.length);

    expect(list.removeAt(1)).toEqual(9);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);
}
