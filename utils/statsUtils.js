const calculateStandardDeviation = (numbers) => {
    if (numbers.length === 0) return 0;

    const mean = numbers.reduce((acc, value) => acc + value, 0) / numbers.length

    const squaredDiffs = numbers.map(value => (value - mean) ** 2)

    const avgSquaredDiff = squaredDiffs.reduce((acc, value) => acc + value, 0) / numbers.length

    return Math.sqrt(avgSquaredDiff)
}

export default calculateStandardDeviation