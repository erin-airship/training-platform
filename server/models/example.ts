import {prisma} from '../utils/prisma';

export const getAllExamples = async () => {
    return [{
        id: 1,
        name: 'Example 1'
    }, {
        id: 2,
        name: 'Example 2'
    }, {
        id: 3,
        name: 'Example 3'
    }]
};

export const getAllForUser = async (userId: number) => {
    return [{
        id: 1,
        name: 'Example 1'
    }, {
        id: 2,
        name: 'Example 2'
    }, {
        id: 3,
        name: 'Example 3'
    }]
  }

export const getExampleById = async (id: number) => {
    return {
        id: id,
        name: `Example ${id}`
    };
}

export const createExample = async (name: string) => {
    return {
        id: 1,
        name: name
    };
}

export const updateExample = async (id: number, name: string) => {
    return {
        id: id,
        name: name
    };
}

export const deleteExample = async (id: number) => {
    return {
        id: id,
        name: `Example ${id}`
    };
}

export const getAllUsers = async () => {
    return await prisma.users.findMany();
}
