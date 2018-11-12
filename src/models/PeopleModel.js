
export default (sequelize, DataType) => {
    const People = sequelize.define('people', {
        id_people: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        name: DataType.STRING,
        cpf_cnpj: DataType.DECIMAL(11, 0),
        rg: DataType.STRING,
        documment: DataType.STRING,
        adress: DataType.STRING,
        number: DataType.STRING,
        neighborhood: DataType.STRING,
        cep: DataType.STRING
       
    },
        {
            tableName: 'people',
            createdAt: false,
            updatedAt: false
        });

    return People;

}