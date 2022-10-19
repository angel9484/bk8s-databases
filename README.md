# bk8s-databases

## Cockroach (PostgreSQL):
- helm dependency update cockroach/cockroach
- helm install cockroach cockroach/cockroach
- Change replicas to 5
- helm upgrade cockroach cockroach/cockroach

## MySQL
- helm dependency update mysql/mysql
- helm install mysql mysql/mysql --namespace mysql-operator --create-namespace
- kubectl apply -f mysql/create-mysql.yaml
- kubectl get services --all-namespaces
- 