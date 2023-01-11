function formatGrade(gradeRaw: number) {
    const grade = Number(gradeRaw).toFixed(2).replace('.', ',')

    return grade
}

export default formatGrade