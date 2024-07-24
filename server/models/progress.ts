export const getAllProgress = async () => {
    return [
        {
            id: 1,
            traineeId: 2,
            courseId: 1,
            moduleId: 1,
            status: 'completed'
        },
        {
            id: 2,
            traineeId: 2,
            courseId: 1,
            moduleId: 2,
            status: 'in-progress'
        }
    ]
}

export const getProgressById = async (id: number) => {
    const progress = await getAllProgress();
    return progress.find(progress => progress.id === id);
}

export const createProgress = async (progress: any) => {
    const progresses = await getAllProgress();
    const newProgress = { id: progresses.length + 1, ...progress };
    progresses.push(newProgress);
    return newProgress;
}

export const updateProgress = async (id: number, progressData: any) => {
    const progresses = await getAllProgress();
    const index = progresses.findIndex(progress => progress.id === id);
    if (index !== -1) {
        progresses[index] = { ...progresses[index], ...progressData };
        return progresses[index];
    }
    return null;
}

export const deleteProgress = async (id: number) => {
    const progresses = await getAllProgress();
    const index = progresses.findIndex(progress => progress.id === id);
    if (index !== -1) {
        const deletedProgress = progresses[index];
        progresses.splice(index, 1);
        return deletedProgress;
    }
    return null;
}