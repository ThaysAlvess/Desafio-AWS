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
    idade: 14; {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nota_primeiro_semestre: 8;{
      type: DataTypes.FLOAT,
      allowNull: false
    },
    nota_segundo_semestre:5,1; {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    nome_professor: = Rogerio; {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero_sala: 7; {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Aluno.associate = function(Thays) {
    // associations can be defined here
  };
  return Aluno;
};

'use strict';
const  
