export const getAllModules = async () => {
   return [
    {
        id: 1,
        courseId: 1,
        title: 'Module 1',
    },
    {
        id: 2,
        courseId: 1,
        title: 'Module 2',
    }
   ]
}

export const getModuleById = async (id: number) => {
    const modules = await getAllModules();
    return modules.find(module => module.id === id);
}

export const getModulesByCourseId = async (courseId: number) => {
    const modules = await getAllModules();
    return modules.filter(module => module.courseId === courseId);
}

export const createModule = async (module: any) => {
    const modules = await getAllModules();
    const newModule = { id: modules.length + 1, ...module };
    modules.push(newModule);
    return newModule;
}

export const updateModule = async (id: number, moduleData: any) => {
    const modules = await getAllModules();
    const index = modules.findIndex(module => module.id === id);
    if (index !== -1) {
        modules[index] = { ...modules[index], ...moduleData };
        return modules[index];
    }
    return null;
}

export const deleteModule = async (id: number) => {
    const modules = await getAllModules();
    const index = modules.findIndex(module => module.id === id);
    if (index !== -1) {
        const deletedModule = modules[index];
        modules.splice(index, 1);
        return deletedModule;
    }
    return null;
}