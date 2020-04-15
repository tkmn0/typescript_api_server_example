#!/bin/sh

set -e

echo "Waiting for mysql.."

until mysqladmin ping -h"$DB_HOST" -u"root" -p"$MYSQL_ROOT_PASSWORD" &> /dev/null
do
        echo "ping."
        sleep 1
done

echo "MySQL is up - executing command"