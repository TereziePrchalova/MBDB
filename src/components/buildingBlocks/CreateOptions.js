function CreateOptions(list, label) {
    if (list && list.length > 0) {
        return list.map(item => ({ value: item.name, label: item.name }));
    } else {
        return [{ label }];
    }
}

export default CreateOptions;