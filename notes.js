/*

in order to deploy a project into ECS first we need to create the image on ECR

from ECS we read the container image from ECR

1. create ECR image

execute push commands (log in, build and tag)

login:

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 590184017378.dkr.ecr.us-east-1.amazonaws.com


build:

docker build -t nextjs-blog .

tag:

docker tag nextjs-blog:latest 590184017378.dkr.ecr.us-east-1.amazonaws.com/nextjs-blog:latest


push the image to the ecr:

docker push 590184017378.dkr.ecr.us-east-1.amazonaws.com/nextjs-blog:latest



next go into ECS and set up the code (the image)

first create cluster



next, create a task definition
*/
