// Prisma client will be used to interact with the database
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