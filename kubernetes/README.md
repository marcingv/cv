# Polecenia

## Kubectl

```bash
kubectl version --client # Wersja klienta
kubectl cluster-info # Informacje o podlaczonym klastrze

kubectl apply -f=deployment.yml # Aktualizacja konfiguracji

kubectl get deployments
kubectl get services
kubectl get pods

kubectl delete -f=deployment.yml # Usuniecie deploymentu na podstawie konfiguracji
kubectl delete deployment <deploymentName> # Usuniecie deploymentu po nazwie

kubectl rollout status deployment/cv-app-backend-deployment # Status aktualizacji deployment
kubectl rollout history deployment/cv-app-backend-deployment # Historia deploymentow
kubectl rollout history deployment/cv-app-backend-deployment --revision=1 # Szczegoly konkretnego deploymentu
kubectl rollout undo deployment/cv-app-backend-deployment # Wycofanie ostatniego deploymentu
kubectl rollout undo deployment/cv-app-backend-deployment --to-revision=1 # Wycofanie deploymentu do konkretnej wczesniejszej wersji
```

## Minikube

```bash
minikube start
minikube stop

minikube dashboard # Uruchamia panel UI

minikube service <serviceName> # expose service to outside world (np. minikube service cv-backend)
minikube service cv-backend
minikube service cv-frontend
```
