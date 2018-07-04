# AutoPlacement
Place les apprenants sur une disposition de Tables.

# Pour pouvoir executer le projet en local

## Mise en place ( 1ère fois seulement )
```bash
git clone https://github.com/loicneyron/AutoPlacement
cd AutoPlacement
docker-compose up
```
Puis dans un autre terminal, dans le dossier AutoPlacement :
```bash
docker exec -i -t autoplacement_db_1 sh -c "mysql -h autoplacement_db_1 -u root -p < app/migration.sql"
# Mot de passe : p4ssword
```

## Lancer le projet (après la première fois )
```bash
docker-compose up
```

# URL Du projet

Application : http://localhost:8080

Admin ( BDD )  : http://localhost:8081
- host: autoplacement_db_1
- user: root
- password: 'p4ssword

# Executer le script d'insertion en BDD des positions
```bash
docker exec -i -t autoplacement_node_1 sh -c "node app/generate_placement.js"
```