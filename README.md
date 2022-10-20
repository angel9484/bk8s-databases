# bk8s-databases

## Cockroach (PostgreSQL):
- helm dependency update cockroach/cockroach
- helm install cockroach cockroach/cockroach
- Change replicas to 5
- helm upgrade cockroach cockroach/cockroach
- cockroach sql --insecure
- 

## MySQL
- helm dependency update mysql/mysql
- helm install mysql mysql/mysql --namespace mysql-operator --create-namespace
- kubectl apply -f mysql/create-mysql.yaml
- kubectl get services --all-namespaces
- kubectl delete -f mysql/create-mysql.yaml
- helm delete mysql --namespace mysql-operator

## Client:
- port forward the cockroach-cockroachdb-public http to 57037 - http://localhost:57037
- port forward the cockroach-cockroachdb-public grpc to 50350 - postgresql://root@localhost:50350/defaultdb.public?sslmode=disable
- run index.js