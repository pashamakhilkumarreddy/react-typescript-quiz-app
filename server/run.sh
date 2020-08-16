#!/bin/bash

echo "Waiting for mongo..."

ENVS=(development staging testing production)

while ! nc -z $MONGO_HOST $MONGO_PORT; do
	sleep 0.1
done

echo "Successfully connected to the Database"
echo "Running API Server"

if [ ${#ENVS[@]} -gt 0 ]; then
	case $NODE_ENV in

		dev | ENVS[0])
			npm run start
		;;

		stage | ENVS[1])
			npm run dev
		;;
	
		test | $ENVS[2])
			npm run dev;;

		prod | $ENVS[3])
			npm run prod
		;;

	*)
		npm run dev
		;;
	esac
fi
