colegio-crud/
├── config/
│   └── config.json
├── models/
│   ├── index.js
│   └── aluno.js
├── seeders/
│   └── demo-seeder.js
├── app.js
└── package.json

  {
  "development": {
    "username": "Thays",
    "password": "senha1234",
    "database": "Reverendo Erodice",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Aluno = sequelize.define('Aluno', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nota_primeiro_semestre: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    nota_segundo_semestre: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    nome_professor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero_sala: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Aluno.associate = function(models) {
    // associations can be defined here
  };
  return Aluno;
};

'use strict';
const