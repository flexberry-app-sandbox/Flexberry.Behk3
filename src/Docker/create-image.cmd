docker build --no-cache -f SQL\Dockerfile.PostgreSql -t behk3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t behk3/app ../..
