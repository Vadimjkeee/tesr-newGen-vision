const courseFilter = (coursesList, range) => {
    let [rangeFrom, rangeTo] = range;
    if (rangeTo === null) {
        rangeTo = Infinity;
    }
    const resArr = coursesList.filter((course) => {
        let [courseFrom, courseTo] = course.prices;
        if (courseTo === null) {
            courseTo = Infinity;
        }
        if (courseFrom >= rangeFrom && courseTo <= rangeTo) {
            return true;
        }
    });
    return resArr;
};