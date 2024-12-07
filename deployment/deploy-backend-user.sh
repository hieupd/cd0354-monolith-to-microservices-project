## Apply env variables and secrets
kubectl apply -f aws-secret.yaml
kubectl apply -f env-secret.yaml
kubectl apply -f env-configmap.yaml
## Deployments - Double check the Dockerhub image name and version in the deployment files
kubectl apply -f backend-user-deployment.yaml
## Do the same for other three deployment files
## Service
kubectl apply -f backend-user-service.yaml
## Do the same for other three service files