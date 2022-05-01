### Se conectar usando um usuário específico
```mongo -u financas_user -p financas_password --authenticationDatabase db_financas```

### Usar um banco de dados específico
```use financas```

### Listar bancos de dados
```show dbs```

### Listar coleções criadas
```show collections```

### Criar uma coleção nova (é case sensitive)
```db.createColletion('nomeDaMinhaColecao')```

### Deletar uma coleção
```db.nomeDaMinhaColecao.drop()```

### Inserir documento em uma coleção
```db.nomeDaMinhaColecao.insert({ name: "Nome", value: 100, status: "PENDENTE" })```

### Pegar todos os registros da coleção
```db.nomeDaMinhaColecao.find()```

### Pegar todos os registros da coleção com filtro
```db.nomeDaMinhaColecao.find({ name: "Nome" })```

```db.nomeDaMinhaColecao.find({ value: 100 })```

```db.nomeDaMinhaColecao.find({ name: "Nome", value: 100 })```

### Pegar apenas um registro de acordo com o filtro
```db.nomeDaMinhaColecao.findOne({ name: "Nome" })```

### Filtrar utilizando o operador "ou"
```db.nomeDaMinhaColecao.find({ $or: [{ month: 1 }, { month: 2 }] })```

### Usando função de agregação
```db.nomeDaMinhaColecao.aggregate([{$project:{credit:{$sum:"$credits.value"},debt:{$sum:"$debts.value"}},},{$group:{_id:null,credit:{$sum:"$credit"},debt:{$sum:"$debt"}}}])```

### Fazendo update em um documento
```db.nomeDaMinhaColecao.update({ $and: [{ month: 1 }, { year: 2017 }] }, { $set:{ credits: [{ name: "Salário", value: 5000 }]}})```

### Exibindo apenas o atributo indicado
```db.nomeDaMinhaColecao.find({ credits: { $exists: true } }, { _id: 0, name: 1 }).pretty()```

### Excluindo um elemento pelo mês
```db.nomeDaMinhaColecao.remove({ month: 1 })```

### Excluindo elementos pelo ano mas limitando a 1 exclusão
```db.nomeDaMinhaColecao.remove({ year: 2017 }, 1)```

### Excluindo o restante dos registros apenas pelo ano sem limite
```db.nomeDaMinhaColecao.remove({ year: 2017 })```

### Para exibir a quantidade de registros
```db.nomeDaMinhaColecao.count()```

### Apagar o banco de dados em uso no momento
```db.dropDatabase()```