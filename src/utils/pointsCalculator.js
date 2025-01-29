const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 50) {
        points += (amount - 50) * 1;
    }
    if (amount > 100) {
        points += (amount - 100) * 1;
    }
    return points;
};

export { calculatePoints };
